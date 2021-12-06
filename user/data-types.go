package user

import (
	"cms/database"
	"cms/usertype"
	"time"
)

//DB variables to handle database
var DB *database.Database

type User struct {
	Username          string    `json:"Username"`
	Password          string    `json:"Password"`
	LastLogin         time.Time `json:"LastLogin"`
	DatePassword      time.Time `json:"DatePassword"`
	PasswordDuration  int       `json:"PasswordDuration"`
	IDUserType        int64     `json:"IDUserType"`
	CodeResetPassword string    `json:"CodeResetPassword"`
	IsPasswordExpired bool      `json:"IsPasswordExpired"`
	usertype.UserType `json:"UserType"`
	database.BaseTable
}
