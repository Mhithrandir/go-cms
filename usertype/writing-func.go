package usertype

import "go-cms/logs"

//Delete a usertype
func Delete(id int64) error {
	err := DB.Delete("UserTypes", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting usertype", logs.Error, err.Error())
		return err
	}
	//Delete all menu that doesn't have any routes
	err = DB.Query("DelteMenuWithoutRoutes", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error deleting menus", logs.Error, err.Error())
		return err
	}
	//remove all routes created for this usertype
	err = DB.Query("DelteRoutesWithoutUserType", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error in deleting routes", logs.Error, err.Error())
		return err
	}
	//change all user to Guest
	err = DB.Query("SetGuestUserType", id)
	if err != nil {
		logs.Save("usertype", "Delete", "Error updating users", logs.Error, err.Error())
		return err
	}
	return nil
}

//Add add a routes
func (u UserType) Add() error {
	err := DB.Query("AddUserType", u.Description, u.IDInsertUser, u.IDEditUser)
	if err != nil {
		logs.Save("usertype", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}
