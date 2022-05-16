package equip

import "cms/logs"

//Add add a equip
func (e Equip) Add() error {
	sql, err := DB.GetQuery("AddEquip")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		e.Name,
		e.Icon,
		e.Description,
		e.Price,
		e.Size,
		e.Type.ID,
		e.IDInsertUser,
		e.IDEditUser)
	if err != nil {
		logs.Save("equip", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("equip", "Add", "Added a menu item", logs.Message, e)
	// return m.UpdatePermission()
	return nil
}

//Update a route
func (e Equip) Update() error {
	err := DB.Query("UPDATE Equip SET Name = ? WHERE ID = ?", e.Name, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET Icon = ? WHERE ID = ?", e.Icon, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Icon", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET Description = ? WHERE ID = ?", e.Description, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Description", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET Price = ? WHERE ID = ?", e.Price, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Price", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET Size = ? WHERE ID = ?", e.Size, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Size", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET Type = ? WHERE ID = ?", e.Type.ID, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Equip SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", e.IDEditUser, e.ID)
	if err != nil {
		logs.Save("equip", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

//Add add a equip
func (e EquipType) Add() error {
	sql, err := DB.GetQuery("AddEquipType")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		e.Name,
		e.IDInsertUser,
		e.IDEditUser)
	if err != nil {
		logs.Save("equip", "AddType", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("equip", "Add", "Added a menu item", logs.Message, e)
	// return m.UpdatePermission()
	return nil
}
