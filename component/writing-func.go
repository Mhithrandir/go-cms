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
		s.IDInsertUser,
		s.IDEditUser)
	if err != nil {
		logs.Save("page", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("page", "Add", "Added a menu item", logs.Message, s)
	return s.UpdatePermission()
}

//UpdatePermission Update all permission in associative table, if not exist and enabled = true then create it, if enabled = false then deleted
func (s Component) UpdatePermission() error {
	for _, p := range s.Permissions {
		if p.Enabled {
			exist, err := s.CheckComponentPermission(p.IDUserType)
			if err != nil {
				return err
			}
			if !exist {
				err := DB.Query("INSERT INTO ComponentPermission(IDComponent, IDUserType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)",
					s.ID, p.IDUserType, s.IDInsertUser, s.IDEditUser)
				if err != nil {
					logs.Save("page", "Update", "Error adding Permission: "+p.Description, logs.Error, err.Error())
					return err
				}
			}
		} else if !p.Enabled {
			err := DB.Query("DELETE FROM ComponentPermission WHERE IDComponent = ? AND IDUserType = ?",
				s.ID, p.IDUserType)
			if err != nil {
				logs.Save("page", "Update", "Error deleteing Permission: "+p.Description, logs.Error, err.Error())
				return err
			}
		}
	}
	return nil
}

//Delete a component
func Delete(id int64) error {
	return DB.Delete("component", id)
}
