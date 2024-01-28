package menu

import (
	"go-cms/customrequest"
	"go-cms/database"
	"go-cms/logs"
	"go-cms/responses"
	"strconv"
)

// ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getmenus":
		GetMenus(request)
	case "getmenu":
		GetMenu(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	case "update":
		Update(request)
	default:
		responses.NotFound(request)
	}
}

// GetMenu Load a specific menu
func GetMenus(request customrequest.CustomRequest) {
	result, err := request.DB.GetMenus(request.Claims.IDUserType)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

// GetMenu Load a specific menu
func GetMenu(request customrequest.CustomRequest) {
	var err error
	menuName, ok := request.Parameters["menuName"]
	if !ok {
		logs.Save("menu", "GetMenu", "Parameter menuName not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	result, err := request.DB.GetMenu(request.Claims.IDUserType, -1, menuName)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

// Add add a menu item to the database
func Add(request customrequest.CustomRequest) {
	var menuJSON database.Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	if request.DB.MenuExist(menuJSON) {
		responses.BadRequest(request, "Menu already exist")
		return
	}

	menuJSON.IDInsertUser = request.Claims.IDUser

	err = request.DB.AddMenu(menuJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	var menuJSON database.Menu
	err := request.ParserBodyRequest(&menuJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	if !request.DB.MenuExist(menuJSON) {
		responses.BadRequest(request, "Menu doesn't exist")
		return
	}

	err = request.DB.UpdateMenu(menuJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// Delete delete a menu item from database
func Delete(request customrequest.CustomRequest) {
	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("menu", "Delete", "Parameter id not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	err = request.DB.Delete("Menus", "ID", id)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}
