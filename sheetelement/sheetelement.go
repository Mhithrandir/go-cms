package sheetelement

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"errors"
	"net/http"
	"strconv"
	"strings"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "add":
		Add(request)
	case "getsheetelements":
		GetElements(request)
	case "getsheetelementstable":
		GetElementsTable(request)
	case "getsheetelementypes":
		GetElementypes(request)
	case "delete":
		Delete(request)
	case "update":
		Update(request)
	default:
		errorpages.NotFound(request)
	}
}

func Add(request customrequest.CustomRequest) {
	DB = request.DB

	elementJSON, err := ParseFormData(request)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := elementJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "Sheet element already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = elementJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}

func GetElementsTable(request customrequest.CustomRequest) {
	DB = request.DB

	elementTypes, err := LoadSheetElementypes()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	type ElementsTable struct {
		Columns []string       `json:"Columns"`
		Rows    []SheetElement `json:"Rows"`
	}
	result := make(map[string]ElementsTable)
	for _, t := range elementTypes {
		temp, err := LoadSheetElements(t.Name)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		var elem ElementsTable
		elem.Columns = t.Fields
		elem.Rows = append(result[t.Name].Rows, temp...)
		result[t.Name] = elem
	}
	commons.Ok(request, result, 0, 0)
}

func GetElements(request customrequest.CustomRequest) {
	DB = request.DB

	_type, found := request.Parameters["type"]
	if !found {
		_type = ""
	}

	result, err := LoadSheetElements(_type)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, result, 0, 0)
}

func GetElementypes(request customrequest.CustomRequest) {
	DB = request.DB

	result, err := LoadSheetElementypes()
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
		logs.Save("sheetelement", "DeleteElement", "Parameter id not valid", logs.Error, err.Error())
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

//Update a sheetelement in the database
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	elementJSON, err := ParseFormData(request)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := elementJSON.Exist()
	if !exist && err != nil {
		errorpages.BadRequest(request, "Sheet element not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = elementJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

func ParseFormData(request customrequest.CustomRequest) (SheetElement, error) {
	var elementJSON SheetElement
	elementJSON.Name = request.Request.FormValue("Name")
	elementJSON.Description = request.Request.FormValue("Description")
	idtype, err := strconv.Atoi(request.Request.FormValue("IDType"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.IDType = int64(idtype)
	}
	min, err := strconv.Atoi(request.Request.FormValue("Min"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.Min = int64(min)
	}
	max, err := strconv.Atoi(request.Request.FormValue("Max"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.Max = int64(max)
	}
	cost, err := strconv.Atoi(request.Request.FormValue("Cost"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.Cost = int64(cost)
	}
	IDReferenceSheetElement, err := strconv.Atoi(request.Request.FormValue("IDReferenceSheetElement"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.IDReferenceSheetElement = int64(IDReferenceSheetElement)
	}

	hasImage, err := strconv.ParseBool(request.Request.FormValue("HasImage"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in boolean", logs.Error, err)
		return SheetElement{}, err
	}
	if hasImage {
		extensions := []string{"image/jpeg", "image/jpg", "image/gif", "image/png"}
		stat, message := commons.UploadFile(request, "www/img/sheetelement/", extensions)
		switch stat {
		case http.StatusInternalServerError:
			return SheetElement{}, errors.New(message)
		case http.StatusBadRequest:
			return SheetElement{}, errors.New(message)
		default:
			message = string(message)
			elementJSON.Icon = message[strings.Index(message, "www")+len("www"):]
		}
	} else {
		elementJSON.Icon = "./img/default.png"
	}

	id, err := strconv.Atoi(request.Request.FormValue("ID"))
	if err != nil {
		logs.Save("sheetelement", "ParseFormData", "Error converting value in int", logs.Error, err)
		return SheetElement{}, err
	} else {
		elementJSON.ID = int64(id)
	}

	elementJSON.IDInsertUser = request.Claims.IDUser
	elementJSON.IDEditUser = request.Claims.IDUser
	return elementJSON, nil
}
