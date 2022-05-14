package component

import (
	"cms/commons"
	"cms/logs"
	"cms/route"
	"database/sql"
	"errors"
)

//LoadComponent load a components from a url and check if user is allowed to opened it
func LoadComponent(url string, idUserType int64) ([]EditorElement, error) {
	sql, err := DB.GetQuery("GetComponent")
	if err != nil {
		return nil, err
	}

	reader, err := DB.Reader(sql, url, idUserType)
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

//LoadComponents load all components
func LoadComponents(start, end int) ([]EditorElement, error) {
	sql, err := DB.GetQuery("GetComponents")
	if err != nil {
		return nil, err
	}

	reader, err := DB.Reader(sql, -1, start, end)
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

//LoadChildrenElements load all children for component
func LoadChildrenElements(id int64) ([]EditorElement, error) {
	sql, err := DB.GetQuery("GetChildrenComponents")
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

func (c EditorElement) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM component WHERE IDElement = ?", c.IDElement)
	if err != nil {
		logs.Save("component", "Exist", "Error checking if component exist", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func GetComponentFromID(id int64) (EditorElement, error) {
	sql, err := DB.GetQuery("GetComponentFromID")
	if err != nil {
		return EditorElement{}, err
	}
	reader, err := DB.Reader(sql, id)
	if err != nil {
		return EditorElement{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return EditorElement{}, err
	}

	return results[0], err
}

func GetIDElement(name string) (int64, error) {
	reader, err := DB.Reader("SELECT * FROM component WHERE IDElement = ?", name)
	if err != nil {
		logs.Save("component", "Exist", "Error checking if component exist", logs.Error, err.Error())
		return -1, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return -1, err
	}
	if len(results) == 0 {
		return -1, errors.New("Element: \"" + name + "\" not found")
	}
	return results[0].ID, nil
}

// func LoadComponent(url string, idUserType int64) ([]Component, error) {
// 	sql, err := DB.GetQuery("GetComponent")
// 	if err != nil {
// 		return nil, err
// 	}
// 	reader, err := DB.Reader(sql, url, idUserType)
// 	defer reader.Close()
// 	if err != nil {
// 		return nil, err
// 	}
// 	results, err := read(reader)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return results, nil
// }
// func LoadComponents(start, end int) ([]Component, error) {
// 	sql, err := DB.GetQuery("LoadComponents")
// 	if err != nil {
// 		return nil, err
// 	}
// 	reader, err := DB.Reader(sql, start, end)
// 	defer reader.Close()
// 	if err != nil {
// 		return nil, err
// 	}
// 	results, err := read(reader)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return results, nil
// }
// func (c Component) Exist() (bool, error) {
// 	result, err := DB.ScanTable("SELECT * FROM component WHERE name = ?", c.Name)
// 	if err != nil {
// 		logs.Save("component", "Exist", "Error checking if component exist", logs.Error, err.Error())
// 		return false, err
// 	}
// 	return (len(result) > 0), nil
// }
// func GetComponentFromID(id int64) (Component, error) {
// 	sql, err := DB.GetQuery("GetComponentFromID")
// 	if err != nil {
// 		return Component{}, err
// 	}
// 	reader, err := DB.Reader(sql, id)
// 	defer reader.Close()
// 	if err != nil {
// 		return Component{}, err
// 	}
// 	results, err := read(reader)
// 	if err != nil {
// 		return Component{}, err
// 	}
// 	return results[0], err
// }

func read(reader *sql.Rows) ([]EditorElement, error) {
	var results []EditorElement
	for reader.Next() {
		var record EditorElement
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.IDElement,
			&record.Type,
			&record.Columns,
			&record.VerticalOrientation,
			&record.Content,
			&record.ImageName,
			&record.IsClass,
			&record.IDParent,
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

		//Load all the children
		for i, _ := range results {
			results[i].Childrens, err = LoadChildrenElements(results[i].ID)
			if err != nil {
				return nil, err
			}
		}
	}
	return results, nil
}

// func read(reader *sql.Rows) ([]Component, error) {
// 	var results []Component
// 	for reader.Next() {
// 		var record Component
// 		var appInsertDate []byte
// 		var appEditDate []byte
// 		err := reader.Scan(&record.Name,
// 			&record.Content,
// 			&record.IDRoute,
// 			&record.ID,
// 			&appInsertDate,
// 			&record.IDInsertUser,
// 			&appEditDate,
// 			&record.IDEditUser)
// 		if err != nil {
// 			logs.Save("component", "read", "Error scanning the record", logs.Error, err.Error())
// 			return nil, err
// 		}
// 		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
// 		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
// 		if record.IDRoute > -1 {
// 			route.DB = DB
// 			record.Route, err = route.GetRouteFromID(record.IDRoute)
// 			if err != nil {
// 				return nil, err
// 			}
// 		}
// 		results = append(results, record)
// 	}
// 	return results, nil
// }
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
