package usertype

import (
	customrequest "go-cmscustomrequest"
	logs "go-cmslogs"
	responses "go-cmsresponses"
	"strconv"
)

// ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getusertypes":
		GetUserTypes(request)
	case "delete":
		DeleteUserType(request)
	case "add":
		AddUserType(request)
	default:
		responses.NotFound(request)
	}
}

// GetUserTypes retrieve alla UserTypes from database
func GetUserTypes(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := Load()
	if err != nil {
		responses.InternalServerError(request, err.Error())
	}
	responses.Ok(request, result, 0, 0)
}

// DeleteUserType delete a route from database
func DeleteUserType(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("usertype", "DeleteUserType", "Parameter id not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	err = Delete(int64(id))
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// AddUserType insert a UserType in database
func AddUserType(request customrequest.CustomRequest) {
	DB = request.DB

	var userTypeJSON UserType
	err := request.ParserBodyRequest(&userTypeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := userTypeJSON.Exist()
	if exist && err == nil {
		responses.BadRequest(request, "UserType already exist")
		return
	} else if exist && err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	userTypeJSON.IDInsertUser = request.Claims.IDUser
	userTypeJSON.IDEditUser = request.Claims.IDUser
	err = userTypeJSON.Add()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}
