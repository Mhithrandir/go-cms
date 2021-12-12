package menu

import (
	"cms/database"
	"cms/route"
	"cms/usertype"
)

//DB variables to handle database
var DB *database.Database

//Menu struct for the menu table
type Menu struct {
	MenuName  string `json:"MenuName"`
	Name      string `json:"Name"`
	Parent    int64  `json:"Parent"`
	IDRoute   int64  `json:"IDRoute"`
	MenuOrder int64  `json:"MenuOrder"`
	Childrens []Menu `json:"Childrens"`
	// Permissions []MenuPermission `json:"Permissions"`
	Route      route.Route `json:"Route"`
	IsExpanded bool        `json:"IsExpanded"`
	database.BaseTable
}

//MenuPermission struct for the menupermission table
type MenuPermission struct {
	IDMenu            int64 `json:"IDMenu"`
	IDUserType        int64 `json:"IDUserType"`
	Enabled           bool  `json:"Enabled"`
	usertype.UserType `json:"UserType"`
	database.BaseTable
}
