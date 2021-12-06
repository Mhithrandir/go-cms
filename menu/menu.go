package menu

import (
	"cms/commons"
	"cms/config"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"log"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getmenu":
		GetMenu(request)
	case "getplainmenu":
		GetPlainMenu(request)
	case "deletemenu":
		DeleteMenu(request)
	case "addmenu":
		AddMenu(request)
	case "updatemenu":
		UpdateMenu(request)
	default:
		commons.NotFound(request)
	}
}

//GetMenu Load a specific menu
func GetMenu(request customrequest.CustomRequest) {
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

	result, err := LoadMenu(request.Parameters["menuName"], request.Claims.IDUserType, -1)
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, result, 0, 0)
}

//GetPlainMenu Load all menu
func GetPlainMenu(request customrequest.CustomRequest) {
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
	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("users", "LoadUsers", "Parameter page not valid", logs.Error, err.Error())
			commons.BadRequest(request, err)
			return
		}
	} else {
		page = 0
	}
	var _config config.Config
	err = config.LoadConfiguration(&_config)
	if err != nil {
		log.Fatal("Error loading config: ", err)
	}
	result, err := LoadPlainMenu(page, _config.Pagination)
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	count, err := CountMenu()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, result, page, int(count)/_config.Pagination)
}

//AddMenu add a menu item to the database
func AddMenu(request customrequest.CustomRequest) {
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

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		return
	}

	exist, err := menuJSON.Exist()
	if exist && err == nil {
		commons.BadRequest(request, "Menu already exist")
		return
	} else if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	menuJSON.IDInsertUser = request.Claims.IDUser
	menuJSON.IDEditUser = request.Claims.IDUser
	err = menuJSON.Add()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, true, 0, 0)
}

//UpdateMenu a menu item to the database
func UpdateMenu(request customrequest.CustomRequest) {
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

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		return
	}

	exist, err := menuJSON.Exist()
	if !exist && err == nil {
		commons.BadRequest(request, "Menu not exist")
		return
	} else if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	err = menuJSON.Update()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, true, 0, 0)
}

//DeleteMenu delete a menu item from database
func DeleteMenu(request customrequest.CustomRequest) {
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
		logs.Save("menu", "DeleteMenu", "Parameter id not valid", logs.Error, err.Error())
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
