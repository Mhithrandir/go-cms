package component

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
	case "getcomponents":
		GetComponents(request)
	case "deletecomponent":
		DeleteComponent(request)
	case "addcomponent":
		AddComponent(request)
	case "updatecomponent":
		UpdateComponent(request)
	default:
		errorpages.NotFound(request)
	}
}

//GetComponents Load all components
func GetComponents(request customrequest.CustomRequest) {
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
	result, err := LoadComponents(page, _config.Pagination)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//AddComponents add a component in the database
func AddComponent(request customrequest.CustomRequest) {
	DB = request.DB

	var componentJSON Component
	err := request.ParserBodyRequest(&componentJSON)
	if err != nil {
		return
	}

	exist, err := componentJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Component already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	componentJSON.IDInsertUser = request.Claims.IDUser
	componentJSON.IDEditUser = request.Claims.IDUser
	err = componentJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func UpdateComponent(request customrequest.CustomRequest) {
	DB = request.DB

	var componentJSON Component
	err := request.ParserBodyRequest(&componentJSON)
	if err != nil {
		return
	}

	exist, err := componentJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Component NOT exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	componentJSON.IDInsertUser = request.Claims.IDUser
	componentJSON.IDEditUser = request.Claims.IDUser
	err = componentJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//DeleteComponent delete a component item from database
func DeleteComponent(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("component", "DeleteComponent", "Parameter id not valid", logs.Error, err.Error())
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
