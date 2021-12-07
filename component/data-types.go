package component

import (
	"cms/database"
	"cms/usertype"
)

//DB variables to handle database
var DB *database.Database

type Component struct {
	Name        string                `json:"Name"`
	Content     string                `json:"Content"`
	IsBackEnd   bool                  `json:"IsBackEnd"`
	Permissions []ComponentPermission `json:"Permissions"`
	database.BaseTable
}

//StaticPagePermission struct for the menupermission table
type ComponentPermission struct {
	IDComponent       int64 `json:"IDComponent"`
	IDUserType        int64 `json:"IDUserType"`
	Enabled           bool  `json:"Enabled"`
	usertype.UserType `json:"UserType"`
	database.BaseTable
}
