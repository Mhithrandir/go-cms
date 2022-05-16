package sheetelement

import "cms/logs"

func (s SheetElement) Add() error {
	sql, err := DB.GetQuery("AddSheetElement")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		s.Name,
		s.Icon,
		s.Description,
		s.Min,
		s.Max,
		s.Cost,
		s.IDType,
		s.IDReferenceSheetElement,
		s.IDInsertUser,
		s.IDInsertUser)
	if err != nil {
		logs.Save("sheetelement", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("sheetelement", "Add", "Added a sheetelement", logs.Message, s)

	//Get last insert record and the update it
	temp, err := GetElementByName(s.Name)
	if err != nil {
		logs.Save("sheetelement", "Add", "Error in GetElementByName", logs.Error, err.Error())
		return err
	}

	temp.AbilitatedForSheetElement = s.AbilitatedForSheetElement

	return temp.Update()
}

func AddAbilitation(p Parent, child SheetElement) error {
	sql, err := DB.GetQuery("AddSheetElementAbilitation")
	if err != nil {
		logs.Save("sheetelement", "AddAbilitation", "Error getting the query", logs.Error, err.Error())
		return err
	}
	err = DB.Query(sql,
		p.ID,
		child.ID,
		child.IDInsertUser,
		child.IDInsertUser)
	if err != nil {
		logs.Save("sheetelement", "AddAbilitation", "Error inserting abilitation", logs.Error, err.Error())
		return err
	}
	return nil
}

//Delete a sheetelement
func DeleteRecord(id int64) error {
	return DB.Delete("sheetelements", id)
}

//Update a sheetelement
func (r SheetElement) Update() error {
	err := DB.Query("UPDATE sheetelements SET Name = ? WHERE ID = ?", r.Name, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET Description = ? WHERE ID = ?", r.Description, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Description", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET Min = ? WHERE ID = ?", r.Min, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Min", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET Max = ? WHERE ID = ?", r.Max, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Max", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET Cost = ? WHERE ID = ?", r.Cost, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Cost", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET IDType = ? WHERE ID = ?", r.IDType, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET Icon = ? WHERE ID = ?", r.Icon, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating Icon", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET IDReferenceSheetElement = ? WHERE ID = ?", r.IDReferenceSheetElement, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating IDReferenceSheetElement", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE sheetelements SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", r.IDEditUser, r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}

	//First remove all abilitation
	err = DB.Query("DELETE FROM sheetelementinclusion WHERE IDChildSheetElement = ?", r.ID)
	if err != nil {
		logs.Save("sheetelement", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}

	//the add all abilitation selected by the user
	for _, p := range r.AbilitatedForSheetElement {
		err = AddAbilitation(p, r)
		if err != nil {
			return err
		}
	}

	return nil
}
