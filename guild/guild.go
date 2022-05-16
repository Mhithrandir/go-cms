package guild

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
	case "getguilds":
		GetGuilds(request)
	case "add":
		Add(request)
	case "delete":
		Delete(request)
	case "update":
		Update(request)
	case "setmember":
		SetMember(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetGuilds(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadGuilds()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var guildJSON Guild
	guildJSON.Name = request.Request.FormValue("Name")
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
			guildJSON.Icon = message
		}
	} else {
		guildJSON.Icon = "./www/img/default.png"
	}

	exist, err := guildJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Topic already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	guildJSON.IDInsertUser = request.Claims.IDUser
	guildJSON.IDEditUser = request.Claims.IDUser
	err = guildJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["id"])
	if err != nil {
		logs.Save("guild", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("Guilds", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var guildJSON Guild
	err := request.ParserBodyRequest(&guildJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := guildJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Guild not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = guildJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func SetMember(request customrequest.CustomRequest) {
	DB = request.DB

	idcharacter, err := strconv.Atoi(request.Parameters["idcharacter"])
	if err != nil {
		logs.Save("guild", "SetMember", "Parameter idcharacter not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	idguild, err := strconv.Atoi(request.Parameters["idguild"])
	if err != nil {
		logs.Save("guild", "SetMember", "Parameter idguild not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	add, err := strconv.Atoi(request.Parameters["add"])
	if err != nil {
		logs.Save("guild", "SetMember", "Parameter add not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := ChackMemeber(int64(idcharacter), int64(idguild))

	if add == 1 {
		if exist && err == nil {
			errorpages.BadRequest(request, "Character already member of the guild")
			return
		} else if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}

		err = AddMember(int64(idcharacter), int64(idguild))
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}

		commons.Ok(request, true, 0, 0)
	} else {
		if !exist && err == nil {
			errorpages.BadRequest(request, "Character is not member of the guild")
			return
		} else if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}

		err = RemoveMember(int64(idcharacter), int64(idguild))
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}

		commons.Ok(request, true, 0, 0)
	}
}
