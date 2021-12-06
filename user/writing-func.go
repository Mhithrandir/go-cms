package user

import (
	"cms/commons"
	"cms/logs"
	"time"
)

//SetLoggedIn update last login field
func (u User) SetLoggedIn() error {
	u.LastLogin = time.Now()
	return u.Update()
}

//Update a user
func (u User) Update() error {
	err := DB.Query("UPDATE Users SET Username = ? WHERE ID = ?", u.Username, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating Username", logs.Error, err.Error())
		return err
	}
	if u.Password != "" {
		err = DB.Query("UPDATE Users SET Password = ?, DatePassword = NOW() WHERE ID = ?", commons.CryptPassword(u.Password), u.ID)
		if err != nil {
			logs.Save("users", "Update", "Error updating Password", logs.Error, err.Error())
			return err
		}
	}
	err = DB.Query("UPDATE Users SET PasswordDuration = ? WHERE ID = ?", u.PasswordDuration, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating PasswordDuration", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Users SET IDUserType = ? WHERE ID = ?", u.IDUserType, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Users SET CodeResetPassword = ? WHERE ID = ?", u.CodeResetPassword, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating IDUserType", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Users SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", u.IDEditUser, u.ID)
	if err != nil {
		logs.Save("users", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

//Delete a route
func Delete(id int64) error {
	return DB.Delete("users", id)
}

//Add add a user
func (u User) Add() error {
	sql, err := DB.GetQuery("AddUser")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		u.Username,
		commons.CryptPassword(u.Password),
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
