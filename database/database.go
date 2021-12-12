package database

import (
	"cms/logs"
	"context"
	"database/sql"
)

var db Database
var _driver, _dns string

//New instatiate new connection to the database
func New(driver, dns string) (Database, error) {
	var err error
	_driver = driver
	_dns = dns
	db.Conn, err = sql.Open(driver, dns)
	if err != nil {
		logs.Save("database", "Initialize", "Error opening the connection with the database", logs.Error, err.Error())
		return Database{}, err
	}
	return db, nil
}

//Query execute a write only query
func (d Database) Query(sql string, args ...interface{}) error {
	var err error
	err = db.Conn.Ping()
	ctx := context.Background()
	if err != nil && err.Error() == "sql: database is closed" {
		db.Conn.Close()
		db, err = New(_driver, _dns)
		if err != nil {
			logs.Save("database", "Reader", "Error renewing connection", logs.Error, err.Error())
			return err
		}
	} else if err != nil {
		logs.Save("database", "Reader", "Error executing Ping", logs.Error, err.Error())
		return err
	}
	_, err = d.Conn.ExecContext(ctx, sql, args...)
	ctx.Done()
	if err != nil {
		logs.Save("database", "Query", "Error executing ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}

//Reader func to execute a query in the database
func (db Database) Reader(sqlCommand string, params ...interface{}) (*sql.Rows, error) {
	var err error
	err = db.Conn.Ping()
	ctx := context.Background()
	if err != nil && err.Error() == "sql: database is closed" {
		db.Conn.Close()
		db, err = New(_driver, _dns)
		if err != nil {
			logs.Save("database", "Reader", "Error renewing connection", logs.Error, err.Error())
			return nil, err
		}
	} else if err != nil {
		logs.Save("database", "Reader", "Error executing Ping", logs.Error, err.Error())
		return nil, err
	}
	var rows *sql.Rows
	rows, err = db.Conn.QueryContext(ctx, sqlCommand, params...)
	ctx.Done()
	if err != nil {
		logs.Save("database", "Reader", "Error executing QueryContext", logs.Error, err.Error())
		return nil, err
	}
	return rows, nil
}

//GetQuery return a query stored in the database
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

//ScanTable scan a table
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

//Add add a record in a table
func (db Database) Delete(tableName string, id int64) error {
	err := db.Query("DELETE FROM "+tableName+" WHERE ID = ?", id)
	if err != nil {
		return err
	}
	return nil
}
