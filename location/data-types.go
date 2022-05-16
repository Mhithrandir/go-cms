package location

import (
	"cms/character"
	"cms/database"
	"cms/user"
)

//DB variables to handle database
var DB *database.Database

//Product, struct for categories products
type Location struct {
	Name        string     `json:"Name"`
	Description string     `json:"Description"`
	Image       string     `json:"Image"`
	X           int64      `json:"X"`
	Y           int64      `json:"Y"`
	IDParent    int64      `json:"IDParent"`
	HasChat     bool       `json:"HasChat"`
	Childrens   []Location `json:"Childrens"`
	database.BaseTable
}

type ChatMessage struct {
	Message     string              `json:"Message"`
	IDCharacter int64               `json:"IDCharacter"`
	Character   character.Character `json:"Character"`
	IDLocation  int64               `json:"IDLocation"`
	Location    Location            `json:"Location"`
	Archive     int64               `json:"Archive"`
	IDMaster    int64               `json:"IDMaster"`
	Validated   bool                `json:"Validated"`
	Master      user.User           `json:"Master"`
	database.BaseTable
}
