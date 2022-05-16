package location

import (
	"cms/character"
	"cms/commons"
	"cms/logs"
	"database/sql"
	"errors"
	"strconv"
)

func LoadLocations(idParent int64) ([]Location, error) {
	command, err := DB.GetQuery("GetLocations")
	if err != nil {
		return nil, err
	}
	var reader *sql.Rows

	reader, err = DB.Reader(command+" WHERE IDParent = ?", idParent)
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

func GetChildrenLocation(id int64) ([]Location, error) {
	children, err := LoadLocations(id)
	if err != nil {
		return nil, err
	}
	for i, _ := range children {
		children[i].Childrens, err = GetChildrenLocation(children[i].ID)
		if err != nil {
			return nil, err
		}
	}
	return children, err
}

func GetLocationById(id int64) (Location, error) {
	sql, err := DB.GetQuery("GetLocations")
	if err != nil {
		return Location{}, err
	}
	reader, err := DB.Reader(sql+" WHERE ID = ?", id)
	if err != nil {
		return Location{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return Location{}, err
	}

	for _, l := range results {
		l.Childrens, err = LoadLocations(l.ID)
		if err != nil {
			return Location{}, err
		}
	}
	if len(results) == 0 {
		return Location{}, errors.New("No location found for the id: " + strconv.Itoa(int(id)))
	}

	return results[0], nil
}

//Exist check if a menupermission records alreasdy exist
func (e Location) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Locations WHERE Name = ?", e.Name)
	if err != nil {
		logs.Save("location", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func (l Location) LoadMessages() ([]ChatMessage, error) {
	sql, err := DB.GetQuery("GetChatMessages")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, l.ID)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := readChatMessages(reader, l)
	if err != nil {
		return nil, err
	}

	return results, nil
}

func (l Location) LoadValidations() ([]ChatMessage, error) {
	sql, err := DB.GetQuery("GetChatMessages")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE Archive > -1 AND Validated > 0", l.ID)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := readChatMessages(reader, l)
	if err != nil {
		return nil, err
	}

	return results, nil
}

func read(reader *sql.Rows) ([]Location, error) {
	var results []Location
	for reader.Next() {
		var record Location
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Name,
			&record.Description,
			&record.Image,
			&record.X,
			&record.Y,
			&record.IDParent,
			&record.HasChat,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("location", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if err != nil {
			return nil, err
		}

		results = append(results, record)
	}
	return results, nil
}

func readChatMessages(reader *sql.Rows, l Location) ([]ChatMessage, error) {
	var results []ChatMessage
	for reader.Next() {
		var record ChatMessage
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Message,
			&record.IDCharacter,
			&record.IDLocation,
			&record.Archive,
			&record.IDMaster,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("location", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if err != nil {
			return nil, err
		}
		character.DB = DB
		record.Character, err = character.GetCharacter(record.IDCharacter)
		if err != nil {
			return nil, err
		}
		record.Location = l
		record.IDLocation = l.ID

		results = append(results, record)
	}
	return results, nil
}
