package menu

import (
	"database/sql"
	"go-desk/commons"
	"go-desk/logs"
	"go-desk/route"
)

//LoadMenu load a specific menu from the database, this is a recursive func that load all menu and all childrens of each menu item
func LoadMenu(menuname string, idusertype, parent int64) ([]Menu, error) {
	reader, err := DB.Reader("GetMenu", idusertype, menuname, parent)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return nil, err
	}

	for i, _ := range results {
		results[i].Childrens, err = LoadMenu(menuname, idusertype, results[i].ID)
		if err != nil {
			logs.Save("menu", "LoadMenu", "Error selecting children", logs.Error, err.Error())
			return nil, err
		}
	}
	return results, nil
}

//LoadMenuNames load all menu names
func LoadMenuNames() ([]string, error) {
	reader, err := DB.Reader("GetMenuNames")
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	var results []string
	for reader.Next() {
		var record string
		err := reader.Scan(&record)
		if err != nil {
			logs.Save("menu", "LoadMenuNames", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		results = append(results, record)
	}
	return results, nil
}

//LoadPlainMenu load all record from tables menus
func LoadPlainMenu(start, end int) ([]Menu, error) {
	reader, err := DB.Reader("GetMenuPlain", start, end)
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

//CountMenu count all records in the table
func CountMenu() (int64, error) {
	reader, err := DB.Reader("CountMenuPlain")
	defer reader.Close()
	reader.Next()
	var count int64
	reader.Scan(&count)
	if err != nil {
		logs.Save("menu", "CountMenu", "Error scanning the record", logs.Error, err.Error())
		return -1, err
	}
	return count, nil
}

//Exist check if a menupermission records alreasdy exist
func (m Menu) Exist() (bool, error) {
	sql, err := DB.GetQuery("MenuExist")
	if err != nil {
		logs.Save("menu", "Exist", "Error getting the query", logs.Error, err.Error())
		return false, err
	}
	result, err := DB.ScanTable(sql, m.MenuName, m.Name)
	if err != nil {
		logs.Save("menu", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func GetMenuFromID(id int64) (Menu, error) {
	reader, err := DB.Reader("GetMenuFromID", id)
	defer reader.Close()
	if err != nil {
		return Menu{}, err
	}
	results, err := read(reader)
	if err != nil {
		return Menu{}, err
	}

	return results[0], err
}

//GetMenuFromName returns a menu from a name
func GetMenuFromName(menuname, name string) (Menu, error) {
	reader, err := DB.Reader("GetMenuFromName", menuname, name)
	defer reader.Close()
	if err != nil {
		return Menu{}, err
	}
	results, err := read(reader)
	if err != nil {
		return Menu{}, err
	}

	return results[0], err
}

func read(reader *sql.Rows) ([]Menu, error) {
	var results []Menu
	for reader.Next() {
		var record Menu
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.MenuName,
			&record.Name,
			&record.Parent,
			&record.IDRoute,
			&record.Order,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("menu", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		route.DB = DB
		record.Route, err = route.GetRouteFromID(record.IDRoute)
		if err != nil {
			return nil, err
		}
		results = append(results, record)
	}
	return results, nil
}
