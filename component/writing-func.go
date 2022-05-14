package component

import (
	"cms/logs"
	"encoding/base64"
	"os"
	"strings"
)

//Add add a static content
func (s EditorElement) Add() error {
	sql, err := DB.GetQuery("AddComponent")
	if err != nil {
		return err
	}
	if s.Type == "image" {
		dec, err := base64.StdEncoding.DecodeString(s.Content[strings.Index(s.Content, ",")+1:])
		if err != nil {
			return err
		}
		err = os.WriteFile("./www/img/pages/"+s.ImageName, dec, 0777)
		if err != nil {
			return err
		}
		s.Content = "./img/pages/" + s.ImageName
	}
	err = DB.Query(sql,
		s.IDElement,
		s.Type,
		s.Columns,
		s.VerticalOrientation,
		s.Content,
		s.ImageName,
		s.IsClass,
		s.IDParent,
		s.IDRoute,
		s.IDInsertUser,
		s.IDEditUser)
	if err != nil {
		logs.Save("component", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	for _, c := range s.Childrens {
		//Get last added component
		id, err := GetIDElement(s.IDElement)
		if err != nil {
			return err
		}
		c.IDParent = id
		err = c.Add()
		if err != nil {
			logs.Save("component", "Add", "Error in ExecContext", logs.Error, err.Error())
			return err
		}
	}
	logs.Save("component", "Add", "Added a component item", logs.Message, s)
	return nil
}

func (c EditorElement) Update() error {
	err := DB.Query("UPDATE Component SET IDElement = ? WHERE ID = ?", c.IDElement, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating IDElement", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET Type = ? WHERE ID = ?", c.Type, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET Columns = ? WHERE ID = ?", c.Columns, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating Columns", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET VerticalOrientation = ? WHERE ID = ?", c.VerticalOrientation, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating VerticalOrientation", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET Content = ? WHERE ID = ?", c.Content, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating Content", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET ImageName = ? WHERE ID = ?", c.ImageName, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating ImageName", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET IsClass = ? WHERE ID = ?", c.IsClass, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating IsClass", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET IDParent = ? WHERE ID = ?", c.IDParent, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating IDParent", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET IDRoute = ? WHERE ID = ?", c.IDRoute, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating IDRoute", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", c.IDEditUser, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	//First delete all children
	err = DB.Query("DELETE FROM Component WHERE IDParent = ?", c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error deleting childrens", logs.Error, err.Error())
		return err
	}
	//then add all children in the json
	for i, _ := range c.Childrens {
		err = c.Childrens[i].Add()
		if err != nil {
			return err
		}
	}
	return nil
}

// //Add add a static content
// func (s Component) Add() error {
// 	sql, err := DB.GetQuery("AddComponent")
// 	if err != nil {
// 		return err
// 	}
// 	err = DB.Query(sql,
// 		s.Name,
// 		s.Content,
// 		s.IDRoute,
// 		s.IDInsertUser,
// 		s.IDEditUser)
// 	if err != nil {
// 		logs.Save("component", "Add", "Error in ExecContext", logs.Error, err.Error())
// 		return err
// 	}
// 	logs.Save("component", "Add", "Added a component item", logs.Message, s)
// 	// return s.UpdatePermission()
// 	return nil
// }

//UpdatePermission Update all permission in associative table, if not exist and enabled = true then create it, if enabled = false then deleted
// func (s Component) UpdatePermission() error {
// 	for _, p := range s.Permissions {
// 		if p.Enabled {
// 			exist, err := s.CheckComponentPermission(p.IDUserType)
// 			if err != nil {
// 				return err
// 			}
// 			if !exist {
// 				err := DB.Query("INSERT INTO ComponentPermission(IDComponent, IDUserType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)",
// 					s.ID, p.IDUserType, s.IDInsertUser, s.IDEditUser)
// 				if err != nil {
// 					logs.Save("component", "Update", "Error adding Permission: "+p.Description, logs.Error, err.Error())
// 					return err
// 				}
// 			}
// 		} else if !p.Enabled {
// 			err := DB.Query("DELETE FROM ComponentPermission WHERE IDComponent = ? AND IDUserType = ?",
// 				s.ID, p.IDUserType)
// 			if err != nil {
// 				logs.Save("component", "Update", "Error deleteing Permission: "+p.Description, logs.Error, err.Error())
// 				return err
// 			}
// 		}
// 	}
// 	return nil
// }

//DeleteRecord a component
func DeleteRecord(id int64) error {
	return DB.Delete("component", id)
}
