package user

import (
	commons "go-cmscommons"
	logs "go-cmslogs"
	"time"
)

// SetLoggedIn update last login field
func (u User) SetLoggedIn() error {
	u.LastLogin = time.Now()
	return u.Update()
}

// Update a user
func (u User) Update() error {
	err := DB.Query("UpdateUserUsername", u.Username, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating Username", logs.Error, err.Error())
		return err
	}
	if u.Password != "" {
		err = DB.Query("UpdateUserPassword", commons.CryptPassword(u.Password), u.ID)
		if err != nil {
			logs.Save("users", "Update", "Error updating Password", logs.Error, err.Error())
			return err
		}
	}
	err = DB.Query("UpdateUserPasswordDuration", u.PasswordDuration, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating PasswordDuration", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateUserIDUserType", u.IDUserType, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateUserCodeResetPassword", u.CodeResetPassword, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateUserEdit", u.IDEditUser, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

// Delete a route
func Delete(id int64) error {
	return DB.Delete("Users", id)
}

// Add add a user
func (u User) Add() error {
	err := DB.Query("AddUser",
		u.Username,
		u.Password,
		u.PasswordDuration,
		u.IDUserType,
		u.CodeResetPassword,
		u.IDInsertUser,
		u.IDEditUser)
	if err != nil {
		logs.Save("users", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("users", "Add", "Added user", logs.Message, err)
	return nil
}
