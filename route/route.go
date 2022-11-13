package route

import (
	"go-desk/customrequest"

	"go-desk/logs"
	"go-desk/responses"
	"go-desk/usertype"
	"math"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "add":
		Add(request)
	case "getroutes":
		GetRoutes(request)
	case "getroutesfiltered":
		GetRoutesFiltered(request)
	case "delete":
		Delete(request)
	case "update":
		Update(request)
	case "check":
		Check(request)
	default:
		responses.NotFound(request)
	}
}

//Add add a new route
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := routeJSON.Exist()
	if exist && err == nil {
		responses.BadRequest(request, "Route already exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	routeJSON.IDInsertUser = request.Claims.IDUser
	routeJSON.IDEditUser = request.Claims.IDUser
	for i := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = request.Claims.IDUser
		usertype.DB = DB
		u, err := usertype.GetUserTypeFromDescription(routeJSON.Permissions[i].UserType.Description)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = routeJSON.Add()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}

func GetRoutesFiltered(request customrequest.CustomRequest) {
	DB = request.DB

	filter, ok := request.Parameters["filter"]
	if !ok {
		filter = ""
	}

	result, err := LoadRoutesFiltered(filter)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

//GetRoutes returns all routes configured in the database
func GetRoutes(request customrequest.CustomRequest) {
	DB = request.DB

	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("routes", "GetRoutes", "Parameter page not valid", logs.Error, err.Error())
			responses.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}

	result, err := LoadRoutes(page*request.Config.Pagination, request.Config.Pagination)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	count, err := CountRoute()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	countFloat := float64(count)
	paginationFloat := float64(request.Config.Pagination)
	pageNumber := int(math.Ceil(countFloat / paginationFloat))
	responses.Ok(request, result, page, int(pageNumber))
}

//Delete delete a route from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("routes", "DeleteRoute", "Parameter id not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	err = DeleteRecord(int64(id))
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//Update a route in the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := routeJSON.Exist()
	if !exist && err != nil {
		responses.BadRequest(request, "Route not exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	for i := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = request.Claims.IDUser
		usertype.DB = DB
		u, err := usertype.GetUserTypeFromDescription(routeJSON.Permissions[i].Description)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = routeJSON.Update()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//Check check if user has permission to open this route
func Check(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	permission, err := routeJSON.CheckRoute(request.Claims.IDUserType)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, permission, 0, 0)
}
