package guild

import (
	"cms/character"
	"cms/database"
)

//DB variables to handle database
var DB *database.Database

//Guild, struct for categories products
type Guild struct {
	Name    string                `json:"Name"`
	Icon    string                `json:"Icon"`
	Members []character.Character `json:"Members"`
	database.BaseTable
}
