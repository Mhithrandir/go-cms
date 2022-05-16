package equip

import (
	"cms/database"
)

//DB variables to handle database
var DB *database.Database

type Size int64

const (
	NoSize         Size = 0
	Small          Size = 1
	Medium         Size = 2
	Big            Size = 3
	Huge           Size = 4
	Veichle_Small  Size = 5
	Veichle_Medium Size = 6
	Veichle_Big    Size = 7
	Ship_Small     Size = 8
	Ship_Medium    Size = 9
	Ship_Big       Size = 10
)

//Product, struct for categories products
type Equip struct {
	Name        string    `json:"Name"`
	Icon        string    `json:"Icon"`
	Description string    `json:"Description"`
	Price       float64   `json:"Price"`
	Size        Size      `json:"Size"`
	Type        EquipType `json:"Type"`
	database.BaseTable
}

//Categories, struct for categories products
type EquipType struct {
	Name string `json:"Name"`
	database.BaseTable
}
