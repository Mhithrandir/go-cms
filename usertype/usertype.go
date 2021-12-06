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
		break
	case "deleteusertype":
		DeleteUserType(request)
		break
	case "addusertype":
		AddUserType(request)
		break
	default:
		commons.NotFound(request)
		break
	}
}

//loadUserTypeFromPost load a struct usertype from post body request
func loadUserTypeFromPost(request customrequest.CustomRequest) (UserType, error) {
	var usertypeJSON UserType
	err := request.ParserBodyRequest(&usertypeJSON)
	if err != nil {
		commons.BadRequest(request, err)
		return UserType{}, err
	}
	return usertypeJSON, nil
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

	userTypeJSON, err := loadUserTypeFromPost(request)
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
