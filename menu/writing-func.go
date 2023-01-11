package menu

import "go-cms/logs"

//Add add a routes
func (m Menu) Add() error {
	err := DB.Query("AddMenu",
		m.MenuName,
		m.Name,
		m.Parent,
		m.IDRoute,
		m.Order,
		m.IDInsertUser,
		m.IDEditUser)
	if err != nil {
		logs.Save("menu", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("menu", "Add", "Added a menu item", logs.Message, m)
	// return m.UpdatePermission()
	return nil
}

//DeleteRecord a record
func DeleteRecord(id int64) error {
	return DB.Delete("Menus", id)
}

//Update a route
func (m Menu) Update() error {
	err := DB.Query("UpdateMenuMenuName", m.MenuName, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating MenuName", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateMenuName", m.Name, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateMenuParent", m.Parent, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating Parent", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateMenuOrder", m.Order, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating Order", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateMenuIDRoute", m.IDRoute, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateMenuEdit", m.IDEditUser, m.ID)
	if err != nil {
		logs.Save("menu", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}
