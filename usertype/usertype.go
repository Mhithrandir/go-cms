package usertype

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
	case "getusertypes":
		GetUserTypes(request)
	case "deleteusertype":
		DeleteUserType(request)
	case "addusertype":
		AddUserType(request)
	default:
		commons.NotFound(request)
	}
}

//GetUserTypes retrieve alla UserTypes from database
func GetUserTypes(request customrequest.CustomRequest) {
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

	result, err := Load()
	if err != nil {
		commons.InternalServerError(request, err)
	}
	commons.Ok(request, result, 0, 0)
}

//DeleteUserType delete a route from database
func DeleteUserType(request customrequest.CustomRequest) {
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
		logs.Save("usertype", "DeleteUserType", "Parameter id not valid", logs.Error, err.Error())
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

//AddUserType insert a UserType in database
func AddUserType(request customrequest.CustomRequest) {
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

	var userTypeJSON UserType
	err := request.ParserBodyRequest(&userTypeJSON)
	if err != nil {
		commons.BadRequest(request, err)
		return
	}

	exist, err := userTypeJSON.Exist()
	if exist && err == nil {
		commons.BadRequest(request, "UserType already exist")
		return
	} else if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	userTypeJSON.IDInsertUser = request.Claims.IDUser
	userTypeJSON.IDEditUser = request.Claims.IDUser
	err = userTypeJSON.Add()
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}
	commons.Ok(request, true, 0, 0)
}
