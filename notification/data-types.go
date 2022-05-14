package notification

import (
	"cms/database"
	"cms/user"
)

//DB variables to handle database
var DB *database.Database

//Product, struct for categories products
type Notification struct {
	Description string    `json:"Description"`
	IsRead      bool      `json:"IsRead"`
	IDUser      int64     `json:"IDUser"`
	User        user.User `json:"User"`
	database.BaseTable
}
