package database

import (
	"database/sql"
	"encoding/hex"
	"errors"
	"go-cms/logs"
	"os"
	"time"

	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"golang.org/x/crypto/sha3"
)

var db Database

// New instatiate new connection to the database
func New(driver, dns string) (Database, error) {
	var err error
	if _, err := os.Stat(dns); err != nil {
		_, err := os.Create(dns)
		if err != nil {
			logs.Save("database", "Initialize", "Error creating the database", logs.Error, err.Error())
			return Database{}, err
		}
	}
	db.Conn, err = sqlx.Connect(driver, dns)
	if err != nil {
		logs.Save("database", "Initialize", "Error opening the connection with the database", logs.Error, err.Error())
		return Database{}, err
	}
	return db, nil
}

// Query execute a write only query
func (db Database) Query(sql string, args ...interface{}) error {
	_, err := db.Conn.Exec(sql, args...)
	if err != nil {
		logs.Save("database", "Query", "Error executing ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}

// Reader func to execute a query in the database
func (db Database) Reader(sqlCommand string, args ...interface{}) (*sqlx.Rows, error) {
	var rows *sqlx.Rows
	rows, err := db.Conn.Queryx(sqlCommand, args...)
	if err != nil {
		logs.Save("database", "Reader", "Error executing QueryContext", logs.Error, err.Error())
		return nil, err
	}
	return rows, nil
}

// Delete add a record in a table
func (db Database) Delete(tableName, field string, value interface{}) error {
	err := db.Query("DELETE FROM "+tableName+" WHERE "+field+" = ?", value)
	if err != nil {
		return err
	}
	return nil
}

// GetQuery return a query stored in the database
func (db Database) GetQuery(queryName string) (string, error) {
	reader, err := db.Reader("SELECT DISTINCT Command FROM StoredQueries WHERE Name = ?", queryName)
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

// Insert new Stored Query
func (db Database) InsertStoredQuery(name, command string) error {
	return db.Query("INSERT INTO StoredQueries(Name, Command, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, DateTime('now'), 0, DateTime('now'), 0)", name, command)
}

// Check if object exist
func (db Database) Exist(name string) (bool, error) {
	reader, err := db.Reader("SELECT DISTINCT tbl_name FROM sqlite_master WHERE tbl_name = ?", name)
	if err != nil {
		return false, err
	}
	defer reader.Close()
	var sql string
	reader.Next()
	err = reader.Scan(&sql)
	if err != nil {
		logs.Save("database", "Exist", "Error scanning the record", logs.Error, err.Error())
		return false, err
	}
	return sql != "", nil
}

// function to crypt a password
func CryptPassword(password string) string {
	hasher := sha3.New512()
	hasher.Write([]byte(password))
	return hex.EncodeToString(hasher.Sum(nil))
}

// function to read a datetime value from database
func (a *DateTime) Scan(value interface{}) error {
	source, ok := value.(string)
	if !ok && value != nil {
		return errors.New("incompatible type")
	}
	if value == nil {
		*a = DateTime{IsNil: true}
		return nil
	}

	temp, err := time.Parse("2006-01-02 15:04:05.999999999", source)
	if err != nil {
		return errors.New("cannot parse \"" + source + "\" incorrect DateTime format")
	}

	*a = DateTime{DatabaseValue: source, ParsedValue: temp, IsNil: false}
	return nil
}

// function that read the last insert id
func (db Database) GetLastID(tableName string) (int64, error) {
	reader, err := db.Reader("SELECT last_insert_rowid() FROM " + tableName)

	if err != nil {
		return -1, err
	}

	var result []int64
	for reader.Next() {
		var r int64
		err = reader.Scan(&r)
		if err != nil {
			logs.Save("database", "GetLastRecord", "Error scanning the record", logs.Error, err.Error())
			return -1, err
		}

		result = append(result, r)
	}
	if len(result) == 0 {
		return -1, errors.New("no last id foud")
	}
	return result[0], nil
}

// returns all table names in the database
func (db Database) GetTables() ([]string, error) {
	var tables []string

	reader, err := db.Reader("SELECT name FROM sqlite_master WHERE type='table'", 0, -1)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	for reader.Next() {
		var t string
		err = reader.Scan(&t)
		if err != nil {
			logs.Save("database", "GetTables", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}

		tables = append(tables, t)
	}

	return tables, nil
}

// ScanTable scan a table
func (db Database) ScanTable(sqlCommand string, params ...interface{}) ([]map[string]interface{}, error) {
	reader, err := db.Reader(sqlCommand, params...)
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
		case "INT":
			columns[i] = sql.NullInt64{}
		case "DATETIME":
			columns[i] = sql.NullTime{}
		case "TINYINT":
			columns[i] = sql.NullBool{}
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
