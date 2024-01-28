package usertype

import (
	"database/sql"
	"go-cms/customrequest"
	"go-cms/database"
	"go-cms/logs"
	"go-cms/responses"
	"strconv"
)

// ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getusertypes":
		GetUserTypes(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	default:
		responses.NotFound(request)
	}
}

// GetUserTypes retrieve alla UserTypes from database
func GetUserTypes(request customrequest.CustomRequest) {
	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("usertype", "GetUserTypes", "Parameter page not valid", logs.Error, err.Error())
			responses.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}

	result, err := request.DB.GetUserTypes(page*request.Config.Pagination, request.Config.Pagination)
	if err != nil {
		responses.InternalServerError(request, err.Error())
	}
	responses.Ok(request, result, 0, 0)
}

// DeleteUserType delete a route from database
func Delete(request customrequest.CustomRequest) {
	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("usertype", "DeleteUserType", "Parameter id not valid", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	err = request.DB.Delete("UserTypes", "ID", id)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	err = request.DB.Delete("RoutePermission", "IDUserType", id)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}

// AddUserType insert a UserType in database
func Add(request customrequest.CustomRequest) {
	var userTypeJSON database.UserType
	err := request.ParserBodyRequest(&userTypeJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	_, err = request.DB.GetUserTypeFromDescription(userTypeJSON.Description)
	if err == nil {
		responses.BadRequest(request, "UserType already exist")
		return
	}
	userTypeJSON.IDInsertUser = request.Claims.IDUser
	userTypeJSON.IDEditUser = sql.NullInt64{Int64: request.Claims.IDUser, Valid: true}
	err = request.DB.AddUserType(userTypeJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}
