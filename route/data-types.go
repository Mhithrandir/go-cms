package route

import (
	"go-desk/database"
	"go-desk/usertype"
)

//DB variables to handle database
var DB *database.Database

type RequestMethod string

const (
	GET    RequestMethod = "GET"
	POST   RequestMethod = "POST"
	DELETE RequestMethod = "DELETE"
	UPDATE RequestMethod = "UPDATE"
	Null   RequestMethod = ""
)

type RequestType string

const (
	Api  RequestType = "Api"
	Page RequestType = "Page"
)

//Route struct for the Route table
type Route struct {
	Package     string            `json:"Package"`
	Func        string            `json:"Func"`
	Type        RequestType       `json:"Type"`
	Permissions []RoutePermission `json:"Permissions"`
	Path        string            `json:"Path"`
	Method      RequestMethod     `json:"Method"`
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
