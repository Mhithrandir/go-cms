package component

import (
	"cms/commons"
	"cms/logs"
	"cms/route"
	"database/sql"
)

func GetComponent(name string, idUserType int64) ([]Component, error) {
	sql, err := DB.GetQuery("GetComponent")
	if err != nil {
		return nil, err
	}

	reader, err := DB.Reader(sql, name, idUserType)
	defer reader.Close()
	if err != nil {
		return nil, err
	}

	results, err := read(reader)
	if err != nil {
		return nil, err
	}

	// for i, _ := range results {
	// 	results[i].Permissions, err = results[i].GetPermission()
	// 	if err != nil {
	// 		logs.Save("component", "GetComponent", "Error selecting permission", logs.Error, err.Error())
	// 		return nil, err
	// 	}
	// }

	return results, nil
}

func LoadComponents(start, end int) ([]Component, error) {
	sql, err := DB.GetQuery("LoadComponents")
	if err != nil {
		return nil, err
	}

	reader, err := DB.Reader(sql, start, end)
	defer reader.Close()
	if err != nil {
		return nil, err
	}

	results, err := read(reader)
	if err != nil {
		return nil, err
	}

	// for i, _ := range results {
	// 	results[i].Permissions, err = results[i].GetPermission()
	// 	if err != nil {
	// 		logs.Save("component", "LoadComponents", "Error selecting permission", logs.Error, err.Error())
	// 		return nil, err
	// 	}
	// }

	return results, nil
}

// func (r Component) GetPermission() ([]ComponentPermission, error) {
// 	sql, err := DB.GetQuery("GetComponentPermission")
// 	if err != nil {
// 		return nil, err
// 	}
// 	reader, err := DB.Reader(sql, r.ID)
// 	if err != nil {
// 		return nil, err
// 	}
// 	results, err := readPermission(reader)
// 	if err != nil {
// 		return nil, err
// 	}
// 	//Insert empty permissions
// 	usertype.DB = DB
// 	usertypes, err := usertype.Load()
// 	if err != nil {
// 		return nil, err
// 	}
// 	for _, us := range usertypes {
// 		found := false
// 		for i, r := range results {
// 			if us.Description == r.UserType.Description {
// 				results[i].Enabled = true
// 				found = true
// 				break
// 			}
// 		}
// 		if !found {
// 			results = append(results, ComponentPermission{IDComponent: r.ID, IDUserType: us.ID, Enabled: found, UserType: us})
// 		}
// 	}

// 	sort.SliceStable(results, func(i, j int) bool {
// 		return results[i].IDUserType < results[j].IDUserType
// 	})
// 	return results, err
// }

// func (r Component) CheckComponentPermission(idusertype int64) (bool, error) {
// 	sql, err := DB.GetQuery("GetComponentPermission")
// 	if err != nil {
// 		return false, err
// 	}
// 	reader, err := DB.Reader(sql, r.ID)
// 	if err != nil {
// 		return false, err
// 	}
// 	results, err := readPermission(reader)
// 	if err != nil {
// 		return false, err
// 	}
// 	for _, p := range results {
// 		if p.IDUserType == idusertype {
// 			return true, nil
// 		}
// 	}
// 	return false, nil
// }

func (c Component) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM component WHERE name = ?", c.Name)
	if err != nil {
		logs.Save("component", "Exist", "Error checking if component exist", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func GetComponentFromID(id int64) (Component, error) {
	sql, err := DB.GetQuery("GetComponentFromID")
	if err != nil {
		return Component{}, err
	}
	reader, err := DB.Reader(sql, id)
	defer reader.Close()
	if err != nil {
		return Component{}, err
	}
	results, err := read(reader)
	if err != nil {
		return Component{}, err
	}

	// for i, r := range results {
	// 	results[i].Permissions, err = r.GetPermission()
	// 	if err != nil {
	// 		return Component{}, err
	// 	}
	// }

	return results[0], err
}

func read(reader *sql.Rows) ([]Component, error) {
	var results []Component
	for reader.Next() {
		var record Component
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Name,
			&record.Content,
			&record.IDRoute,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("component", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if record.IDRoute > -1 {
			route.DB = DB
			record.Route, err = route.GetRouteFromID(record.IDRoute)
			if err != nil {
				return nil, err
			}
		}
		results = append(results, record)
	}
	return results, nil
}

// readPermission read all permission for a specific menu item
// func readPermission(reader *sql.Rows) ([]ComponentPermission, error) {
// 	var rows []ComponentPermission
// 	for reader.Next() {
// 		var row ComponentPermission
// 		var appInsertDate []byte
// 		var appEditDate []byte
// 		//Possible null values
// 		var usertypeDescription sql.NullString
// 		var usertypeID sql.NullInt64
// 		var usertypeIDInsertUser sql.NullInt64
// 		var usertypeIDEditUser sql.NullInt64
// 		err := reader.Scan(&row.IDComponent,
// 			&row.IDUserType,
// 			&usertypeDescription,
// 			&usertypeID,
// 			&appInsertDate,
// 			&usertypeIDInsertUser,
// 			&appEditDate,
// 			&usertypeIDEditUser)
// 		if err != nil {
// 			logs.Save("component", "readPermission", "Error scanning the record", logs.Error, err.Error())
// 			return nil, err
// 		}
// 		row.UserType.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
// 		row.UserType.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
// 		if usertypeDescription.Valid {
// 			row.UserType.Description = usertypeDescription.String
// 		}
// 		if usertypeID.Valid {
// 			row.UserType.ID = usertypeID.Int64
// 		}
// 		if usertypeIDInsertUser.Valid {
// 			row.UserType.IDInsertUser = usertypeIDInsertUser.Int64
// 		}
// 		if usertypeIDEditUser.Valid {
// 			row.UserType.IDEditUser = usertypeIDEditUser.Int64
// 		}
// 		row.Enabled = true
// 		rows = append(rows, row)
// 	}
// 	return rows, nil
// }
