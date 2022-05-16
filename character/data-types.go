package character

import (
	"cms/database"
	"cms/sheetelement"
	"cms/user"
)

//DB variables to handle database
var DB *database.Database

//Menu struct for the menu table
type Character struct {
	Name       string           `json:"Name"`
	Icon       string           `json:"Icon"`
	LendFace   string           `json:"LendFace"`
	IDUser     int64            `json:"IDUser"`
	Background string           `json:"Background"`
	Values     []CharacterValue `json:"Values"`
	User       user.User        `json:"User"`
	database.BaseTable
}

type CharacterValue struct {
	Name           string `json:"Name"`
	Value          string `json:"Value"`
	IDSheetElement int64  `json:"IDSheetElement"`
	database.BaseTable
}

type Asd struct {
	Value   interface{}               `json:"Value"`
	Element sheetelement.SheetElement `json:"Element"`
}
