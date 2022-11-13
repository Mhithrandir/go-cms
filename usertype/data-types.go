package usertype

import (
	"go-desk/database"
)

//DB variables to handle database
var DB *database.Database

//UserType struct for table usertype
type UserType struct {
	Description string `json:"Description"`
	database.BaseTable
}
