package database

import (
	"database/sql"
	"time"

	"github.com/jmoiron/sqlx"
)

// Database struct for custom database type
type Database struct {
	Conn *sqlx.DB
}

type DateTime struct {
	DatabaseValue string
	ParsedValue   time.Time
	IsNil         bool
}

// BaseTable standard field to add in every table
type BaseTable struct {
	ID           int64         `json:"ID" db:"ID"`
	InsertDate   DateTime      `json:"InsertDate" db:"InsertDate"`
	IDInsertUser int64         `json:"IDInsertUser" db:"IDInsertUser"`
	EditDate     DateTime      `json:"EditDate" db:"EditDate"`
	IDEditUser   sql.NullInt64 `json:"IDEditUser" db:"IDEditUser"`
}

type RequestMethod string

const (
	GET    RequestMethod = "GET"
	POST   RequestMethod = "POST"
	DELETE RequestMethod = "DELETE"
	UPDATE RequestMethod = "UPDATE"
	PAGE   RequestMethod = "PAGE"
	Null   RequestMethod = ""
)

type RequestType string

const (
	Api  RequestType = "Api"
	Page RequestType = "Page"
)

// Route struct for the Route table
type Route struct {
	Package     string            `json:"Package" db:"Package"`
	Func        string            `json:"Func" db:"Func"`
	Type        RequestType       `json:"Type" db:"Type"`
	Permissions []RoutePermission `json:"Permissions" db:"Permissions"`
	Path        string            `json:"Path"`
	Method      RequestMethod     `json:"Method" db:"Method"`
	BaseTable
}

// RoutePermission struct for RoutePermission table
type RoutePermission struct {
	IDRoute    int64 `json:"IDRoute" db:"IDRoute"`
	IDUserType int64 `json:"IDUserType" db:"IDUserType"`
	Enabled    bool  `json:"Enabled" db:"Enabled"`
	UserType   `json:"UserType"`
	BaseTable
}

// UserType struct for table usertype
type UserType struct {
	Description string `json:"Description" db:"Description"`
	BaseTable
}

type User struct {
	Username          string         `json:"Username" db:"Username"`
	Password          string         `json:"Password" db:"Password"`
	LastLogin         DateTime       `json:"LastLogin" db:"LastLogin"`
	DatePassword      DateTime       `json:"DatePassword" db:"DatePassword"`
	PasswordDuration  int            `json:"PasswordDuration" db:"PasswordDuration"`
	IDUserType        int64          `json:"IDUserType" db:"IDUserType"`
	CodeResetPassword sql.NullString `json:"CodeResetPassword" db:"CodeResetPassword"`
	IsPasswordExpired bool           `json:"IsPasswordExpired"`
	UserType          `json:"UserType"`
	BaseTable
}

// Menu struct for the menu table
type Menu struct {
	MenuName  string `json:"MenuName" db:"MenuName"`
	Name      string `json:"Name" db:"Name"`
	Icon      string `json:"Icon" db:"Icon"`
	Parent    int64  `json:"Parent" db:"Parent"`
	IDRoute   int64  `json:"IDRoute" db:"IDRoute"`
	MenuOrder int64  `json:"MenuOrder" db:"MenuOrder"`
	Childrens []Menu `json:"Childrens"`
	Route     Route  `json:"Route"`
	BaseTable
}
