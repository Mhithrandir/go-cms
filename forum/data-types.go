package forum

import (
	"cms/database"
	"cms/user"
)

//DB variables to handle database
var DB *database.Database

type Size int64

//Product, struct for categories products
type Topic struct {
	Title    string    `json:"Title"`
	Icon     string    `json:"Icon"`
	Closed   bool      `json:"Closed"`
	IDAuthor int64     `json:"IDAuthor"`
	Author   user.User `json:"Author"`
	database.BaseTable
}

//Product, struct for categories products
type TopicMessage struct {
	Message  string    `json:"Message"`
	IDParent int64     `json:"IDParent"`
	IDAuthor int64     `json:"IDAuthor"`
	Author   user.User `json:"Author"`
	database.BaseTable
}
