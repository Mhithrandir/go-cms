package route

import (
	"cms/database"
	"cms/usertype"
)

//DB variables to handle database
var DB *database.Database

//Route struct for the Route table
type Route struct {
	Package     string            `json:"Package"`
	Func        string            `json:"Func"`
	Type        string            `json:"Type"`
	Permissions []RoutePermission `json:"Permissions"`
	database.BaseTable
}

//RoutePermission struct for RoutePermission table
type RoutePermission struct {
	IDRoute           int64 `json:"IDRoute"`
	IDUserType        int64 `json:"IDUserType"`
	Enabled           bool  `json:"Enabled"`
	usertype.UserType `json:"UserType"`
	database.BaseTable
}
