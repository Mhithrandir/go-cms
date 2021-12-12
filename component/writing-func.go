package component

import "cms/logs"

//Add add a static content
func (s Component) Add() error {
	sql, err := DB.GetQuery("AddComponent")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		s.Name,
		s.Content,
		s.IDRoute,
		s.IDInsertUser,
		s.IDEditUser)
	if err != nil {
		logs.Save("component", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("component", "Add", "Added a component item", logs.Message, s)
	// return s.UpdatePermission()
	return nil
}

func (c Component) Update() error {
	err := DB.Query("UPDATE Component SET Name = ? WHERE ID = ?", c.Name, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Component SET Content = ? WHERE ID = ?", c.Content, c.ID)
	if err != nil {
		logs.Save("component", "Update", "Error updating Content", logs.Error, err.Error())
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
	// return c.UpdatePermission()
	return nil
}

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

//Delete a component
func Delete(id int64) error {
	// c, err := GetComponentFromID(id)
	// if err != nil {
	// 	return err
	// }
	// //Delete all permission so cleans the routepermission table
	// for i, _ := range c.Permissions {
	// 	c.Permissions[i].Enabled = false
	// }
	// c.Update()
	return DB.Delete("component", id)
}
