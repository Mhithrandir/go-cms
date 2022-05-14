package usertype

import "cms/logs"

//Delete a usertype
func Delete(id int64) error {
	err := DB.Delete("UserTypes", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting usertype", logs.Error, err.Error())
		return err
	}
	//Delete all menu that doesn't have any routes
	err = DB.Query("DELETE FROM Menus WHERE menus.IDRoute IN (SELECT Menus.IDRoute FROM Menus JOIN Routes ON Menus.IDRoute = Routes.ID JOIN routespermission ON routes.ID = routespermission.IDRoute WHERE routespermission.IDUserType = ?)", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error deleting menus", logs.Error, err.Error())
		return err
	}
	//remove all routes created for this usertype
	err = DB.Query("DELETE FROM Routes WHERE routes.ID IN (SELECT routespermission.IDRoute FROM routespermission JOIN routes on routes.ID = routespermission.IDRoute WHERE routespermission.IDUserType = ?)", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting routes", logs.Error, err.Error())
		return err
	}
	//change all user to Guest
	err = DB.Query("UPDATE Users SET IDUserType = 99 WHERE IDUserType = ?", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error updating users", logs.Error, err.Error())
		return err
	}
	return nil
}

//Add add a routes
func (u UserType) Add() error {
	sql, err := DB.GetQuery("AddUserType")
	if err != nil {
		return err
	}
	err = DB.Query(sql, u.Description, u.IDInsertUser, u.IDEditUser)
	if err != nil {
		logs.Save("usertype", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}
