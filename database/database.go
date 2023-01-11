package database

import (
	"context"
	"database/sql"
	"go-cms/logs"
	"log"
	"os"
	"strconv"

	_ "github.com/mattn/go-sqlite3"
)

var db Database
var _driver, _dns string

// New instatiate new connection to the database
func New(driver, dns string) (Database, error) {
	var err error
	_driver = driver
	_dns = dns
	if _, err := os.Stat(dns); err != nil {
		_, err := os.Create(dns)
		if err != nil {
			logs.Save("database", "Initialize", "Error creating the database", logs.Error, err.Error())
			return Database{}, err
		}
	}
	db.Conn, err = sql.Open(driver, dns)
	if err != nil {
		logs.Save("database", "Initialize", "Error opening the connection with the database", logs.Error, err.Error())
		return Database{}, err
	}
	return db, nil
}

// Query execute a write only query
func (db Database) Query(name string, args ...interface{}) error {
	sql, err := db.GetQuery(name)
	if err != nil {
		return err
	}
	return db.QueryCmd(sql, args...)
}

// Query execute a write only query
func (db Database) QueryCmd(sql string, args ...interface{}) error {
	ctx := context.Background()
	_, err := db.Conn.ExecContext(ctx, sql, args...)
	ctx.Done()
	if err != nil {
		logs.Save("database", "Query", "Error executing ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}

// Reader func to execute a query in the database
func (db Database) Reader(name string, args ...interface{}) (*sql.Rows, error) {
	sql, err := db.GetQuery(name)
	if err != nil {
		return nil, err
	}
	return db.ReaderCmd(sql, args...)
}

// Reader func to execute a query in the database
func (db Database) ReaderCmd(sqlCommand string, args ...interface{}) (*sql.Rows, error) {
	var err error
	ctx := context.Background()
	var rows *sql.Rows
	rows, err = db.Conn.QueryContext(ctx, sqlCommand, args...)
	ctx.Done()
	if err != nil {
		logs.Save("database", "Reader", "Error executing QueryContext", logs.Error, err.Error())
		return nil, err
	}
	return rows, nil
}

// GetQuery return a query stored in the database
func (db Database) GetQuery(queryName string) (string, error) {
	reader, err := db.ReaderCmd("SELECT DISTINCT Command FROM StoredQueries WHERE Name = ?", queryName)
	if err != nil {
		return "", err
	}
	defer reader.Close()
	var sql string
	reader.Next()
	err = reader.Scan(&sql)
	if err != nil {
		logs.Save("database", "GetQuery", "Error scanning the record", logs.Error, err.Error())
		return "", err
	}
	return sql, nil
}

// ScanTable scan a table
func (db Database) ScanTable(sqlCommand string, params ...interface{}) ([]map[string]interface{}, error) {
	reader, err := db.ReaderCmd(sqlCommand, params...)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	cols, err := reader.Columns()
	if err != nil {
		logs.Save("database", "ScanTable", "Error retrieving columns", logs.Error, err.Error())
		return nil, err
	}
	colType, err := reader.ColumnTypes()
	if err != nil {
		logs.Save("database", "ScanTable", "Error retrieving column type", logs.Error, err.Error())
		return nil, err
	}
	columns := make([]interface{}, len(cols))
	columnPointers := make([]interface{}, len(cols))
	for i, _ := range colType {
		switch colType[i].DatabaseTypeName() {
		case "VARCHAR":
			columns[i] = sql.NullString{}
			break
		case "INT":
			columns[i] = sql.NullInt64{}
			break
		case "DATETIME":
			columns[i] = sql.NullTime{}
			break
		case "TINYINT":
			columns[i] = sql.NullBool{}
			break
		}
		columnPointers[i] = &columns[i]
	}

	var data []map[string]interface{}
	for reader.Next() {
		err := reader.Scan(columnPointers...)
		if err != nil {
			logs.Save("database", "ScanTable", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		data = append(data, make(map[string]interface{}))
		for i, colName := range cols {
			data[len(data)-1][colName] = columns[i]
		}
	}
	return data, nil
}

// Add add a record in a table
func (db Database) Delete(tableName string, id int64) error {
	err := db.QueryCmd("DELETE FROM "+tableName+" WHERE ID = ?", id)
	if err != nil {
		return err
	}
	return nil
}

// Get all object in database
func (db Database) GetTables() ([]string, error) {
	result, err := db.ScanTable("SELECT DISTINCT * FROM sqlite_master")
	if err != nil {
		return nil, err
	}
	log.Println(result)
	return nil, nil
}

// Check if object exist
func (db Database) Exist(name string) (bool, error) {
	result, err := db.ScanTable("SELECT DISTINCT * FROM sqlite_master WHERE tbl_name = ?", name)
	if err != nil {
		return false, err
	}
	return len(result) > 0, nil
}

// Create table
func (db Database) CreateTable(name string, fields []Field) error {
	sql := "CREATE TABLE " + name + "("
	for _, f := range fields {
		sql += f.ToString() + ","
	}
	sql = sql[0:len(sql)-1] + ")"
	return db.QueryCmd(sql)
}

// Insert new Stored Query
func (db Database) InsertStoredQuery(name, command string) error {
	return db.QueryCmd("INSERT INTO StoredQueries(Name, Command, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, DateTime('now'), 0, DateTime('now'), 0)", name, command)
}

func (f Field) ToString() string {
	sql := f.Name + " " + f.Type
	if f.Length > 0 {
		sql += " (" + strconv.Itoa(f.Length) + ")"
	}
	if f.IsPrimary {
		sql += " PRIMARY KEY"
	}
	if !f.IsPrimary && f.AllowNull {
		sql += " NULL"
	}
	return sql
}
