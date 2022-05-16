package sheetelement

import (
	"cms/commons"
	"cms/logs"
	"database/sql"
	"errors"
	"strings"
)

func (s SheetElement) Exist() (bool, error) {
	sql, err := DB.GetQuery("GetSheetElement")
	if err != nil {
		return false, err
	}
	reader, err := DB.Reader(sql+" WHERE sheetelements.Name = ?", s.Name)
	if err != nil {
		return false, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return false, err
	}
	return (len(results) > 0), nil
}

func LoadSheetElements(_type string) ([]SheetElement, error) {
	sql, err := DB.GetQuery("GetSheetElement")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE sheetelementstype.Name = ?", _type)
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

func LoadSheetElementypes() ([]SheetElementType, error) {
	sql, err := DB.GetQuery("GetSheetElementype")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	var result []SheetElementType
	for reader.Next() {
		var row SheetElementType
		var appInsertDate []byte
		var appEditDate []byte
		var fields string
		err := reader.Scan(&row.Name,
			&fields,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("sheetelement", "LoadSheetElementtypes", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		row.Fields = strings.Split(fields, ",")
		for i, _ := range row.Fields {
			row.Fields[i] = strings.ReplaceAll(row.Fields[i], " ", "")
		}
		result = append(result, row)
	}

	return result, nil
}

func GetElementByID(id int64) (SheetElement, error) {
	sql, err := DB.GetQuery("GetSheetElement")
	if err != nil {
		return SheetElement{}, err
	}
	reader, err := DB.Reader(sql+" WHERE sheetelements.ID = ?", id)
	if err != nil {
		return SheetElement{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return SheetElement{}, err
	}
	if len(results) == 0 {
		return SheetElement{}, errors.New("Sheet Element not found")
	}

	return results[0], nil
}

func GetElementByName(name string) (SheetElement, error) {
	sql, err := DB.GetQuery("GetSheetElement")
	if err != nil {
		return SheetElement{}, err
	}
	reader, err := DB.Reader(sql+" WHERE sheetelements.Name = ?", name)
	if err != nil {
		return SheetElement{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return SheetElement{}, err
	}
	if len(results) == 0 {
		return SheetElement{}, errors.New("Sheet Element not found")
	}

	return results[0], nil
}

func GetAbilitatedForElement(id int64) ([]SheetElement, error) {
	sql, err := DB.GetQuery("GetAbilitatedForSheetElement")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, id)
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

//read read a route record from database
func read(reader *sql.Rows) ([]SheetElement, error) {
	var rows []SheetElement
	for reader.Next() {
		var row SheetElement
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&row.Name,
			&row.Description,
			&row.Icon,
			&row.Min,
			&row.Max,
			&row.Cost,
			&row.IDType,
			&row.Type.Name,
			&row.IDReferenceSheetElement,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("sheetelement", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if row.IDReferenceSheetElement > -1 {
			temp, err := GetElementByID(row.IDReferenceSheetElement)
			if err != nil {
				logs.Save("sheetelement", "read", "Error getting the Reference sheet element", logs.Error, err.Error())
				return nil, err
			}
			row.ReferenceSheetElement.Name = temp.Name
			row.ReferenceSheetElement.Description = temp.Description
			row.ReferenceSheetElement.Min = temp.Min
			row.ReferenceSheetElement.Max = temp.Max
			row.ReferenceSheetElement.Cost = temp.Cost
			row.ReferenceSheetElement.IDType = temp.IDType
			row.ReferenceSheetElement.Type = temp.Type
			row.ReferenceSheetElement.ID = temp.ID
		}
		abilitated, err := GetAbilitatedForElement(row.ID)
		if err != nil {
			logs.Save("sheetelement", "read", "Error getting the abilitated for sheet element", logs.Error, err.Error())
			return nil, err
		}
		for _, r := range abilitated {
			var p Parent
			p.Name = r.Name
			p.Description = r.Description
			p.Min = r.Min
			p.Max = r.Max
			p.Cost = r.Cost
			p.IDType = r.IDType
			p.Type = r.Type
			p.ID = r.ID
			row.AbilitatedForSheetElement = append(row.AbilitatedForSheetElement, p)
		}
		rows = append(rows, row)
	}
	return rows, nil
}
