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
		errorpages.NotFound(request)
	}
}

//GetMenu Load a specific menu
func GetMenu(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadMenu(request.Parameters["menuName"], request.Claims.IDUserType, -1)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//GetPlainMenu Load all menu
func GetPlainMenu(request customrequest.CustomRequest) {
	DB = request.DB
	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("users", "LoadUsers", "Parameter page not valid", logs.Error, err.Error())
			errorpages.BadRequest(request, err.Error())
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
		errorpages.InternalServerError(request, err.Error())
		return
	}

	count, err := CountMenu()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, result, page, int(count)/_config.Pagination)
}

//AddMenu add a menu item to the database
func AddMenu(request customrequest.CustomRequest) {
	DB = request.DB

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		return
	}

	exist, err := menuJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Menu already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	menuJSON.IDInsertUser = request.Claims.IDUser
	menuJSON.IDEditUser = request.Claims.IDUser
	err = menuJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//UpdateMenu a menu item to the database
func UpdateMenu(request customrequest.CustomRequest) {
	DB = request.DB

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		return
	}

	exist, err := menuJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Menu not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = menuJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//DeleteMenu delete a menu item from database
func DeleteMenu(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("menu", "DeleteMenu", "Parameter id not valid", logs.Error, err.Error())
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
