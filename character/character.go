package character

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"reflect"
	"strconv"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getcharacters":
		GetCharacters(request)
	case "getminecharacters":
		GetMineCharacters(request)
	case "delete":
		Delete(request)
	case "add":
		Add(request)
	case "update":
		Update(request)
	case "check":
		Check(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetCharacters(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := Load(-1)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

func GetMineCharacters(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := Load(request.Claims.IDUser)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, result, 0, 0)
}

func Delete(request customrequest.CustomRequest) {
	DB = request.DB

	id, err := strconv.Atoi(request.Parameters["ID"])
	if err != nil {
		logs.Save("character", "Delete", "Parameter id not valid", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	err = DB.Delete("characters", int64(id))
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var characterJSON Character
	err := request.ParserBodyRequest(&characterJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := characterJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "Character not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	characterJSON.IDEditUser = request.Claims.IDUser

	err = characterJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	//Notify the masters that of the edit

	commons.Ok(request, true, 0, 0)
}

func Add(request customrequest.CustomRequest) {
	DB = request.DB

	var characterJSON map[string]interface{}
	err := request.ParserBodyRequest(&characterJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	var character Character
	for k, _ := range characterJSON {
		switch k {
		case "Race", "Class", "Points":
			var app = characterJSON[k].(map[string]interface{})
			var characterValue CharacterValue
			characterValue.Name = k
			value, exist := app["Value"]
			if exist {
				_type := reflect.TypeOf(value)
				if _type.Name() == "float64" {
					characterValue.Value = strconv.Itoa(int(value.(float64)))
				} else if _type.Name() == "string" {
					characterValue.Value = value.(string)
				}
			}
			//Non è detto che abbia un corrispettivo
			id, exist := app["Element"].(map[string]interface{})["ID"]
			if exist {
				characterValue.IDSheetElement = int64(id.(float64))
			}
			characterValue.Name = k
			character.Values = append(character.Values, characterValue)
		case "Info":
			var app = characterJSON[k].([]interface{})
			for _, val := range app {
				var element = val.(map[string]interface{})
				field, exist := element["Element"].(map[string]interface{})["Name"]
				if exist {
					switch field {
					case "Name":
						value, exist := element["Value"]
						if exist {
							character.Name = value.(string)
						}
					case "Image":
						value, exist := element["Value"]
						if exist {
							character.Icon = value.(string)
						}
					case "Prestavolto":
						value, exist := element["Value"]
						if exist {
							character.LendFace = value.(string)
						}
					case "Background":
						value, exist := element["Value"]
						if exist {
							character.Background = value.(string)
						}
					}
				}
			}
		default:
			var app = characterJSON[k].([]interface{})
			for _, val := range app {
				var element = val.(map[string]interface{})
				var characterValue CharacterValue
				value, exist := element["Value"]
				if exist {
					_type := reflect.TypeOf(value)
					if _type.Name() == "float64" {
						characterValue.Value = strconv.Itoa(int(value.(float64)))
					} else if _type.Name() == "string" {
						characterValue.Value = value.(string)
					}
				}
				//Non è detto che abbia un corrispettivo
				id, exist := element["Element"].(map[string]interface{})["ID"]
				if exist {
					characterValue.IDSheetElement = int64(id.(float64))
				}
				sheetElementType, exist := element["Element"].(map[string]interface{})["SheetElementType"]
				if exist {
					name, exist := sheetElementType.(map[string]interface{})["Name"]
					if exist {
						characterValue.Name = name.(string)
					}
				}
				character.Values = append(character.Values, characterValue)
			}
		}
	}
	character.IDUser = request.Claims.IDUser

	err = character.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}

func Check(request customrequest.CustomRequest) {
	DB = request.DB

	fieldName := request.Parameters["fieldName"]
	value := request.Parameters["value"]

	result, err := CheckField(fieldName, value)
	if err != nil {
		logs.Save("character", "CheckName", "Error checking the field", logs.Error, err.Error())
		errorpages.BadRequest(request, err.Error())
		return
	}

	commons.Ok(request, result, 0, 0)
}
