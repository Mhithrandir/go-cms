package menu

import "cms/logs"

//Add add a routes
func (m Menu) Add() error {
	sql, err := DB.GetQuery("AddMenu")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		m.MenuName,
		m.Name,
		m.Parent,
		m.Path,
		m.MenuOrder,
		m.IDInsertUser,
		m.IDEditUser)
	if err != nil {
		logs.Save("menu", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("menu", "Add", "Added a menu item", logs.Message, m)
	return m.UpdatePermission()
}

//UpdatePermission Update all permission in associative table, if not exist and enabled = true then create it, if enabled = false then deleted
func (m Menu) UpdatePermission() error {
	for _, p := range m.Permissions {
		if p.Enabled {
			exist, err := m.CheckMenuPermission(p.IDUserType)
			if err != nil {
				return err
			}
			if !exist {
				err := DB.Query("INSERT INTO MenuPermission(IDMenu, IDUserType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)",
					m.ID, p.IDUserType, m.IDInsertUser, m.IDEditUser)
				if err != nil {
					logs.Save("menu", "Update", "Error adding Permission: "+p.Description, logs.Error, err.Error())
					return err
				}
			}
		} else if !p.Enabled {
			err := DB.Query("DELETE FROM MenuPermission WHERE IDMenu = ? AND IDUserType = ?",
				m.ID, p.IDUserType)
			if err != nil {
				logs.Save("menu", "Update", "Error deleteing Permission: "+p.Description, logs.Error, err.Error())
				return err
			}
		}
	}
	return nil
}

//Delete a route
func Delete(id int64) error {
	return DB.Delete("menus", id)
}

//Update a route
func (m Menu) Update() error {
	err := DB.Query("UPDATE Menus SET MenuName = ? WHERE ID = ?", m.MenuName, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating MenuName", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Menus SET Name = ? WHERE ID = ?", m.Name, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Menus SET Parent = ? WHERE ID = ?", m.Parent, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating Parent", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Menus SET MenuOrder = ? WHERE ID = ?", m.MenuOrder, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating MenuOrder", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Menus SET Path = ? WHERE ID = ?", m.Path, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Menus SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", m.IDEditUser, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return m.UpdatePermission()
}
