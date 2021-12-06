package dbapi

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "getdatabases":
		GetDatabases(request)
	case "gettables":
		GetTables(request)
	case "opentable":
		OpenTable(request)
	default:
		commons.NotFound(request)
	}
}

func GetDatabases(request customrequest.CustomRequest) {
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

	db, err := DB.ScanTable("SHOW DATABASES")
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, db, 0, 0)
}

func GetTables(request customrequest.CustomRequest) {
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

	dbName := request.Parameters["db"]
	tables, err := DB.ScanTable("SELECT * FROM information_schema.tables WHERE TABLE_SCHEMA = ?", dbName)
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, tables, 0, 0)
}

func OpenTable(request customrequest.CustomRequest) {
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

	name := request.Parameters["name"]
	records, err := DB.ScanTable("SELECT * FROM " + name + " LIMIT 100")
	if err != nil {
		commons.InternalServerError(request, err)
		return
	}

	commons.Ok(request, records, 0, 0)
}
