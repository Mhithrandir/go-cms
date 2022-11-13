package database

import (
	"database/sql"
	"time"
)

//Database struct for custom database type
type Database struct {
	Conn *sql.DB
}

type DataTable struct {
	Data []map[string]interface{}
}

//BaseTable standard field to add in every table
type BaseTable struct {
	ID           int64
	InsertDate   time.Time `json:"InsertDate"`
	IDInsertUser int64     `json:"IDInsertUser"`
	EditDate     time.Time `json:"EditDate"`
	IDEditUser   int64     `json:"IDEditUser"`
}

//Fields definition
type Field struct {
	Name      string `json:"Name"`
	Type      string `json:"Type"`
	Length    int    `json:"Length"`
	IsPrimary bool   `json:"IsPrimary"`
	AllowNull bool   `json:"AllowNull"`
}
