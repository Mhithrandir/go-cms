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
	case "deleteroute":
		DeleteRoute(request)
	case "updateroute":
		UpdateRoute(request)
	case "checkroute":
		CheckRoute(request)
	default:
		commons.NotFound(request)
	}
}

//AddRoute add a new route
func AddRoute(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, true) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	exist, err := routeJSON.Exist()
	if exist && err == nil {
		commons.BadRequest(request, "Route already exist")
		return
	} else if err != nil {
		commons.InternalServerError(request, err)
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
			commons.InternalServerError(request, err)
			return
		}
		routeJSON.Permissions[i].IDUserType = u.ID
	}

	err = routeJSON.Add()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, true, 0, 0)
}

//GetRoutes returns all routes configured in the database
func GetRoutes(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, true) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	DB = request.DB

	page, err := strconv.Atoi(request.Parameters["page"])
	if err != nil {
		logs.Save("routes", "GetRoutes", "Parameter page not valid", logs.Error, err.Error())
		commons.BadRequest(request, err)
		return
	}
	var _config config.Config
	err = config.LoadConfiguration(&_config)
	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	result, err := LoadRoutes(page, _config.Pagination)
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	count, err := CountRoute()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, result, page, int(count)/_config.Pagination)
}

//DeleteRoute delete a route from database
func DeleteRoute(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, true) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("routes", "DeleteRoute", "Parameter id not valid", logs.Error, err.Error())
		commons.BadRequest(request, err)
		return
	}

	err = Delete(int64(id))
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, true, 0, 0)
}

//UpdateRoute a route in the database
func UpdateRoute(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, true) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	exist, err := routeJSON.Exist()
	if !exist && err != nil {
		commons.BadRequest(request, "Route not exist")
		return
	} else if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	err = routeJSON.Update()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, true, 0, 0)
}

//CheckRoute check if user has permission to open this route
func CheckRoute(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, true) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	DB = request.DB

	var routeJSON Route
	err := request.ParserBodyRequest(&routeJSON)
	if err != nil {
		return
	}

	permission, err := routeJSON.CheckRoute(request.Claims.IDUserType)
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, permission, 0, 0)
}
