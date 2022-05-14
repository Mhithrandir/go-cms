package forum

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"net/http"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getopics":
		GetTopics(request)
	case "getopic":
		GetTopic(request)
	case "delete":
		Delete(request)
	case "deletemessage":
		DeleteMessage(request)
	case "add":
		Add(request)
	case "addmessage":
		AddMessage(request)
	case "update":
		Update(request)
	case "updatemessage":
		UpdateMessage(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetTopics(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadTopics()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

func GetTopic(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("forum", "GetTopic", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	result, err := LoadTopic(int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

//Delete delete a menu item from database
func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("equip", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("Forums", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Update a menu item to the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var topicJSON Topic
	err := request.ParserBodyRequest(&topicJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := topicJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Topic not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = topicJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Delete delete a menu item from database
func DeleteMessage(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("equip", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("ForumMessages", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Add add a menu item to the database
func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var topicJSON Topic
	topicJSON.Title = request.Request.FormValue("Title")
	topicJSON.IDAuthor = request.Claims.IDUser
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
			message = "../" + message
			topicJSON.Icon = message
		}
	} else {
		topicJSON.Icon = "./www/img/default.png"
	}

	exist, err := topicJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Topic already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	topicJSON.IDInsertUser = request.Claims.IDUser
	topicJSON.IDEditUser = request.Claims.IDUser
	err = topicJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Add add a menu item to the database
func AddMessage(request customrequest.CustomRequest) {
	DB = request.DB

	var topicMessageJSON TopicMessage
	err := request.ParserBodyRequest(&topicMessageJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := topicMessageJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Topic already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	topicMessageJSON.IDInsertUser = request.Claims.IDUser
	topicMessageJSON.IDAuthor = request.Claims.IDUser
	topicMessageJSON.IDEditUser = request.Claims.IDUser
	err = topicMessageJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//Update a menu item to the database
func UpdateMessage(request customrequest.CustomRequest) {
	DB = request.DB

	var topicMessageJSON TopicMessage
	err := request.ParserBodyRequest(&topicMessageJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := topicMessageJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Topic not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = topicMessageJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}
