package route

import (
	"database/sql"
	"go-cms/customrequest"
	"go-cms/database"
	"go-cms/logs"
	"go-cms/responses"
	"math"
	"strconv"
)

// ParseRoute handle the func specified in the apirequest
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

// Add add a new route
func Add(request customrequest.CustomRequest) {
	var routeJSON database.Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	// request.DB.RouteExist(routeJSON)
	if request.DB.RouteExist(routeJSON) {
		responses.BadRequest(request, "Route already exist")
		return
	}

	routeJSON.IDInsertUser = request.Claims.IDUser
	routeJSON.IDEditUser = sql.NullInt64{Int64: request.Claims.IDUser, Valid: true}
	for i := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = sql.NullInt64{Int64: request.Claims.IDUser, Valid: true}

		u, err := request.DB.GetUserTypeFromDescription(routeJSON.Permissions[i].UserType.Description)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = request.DB.AddRoute(routeJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}

func GetRoutesFiltered(request customrequest.CustomRequest) {
	// filter, ok := request.Parameters["filter"]
	// if !ok {
	// 	filter = ""
	// }

	result, err := request.DB.GetRoutes(0*request.Config.Pagination, request.Config.Pagination)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

// GetRoutes returns all routes configured in the database
func GetRoutes(request customrequest.CustomRequest) {
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

	result, err := request.DB.GetRoutes(page*request.Config.Pagination, -1)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	count, err := request.DB.CountRoutes()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	countFloat := float64(count)
	paginationFloat := float64(request.Config.Pagination)
	pageNumber := int(math.Ceil(countFloat / paginationFloat))
	responses.Ok(request, result, page, int(pageNumber))
}

// Delete delete a route from database
func Delete(request customrequest.CustomRequest) {
	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("routes", "Delete", "Parameter id not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	err = request.DB.Delete("Routes", "ID", id)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	err = request.DB.Delete("RoutePermissions", "IDRoute", id)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}

// Update a route in the database
func Update(request customrequest.CustomRequest) {
	var routeJSON database.Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist := request.DB.RouteExist(routeJSON)
	if !exist {
		responses.BadRequest(request, "Route not exist")
		return
	}
	for i := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = sql.NullInt64{Int64: request.Claims.IDUser, Valid: true}

		u, err := request.DB.GetUserTypeFromDescription(routeJSON.Permissions[i].Description)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = request.DB.UpdateRoute(routeJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// Check check if user has permission to open this route
func Check(request customrequest.CustomRequest) {
	var routeJSON database.Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	_, err = request.DB.GetRouteForUserType(request.Claims.IDUserType, routeJSON.Package, routeJSON.Func, string(routeJSON.Type), string(routeJSON.Method))
	if err != nil && err.Error() != "no route foud" {
		responses.InternalServerError(request, err.Error())
		return
	} else if err != nil {
		responses.NotFound(request)
		return
	}

	responses.Ok(request, true, 0, 0)
}
