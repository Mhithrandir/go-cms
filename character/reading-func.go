package character

import (
	"cms/commons"
	"cms/logs"
	"cms/user"
	"database/sql"
	"errors"
	"strconv"
)

func Load(id int64) ([]Character, error) {
	command, err := DB.GetQuery("GetCharacters")
	if err != nil {
		return nil, err
	}
	var reader *sql.Rows
	if id != -1 {
		reader, err = DB.Reader(command+" WHERE IDUser = ?", id)
	} else {
		reader, err = DB.Reader(command)
	}
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

func GetCharacter(id int64) (Character, error) {
	sql, err := DB.GetQuery("GetCharacters")
	if err != nil {
		return Character{}, err
	}
	reader, err := DB.Reader(sql+" WHERE ID = ?", id)
	if err != nil {
		return Character{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return Character{}, err
	}
	if len(results) == 0 {
		logs.Save("character", "GetCharacter", "No character found for the id: "+strconv.Itoa(int(id)), logs.Error, "")
		return Character{}, errors.New("No character found for the id: " + strconv.Itoa(int(id)))
	}

	return results[0], nil
}

func GetGuildCharacters(id int64) ([]Character, error) {
	command, err := DB.GetQuery("GetGuildCharacters")
	if err != nil {
		return nil, err
	}
	var reader *sql.Rows
	reader, err = DB.Reader(command+" WHERE IDGuild = ?", id)
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

func (c Character) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Characters WHERE Name = ?", c.Name)
	if err != nil {
		logs.Save("character", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func CheckField(fieldName, value string) (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Characters WHERE "+fieldName+" = ?", value)
	if err != nil {
		logs.Save("character", "CheckField", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func (c CharacterValue) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM CharacterValue WHERE Name = ?", c.Name)
	if err != nil {
		logs.Save("character", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

//read read a route record from database
func read(reader *sql.Rows) ([]Character, error) {
	var rows []Character
	for reader.Next() {
		var row Character
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&row.Name,
			&row.Icon,
			&row.LendFace,
			&row.Background,
			&row.IDUser,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("characters", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		user.DB = DB
		row.User, err = user.GetUserByID(row.IDUser)
		if err != nil {
			return nil, err
		}
		//read the values of the sheet
		sql, err := DB.GetQuery("GetCharacterValues")
		if err != nil {
			return nil, err
		}
		readerValues, err := DB.Reader(sql, row.Name)
		for readerValues.Next() {
			var val CharacterValue
			err := reader.Scan(&val.Name,
				&val.Value,
				&val.IDSheetElement,
				&val.ID,
				&appInsertDate,
				&val.IDInsertUser,
				&appEditDate,
				&val.IDEditUser)
			if err != nil {
				logs.Save("characters", "read", "Error scanning the record", logs.Error, err.Error())
				return nil, err
			}
			val.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
			val.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
			row.Values = append(row.Values, val)
		}
		rows = append(rows, row)
	}
	return rows, nil
}
