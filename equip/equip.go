package equip

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"net/http"
	"strconv"
	"strings"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getequiptypes":
		GetTypes(request)
	case "getequip":
		GetEquip(request)
	case "delete":
		Delete(request)
	case "deletetype":
		DeleteType(request)
	case "add":
		Add(request)
	case "addtype":
		AddType(request)
	case "update":
		Update(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetTypes(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadTypes()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

func GetEquip(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := Load(request.Parameters["type"])
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//Add add a menu item to the database
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var equipJSON Equip
	equipJSON.Name = request.Request.FormValue("Name")
	equipJSON.Description = request.Request.FormValue("Description")
	f, err := strconv.ParseFloat(request.Request.FormValue("Price"), 64)
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in float", logs.Error, err)
		errorpages.BadRequest(request, "Error converting to float")
		return
	} else {
		equipJSON.Price = f
	}
	id, err := strconv.Atoi(request.Request.FormValue("Type"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in int", logs.Error, err)
		errorpages.BadRequest(request, "Error converting to int")
		return
	} else {
		equipJSON.Type.ID = int64(id)
	}

	hasImage, err := strconv.ParseBool(request.Request.FormValue("HasImage"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in boolean", logs.Error, err)
		errorpages.BadRequest(request, "Error converting value in boolean")
		return
	}
	if hasImage {
		extensions := []string{"image/jpeg", "image/jpg", "image/gif", "image/png"}
		stat, message := commons.UploadFile(request, "www/img/equipment/", extensions)
		switch stat {
		case http.StatusInternalServerError:
			errorpages.InternalServerError(request, message)
			break
		case http.StatusBadRequest:
			errorpages.BadRequest(request, message)
			break
		default:
			message = string("." + message[strings.Index(message, "www")+len("www"):])
			equipJSON.Icon = message
			break
		}
	} else {
		equipJSON.Icon = "./www/img/default.png"
	}

	exist, err := equipJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Equip already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	equipJSON.IDInsertUser = request.Claims.IDUser
	equipJSON.IDEditUser = request.Claims.IDUser
	err = equipJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var equipJSON Equip
	err := request.ParserBodyRequest(&equipJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := equipJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Equip not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = equipJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Delete delete a menu item from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("equip", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("Equip", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Add add a menu item to the database
func AddType(request customrequest.CustomRequest) {
	DB = request.DB

	var equipTypeJSON EquipType
	err := request.ParserBodyRequest(&equipTypeJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := equipTypeJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Equip type already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	equipTypeJSON.IDInsertUser = request.Claims.IDUser
	equipTypeJSON.IDEditUser = request.Claims.IDUser
	err = equipTypeJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Delete delete a menu item from database
func DeleteType(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("equip", "DeleteType", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("EquipTypes", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}
