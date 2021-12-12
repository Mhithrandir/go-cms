package component

import (
	"cms/database"
	"cms/route"
)

//DB variables to handle database
var DB *database.Database

type Component struct {
	Name    string `json:"Name"`
	Content string `json:"Content"`
	IDRoute int64  `json:"IDRoute"`
	// Permissions []ComponentPermission `json:"Permissions"`
	Route route.Route `json:"Route"`
	database.BaseTable
}

//StaticPagePermission struct for the menupermission table
// type ComponentPermission struct {
// 	IDComponent       int64 `json:"IDComponent"`
// 	IDUserType        int64 `json:"IDUserType"`
// 	Enabled           bool  `json:"Enabled"`
// 	usertype.UserType `json:"UserType"`
// 	database.BaseTable
// }
