package dbapi

import "cms/database"

//DB variables to handle database
var DB *database.Database

type SqlArguments struct {
	Sql string `json:"Sql"`
}
