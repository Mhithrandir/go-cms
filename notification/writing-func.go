package notification

import "cms/logs"

func (n Notification) Add() error {
	sql, err := DB.GetQuery("AddNotification")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		n.Description,
		n.IsRead,
		n.IDUser,
		n.IDInsertUser,
		n.IDEditUser)
	if err != nil {
		logs.Save("notification", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}

func (n Notification) Update() error {
	err := DB.Query("UPDATE Locations SET Description = ? WHERE ID = ?", n.Description, n.ID)
	if err != nil {
		logs.Save("notification", "Update", "Error updating Description", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET IsRead = ? WHERE ID = ?", n.IsRead, n.ID)
	if err != nil {
		logs.Save("notification", "Update", "Error updating IsRead", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET IDUser = ? WHERE ID = ?", n.IDUser, n.ID)
	if err != nil {
		logs.Save("notification", "Update", "Error updating IDUser", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", n.IDEditUser, n.ID)
	if err != nil {
		logs.Save("notification", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}
