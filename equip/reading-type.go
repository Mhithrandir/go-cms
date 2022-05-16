package equip

import (
	"cms/commons"
	"cms/logs"
	"database/sql"
)

func LoadTypes() ([]EquipType, error) {
	sql, err := DB.GetQuery("GetEquipTypes")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := readTypes(reader)
	if err != nil {
		return nil, err
	}

	return results, nil
}

func Load(_type string) ([]Equip, error) {
	sql, err := DB.GetQuery("GetEquip")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE equiptypes.Name = ?", _type)
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

//Exist check if a menupermission records alreasdy exist
func (e Equip) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Equip WHERE Name = ?", e.Name)
	if err != nil {
		logs.Save("equip", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

//Exist check if a menupermission records alreasdy exist
func (e EquipType) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM EquipTypes WHERE Name = ?", e.Name)
	if err != nil {
		logs.Save("equip", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func read(reader *sql.Rows) ([]Equip, error) {
	var results []Equip
	for reader.Next() {
		var record Equip
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Name,
			&record.Icon,
			&record.Description,
			&record.Price,
			&record.Size,
			&record.Type.ID,
			&record.Type.Name,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("equip", "read", "Error scanning the record", logs.Error, err.Error())
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

func readTypes(reader *sql.Rows) ([]EquipType, error) {
	var results []EquipType
	for reader.Next() {
		var record EquipType
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Name,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("equip", "readTypes", "Error scanning the record", logs.Error, err.Error())
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
