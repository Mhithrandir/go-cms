package notification

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
	case "getnotifications":
		GetNotifications(request)
	case "update":
		Update(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetNotifications(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("location", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}
	result, err := LoadNotifications(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var notificationJSON Notification
	err := request.ParserBodyRequest(&notificationJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := notificationJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Notification not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = notificationJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}
