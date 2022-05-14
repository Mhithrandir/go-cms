package component

import (
	"cms/database"
	"cms/route"
)

//DB variables to handle database
var DB *database.Database

type EditorElement struct {
	IDElement           string          `json:"IDElement"`
	Type                string          `json:"Type"`
	Childrens           []EditorElement `json:"Childrens"`
	Columns             int64           `json:"Columns"`
	VerticalOrientation bool            `json:"VerticalOrientation"`
	Content             string          `json:"Content"`
	ImageName           string          `json:"ImageName"`
	IsClass             bool            `json:"IsClass"`
	IDParent            int64           `json:"IDParent"`
	IDRoute             int64           `json:"IDRoute"`
	Route               route.Route     `json:"Route"`
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
