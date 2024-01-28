package dbapi

import (
	"go-cms/customrequest"
	"go-cms/responses"
)

// ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "gettables":
		GetTables(request)
	case "command":
		Command(request)
	default:
		responses.NotFound(request)
	}
}

func GetTables(request customrequest.CustomRequest) {
	result, err := request.DB.GetTables()

	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

func Command(request customrequest.CustomRequest) {
	var commandJSON string
	err := request.ParserBodyRequest(&commandJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	result, err := request.DB.ScanTable(commandJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}
