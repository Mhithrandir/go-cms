package component

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getcomponents":
		GetComponents(request)
	case "getcomponent":
		GetComponent(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	case "update":
		Update(request)
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
			logs.Save("component", "GetComponents", "Parameter page not valid", logs.Error, err.Error())
			errorpages.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}
	result, err := LoadComponents(page, request.Config.Pagination)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//GetComponent Load all components
func GetComponent(request customrequest.CustomRequest) {
	DB = request.DB

	if val, ok := request.Parameters["url"]; ok {
		result, err := LoadComponent(val, request.Claims.IDUserType)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		commons.Ok(request, result, 0, 0)
	} else {
		logs.Save("component", "GetComponent", "Parameter name not valid", logs.Error, "Parameter name not valid")
		errorpages.BadRequest(request, "Parameter name not valid")
		return
	}
}

//Add add a component in the database
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var elem EditorElement
	err := request.ParserBodyRequest(&elem)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}
	exist, err := elem.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Component already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	elem.IDInsertUser = request.Claims.IDUser
	elem.IDEditUser = request.Claims.IDUser
	err = elem.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)

	// var componentJSON Component
	// err = request.ParserBodyRequest(&componentJSON)
	// if err != nil {
	// 	return
	// }

	// exist, err := componentJSON.Exist()
	// if exist && err == nil {
	// 	errorpages.BadRequest(request, "Component already exist")
	// 	return
	// } else if err != nil {
	// 	errorpages.InternalServerError(request, err.Error())
	// 	return
	// }
	// componentJSON.IDInsertUser = request.Claims.IDUser
	// componentJSON.IDEditUser = request.Claims.IDUser
	// err = componentJSON.Add()
	// if err != nil {
	// 	errorpages.InternalServerError(request, err.Error())
	// 	return
	// }
	// commons.Ok(request, true, 0, 0)
}

func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var elemJSON EditorElement
	err := request.ParserBodyRequest(&elemJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := elemJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Component NOT exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	elemJSON.IDEditUser = request.Claims.IDUser
	err = elemJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Delete delete a component item from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("component", "DeleteComponent", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DeleteRecord(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}
