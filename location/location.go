package location

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
	case "getlocations":
		GetLocations(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	case "update":
		Update(request)
	case "sendmessage":
		Update(request)
	case "getmessages":
		GetMessages(request)
	case "sendtovalidation":
		SendToValidation(request)
	case "getvalidations":
		GetValidations(request)
	case "validate":
		Validate(request)
	case "empty":
		Empty(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetLocations(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadLocations(-1)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	for i, _ := range result {
		children, err := GetChildrenLocation(result[i].ID)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		result[i].Childrens = append(result[i].Childrens, children...)
	}

	commons.Ok(request, result, 0, 0)
}

//Delete delete a menu item from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("location", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("Locations", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var locationJSON Location
	err := request.ParserBodyRequest(&locationJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := locationJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Topic not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = locationJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Add add a menu item to the database
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var locationJSON Location
	locationJSON.Name = request.Request.FormValue("Name")
	locationJSON.Description = request.Request.FormValue("Description")
	x, err := strconv.Atoi(request.Request.FormValue("X"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in int", logs.Error, err)
		errorpages.BadRequest(request, "Error converting to int")
		return
	} else {
		locationJSON.X = int64(x)
	}
	y, err := strconv.Atoi(request.Request.FormValue("Y"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in int", logs.Error, err)
		errorpages.BadRequest(request, "Error converting to int")
		return
	} else {
		locationJSON.X = int64(y)
	}
	idparent, err := strconv.Atoi(request.Request.FormValue("IDParent"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in int", logs.Error, err)
		errorpages.BadRequest(request, "Error converting to int")
		return
	} else {
		locationJSON.X = int64(idparent)
	}

	hasImage, err := strconv.ParseBool(request.Request.FormValue("HasImage"))
	if err != nil {
		logs.Save("equip", "Add", "Error converting value in boolean", logs.Error, err)
		errorpages.BadRequest(request, "Error converting value in boolean")
		return
	}
	if hasImage {
		extensions := []string{"image/jpeg", "image/jpg", "image/gif", "image/png"}
		stat, message := commons.UploadFile(request, "www/img/forum/", extensions)
		switch stat {
		case http.StatusInternalServerError:
			errorpages.InternalServerError(request, message)
		case http.StatusBadRequest:
			errorpages.BadRequest(request, message)
		default:
			message = string(message[strings.Index(message, "www/img/forum")+len("www/img/forum"):])
			locationJSON.Image = message
		}
	} else {
		locationJSON.Image = "./www/img/default.png"
	}

	exist, err := locationJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Topic already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	locationJSON.IDInsertUser = request.Claims.IDUser
	locationJSON.IDEditUser = request.Claims.IDUser
	err = locationJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func SendMessage(request customrequest.CustomRequest) {
	DB = request.DB

	var messageJSON ChatMessage
	err := request.ParserBodyRequest(&messageJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}
	messageJSON.IDInsertUser = request.Claims.IDUser
	messageJSON.IDEditUser = request.Claims.IDUser
	err = messageJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func GetMessages(request customrequest.CustomRequest) {
	DB = request.DB
	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	location, err := GetLocationById(int64(id))
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}
	results, err := location.LoadMessages()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, results, 0, 0)
}

func SendToValidation(request customrequest.CustomRequest) {
	DB = request.DB
	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	idmaster, err := strconv.Atoi(request.Parameters["idmaster"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	location, err := GetLocationById(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	err = location.ValidateChat(int64(idmaster))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func GetValidations(request customrequest.CustomRequest) {
	DB = request.DB
	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	location, err := GetLocationById(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	results, err := location.LoadValidations()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, results, 0, 0)
}

func Validate(request customrequest.CustomRequest) {
	DB = request.DB
	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	location, err := GetLocationById(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	archive, err := strconv.Atoi(request.Parameters["archive"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = location.SetValidated(int64(archive))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}

func Empty(request customrequest.CustomRequest) {
	DB = request.DB
	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	location, err := GetLocationById(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	err = location.EmptyChat()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}
