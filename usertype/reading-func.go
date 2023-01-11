package usertype

import (
	"database/sql"
	"errors"
	commons "go-cmscommons"
	logs "go-cmslogs"
)

// Return a usertype for a specific description
func GetUserTypeFromDescription(desc string) (UserType, error) {
	reader, err := DB.Reader("GetUserTypeFromDescription", desc)
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

// Load alla usertype
func Load() ([]UserType, error) {
	reader, err := DB.Reader("LoadUserType")
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

// Exist check if usertype exist in the database
func (u UserType) Exist() (bool, error) {
	result, err := GetUserTypeFromDescription(u.Description)
	if err != nil && err.Error() == "User-Type not found" {
		return false, nil
	} else if err != nil {
		return false, err
	}
	return result != UserType{}, nil
}

// Read a record from database
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
