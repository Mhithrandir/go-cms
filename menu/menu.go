package menu

import (
	"go-desk/customrequest"
	"go-desk/logs"
	"go-desk/responses"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getmenu":
		GetMenu(request)
	case "getplainmenu":
		GetPlainMenu(request)
	case "getmenunames":
		GetMenuNames(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	case "update":
		Update(request)
		responses.NotFound(request)
	}
}

//GetMenu Load a specific menu
func GetMenu(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadMenu(request.Parameters["menuName"], request.Claims.IDUserType, -1)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, result, 0, 0)
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
			responses.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}
	result, err := LoadPlainMenu(page, 999)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	count, err := CountMenu()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, page, int(count)/request.Config.Pagination)
}

//GetMenuNames Load all menu names
func GetMenuNames(request customrequest.CustomRequest) {
	DB = request.DB
	result, err := LoadMenuNames()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, result, -1, -1)
}

//Add add a menu item to the database
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := menuJSON.Exist()
	if exist && err == nil {
		responses.BadRequest(request, "Menu already exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	menuJSON.IDInsertUser = request.Claims.IDUser
	menuJSON.IDEditUser = request.Claims.IDUser
	err = menuJSON.Add()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var menuJSON Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := menuJSON.Exist()
	if !exist && err == nil {
		responses.BadRequest(request, "Menu not exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	err = menuJSON.Update()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//Delete delete a menu item from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("menu", "DeleteMenu", "Parameter id not valid", logs.Error, err.Error())
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
