package menu

import (
	"cms/commons"
	"cms/logs"
	"cms/usertype"
	"database/sql"
	"log"
	"sort"
)

//LoadMenu load a specific menu from the database, this is a recursive func that load all menu and all childrens of each menu item
func LoadMenu(menuname string, idusertype, parent int64) ([]Menu, error) {
	sql, err := DB.GetQuery("MenuPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, idusertype, menuname, parent)
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

//LoadPlainMenu load all record from tables menus
func LoadPlainMenu(start, end int) ([]Menu, error) {
	sql, err := DB.GetQuery("MenuPlain")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, start, end)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return nil, err
	}
	for i, r := range results {
		perm, err := r.GetPermission()
		if err != nil {
			return nil, err
		}

		results[i].Permissions = perm
		if err != nil {
			return nil, err
		}
	}

	return results, nil
}

//CountMenu count all records in the table
func CountMenu() (int64, error) {
	sql, err := DB.GetQuery("CountMenuPlain")
	if err != nil {
		return -1, err
	}
	reader, err := DB.Reader(sql)
	reader.Next()
	var count int64
	reader.Scan(&count)
	if err != nil {
		logs.Save("menu", "CountMenu", "Error scanning the record", logs.Error, err.Error())
		return -1, err
	}
	return count, nil
}

func (r Menu) GetPermission() ([]MenuPermission, error) {
	sql, err := DB.GetQuery("MenuPermissionPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, r.ID)
	if err != nil {
		return nil, err
	}
	results, err := readPermission(reader)
	if err != nil {
		return nil, err
	}
	//Insert empty permissions
	usertype.DB = DB
	usertypes, err := usertype.Load()
	if err != nil {
		return nil, err
	}
	for _, us := range usertypes {
		found := false
		for i, r := range results {
			if us.Description == r.UserType.Description {
				results[i].Enabled = true
				found = true
				break
			}
		}
		if !found {
			results = append(results, MenuPermission{IDMenu: r.ID, IDUserType: us.ID, Enabled: found, UserType: us})
		}
	}

	sort.SliceStable(results, func(i, j int) bool {
		return results[i].IDUserType < results[j].IDUserType
	})
	return results, err
}

func (r Menu) CheckMenuPermission(idusertype int64) (bool, error) {
	sql, err := DB.GetQuery("MenuPermissionPrinc")
	if err != nil {
		return false, err
	}
	reader, err := DB.Reader(sql, r.ID)
	if err != nil {
		return false, err
	}
	results, err := readPermission(reader)
	if err != nil {
		return false, err
	}
	for _, p := range results {
		if p.IDUserType == idusertype {
			return true, nil
		}
	}
	return false, nil
}

//Exist check if a menupermission records alreasdy exist
func (m Menu) Exist() (bool, error) {
	asd, err := DB.ScanTable("SELECT * FROM menus WHERE menuname = ? AND name = ?", m.MenuName, m.Name)
	log.Println(asd)
	if err != nil {
		logs.Save("menu", "LoadMenu", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(asd) > 0), nil
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
			&record.Path,
			&record.MenuOrder,
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
		results = append(results, record)
	}
	return results, nil
}

// readPermission read all permission for a specific menu item
func readPermission(reader *sql.Rows) ([]MenuPermission, error) {
	var rows []MenuPermission
	for reader.Next() {
		var row MenuPermission
		var appInsertDate []byte
		var appEditDate []byte
		//Possible null values
		var usertypeDescription sql.NullString
		var usertypeID sql.NullInt64
		var usertypeIDInsertUser sql.NullInt64
		var usertypeIDEditUser sql.NullInt64
		err := reader.Scan(&row.IDMenu,
			&row.IDUserType,
			&usertypeDescription,
			&usertypeID,
			&appInsertDate,
			&usertypeIDInsertUser,
			&appEditDate,
			&usertypeIDEditUser)
		if err != nil {
			logs.Save("menu", "readPermission", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.UserType.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.UserType.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if usertypeDescription.Valid {
			row.UserType.Description = usertypeDescription.String
		}
		if usertypeID.Valid {
			row.UserType.ID = usertypeID.Int64
		}
		if usertypeIDInsertUser.Valid {
			row.UserType.IDInsertUser = usertypeIDInsertUser.Int64
		}
		if usertypeIDEditUser.Valid {
			row.UserType.IDEditUser = usertypeIDEditUser.Int64
		}
		row.Enabled = true
		rows = append(rows, row)
	}
	return rows, nil
}
