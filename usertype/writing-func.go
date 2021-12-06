package usertype

import "cms/logs"

//Delete a usertype
func Delete(id int64) error {
	err := DB.Delete("UserTypes", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting usertype", logs.Error, err.Error())
		return err
	}
	/*
		When i delete a usertype I must fix all record in the database:
		- remove all routes created for this usertype
		- change all user to Guest (for default reason)
		- Delete all menu for the usertype
	*/
	err = DB.Query("DELETE FROM Routes WHERE IDUserType = ?", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting routes", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Users SET IDUserType = 99 WHERE IDUserType = ?", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error updating users", logs.Error, err.Error())
		return err
	}
	err = DB.Query("DELETE FROM Menus WHERE IDUserType = ?", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error deleting menus", logs.Error, err.Error())
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
