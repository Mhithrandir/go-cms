package usertype

import (
	database "go-cmsdatabase"
)

// DB variables to handle database
var DB *database.Database

// UserType struct for table usertype
type UserType struct {
	Description string `json:"Description"`
	database.BaseTable
}
