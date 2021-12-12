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
	case "execute":
		Execute(request)
	default:
		errorpages.NotFound(request)
	}
}

func GetDatabases(request customrequest.CustomRequest) {
	DB = request.DB

	db, err := DB.ScanTable("SHOW DATABASES")
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, db, 0, 0)
}

func GetTables(request customrequest.CustomRequest) {
	DB = request.DB

	dbName := request.Parameters["db"]
	tables, err := DB.ScanTable("SELECT * FROM information_schema.tables WHERE TABLE_SCHEMA = ?", dbName)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, tables, 0, 0)
}

func OpenTable(request customrequest.CustomRequest) {
	DB = request.DB

	name := request.Parameters["name"]
	records, err := DB.ScanTable("SELECT * FROM " + name + " LIMIT 100")
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, records, 0, 0)
}

func Execute(request customrequest.CustomRequest) {
	DB = request.DB

	var sql SqlArguments
	err := request.ParserBodyRequest(&sql)
	if err != nil {
		errorpages.BadRequest(request, "Error reading sql")
		return
	}

	records, err := DB.ScanTable(sql.Sql)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, records, 0, 0)
}
