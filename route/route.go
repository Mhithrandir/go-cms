package route

import (
	"cms/commons"
	"cms/config"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"cms/usertype"
	"log"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "addroute":
		AddRoute(request)
	case "getroutes":
		GetRoutes(request)
	case "getroutesfiltered":
		GetRoutesFiltered(request)
	case "deleteroute":
		DeleteRoute(request)
	case "updateroute":
		UpdateRoute(request)
	case "checkroute":
		CheckRoute(request)
	default:
		errorpages.NotFound(request)
	}
}

//AddRoute add a new route
func AddRoute(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	exist, err := routeJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Route already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	routeJSON.IDInsertUser = request.Claims.IDUser
	routeJSON.IDEditUser = request.Claims.IDUser
	for i, _ := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = request.Claims.IDUser
		usertype.DB = DB
		u, err := usertype.GetUserTypeFromDescription(routeJSON.Permissions[i].Description)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = routeJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}

func GetRoutesFiltered(request customrequest.CustomRequest) {
	DB = request.DB

	_package, ok := request.Parameters["package"]
	if !ok {
		_package = ""
	}
	_func, ok := request.Parameters["func"]
	if !ok {
		_func = ""
	}
	_type, ok := request.Parameters["type"]
	if !ok {
		_type = ""
	}

	result, err := LoadRoutesFiltered(_package, _func, _type)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, result, 0, 0)
}

// getroutesfiltered

//GetRoutes returns all routes configured in the database
func GetRoutes(request customrequest.CustomRequest) {
	DB = request.DB

	page, err := strconv.Atoi(request.Parameters["page"])
	if err != nil {
		logs.Save("routes", "GetRoutes", "Parameter page not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}
	var _config config.Config
	err = config.LoadConfiguration(&_config)
	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	result, err := LoadRoutes(page*_config.Pagination, _config.Pagination)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	count, err := CountRoute()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, result, page, int(count)/_config.Pagination)
}

//DeleteRoute delete a route from database
func DeleteRoute(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("routes", "DeleteRoute", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = Delete(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//UpdateRoute a route in the database
func UpdateRoute(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	exist, err := routeJSON.Exist()
	if !exist && err != nil {
		errorpages.BadRequest(request, "Route not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	for i, _ := range routeJSON.Permissions {
		routeJSON.Permissions[i].IDInsertUser = request.Claims.IDUser
		routeJSON.Permissions[i].IDEditUser = request.Claims.IDUser
		usertype.DB = DB
		u, err := usertype.GetUserTypeFromDescription(routeJSON.Permissions[i].Description)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = routeJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//CheckRoute check if user has permission to open this route
func CheckRoute(request customrequest.CustomRequest) {
	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	permission, err := routeJSON.CheckRoute(request.Claims.IDUserType)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, permission, 0, 0)
}
