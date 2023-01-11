package menu

import (
	"go-cms/database"
	"go-cms/route"
)

// DB variables to handle database
var DB *database.Database

// Menu struct for the menu table
type Menu struct {
	MenuName   string      `json:"MenuName"`
	Name       string      `json:"Name"`
	Parent     int64       `json:"Parent"`
	IDRoute    int64       `json:"IDRoute"`
	Order      int64       `json:"Order"`
	Childrens  []Menu      `json:"Childrens"`
	Route      route.Route `json:"Route"`
	IsExpanded bool        `json:"IsExpanded"`
	database.BaseTable
}
