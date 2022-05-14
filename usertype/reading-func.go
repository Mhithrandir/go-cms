package usertype

import (
	"cms/commons"
	"cms/logs"
	"database/sql"
	"errors"
)

//Return a usertype for a specific description
func GetUserTypeFromDescription(desc string) (UserType, error) {
	sql, err := DB.GetQuery("UserTypePrinc")
	if err != nil {
		return UserType{}, err
	}
	reader, err := DB.Reader(sql+" WHERE description = ?", desc)
	if err != nil {
		return UserType{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return UserType{}, err
	}

	if len(results) > 0 {
		return results[0], nil
	} else {
		return UserType{}, errors.New("User-Type not found")
	}
}

//Load alla usertype
func Load() ([]UserType, error) {
	sql, err := DB.GetQuery("UserTypePrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return nil, err
	}

	return results, nil
}

//Exist check if usertype exist in the database
func (u UserType) Exist() (bool, error) {
	result, err := GetUserTypeFromDescription(u.Description)
	if err != nil && err.Error() == "User-Type not found" {
		return false, nil
	} else if err != nil {
		return false, err
	}
	return result != UserType{}, nil
}

//Read a record from database
func read(reader *sql.Rows) ([]UserType, error) {
	var rows []UserType
	for reader.Next() {
		var row UserType
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&row.Description,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("usertype", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		rows = append(rows, row)
	}
	return rows, nil
}
