package character

import "cms/logs"

//Update a route
func (c Character) Update() error {
	err := DB.Query("UPDATE Characters SET Name = ? WHERE ID = ?", c.Name, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Characters SET Icon = ? WHERE ID = ?", c.Icon, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating Icon", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Characters SET LendFace = ? WHERE ID = ?", c.LendFace, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating LendFace", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Characters SET IDUser = ? WHERE ID = ?", c.IDUser, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating IDUser", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Characters SET Background = ? WHERE ID = ?", c.Background, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating Background", logs.Error, err.Error())
		return err
	}

	err = c.SetValues()
	if err != nil {
		return err
	}

	err = DB.Query("UPDATE Characters SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", c.IDEditUser, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

func (c CharacterValue) Update() error {
	err := DB.Query("UPDATE CharacterValues SET Value = ? WHERE ID = ?", c.Value, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating Value: "+c.Name, logs.Error, err.Error())
		return err
	}

	err = DB.Query("UPDATE CharacterValues SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", c.IDEditUser, c.ID)
	if err != nil {
		logs.Save("character", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

func (c CharacterValue) Add() error {
	sql, err := DB.GetQuery("AddCharacterValue")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		c.Name,
		c.Value,
		c.IDSheetElement,
		c.IDInsertUser,
		c.IDEditUser)
	if err != nil {
		logs.Save("character", "Add Character Value", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("character", "Add", "Added a character value", logs.Message, c)
	// return m.UpdatePermission()
	return nil
}

func (c Character) Add() error {
	sql, err := DB.GetQuery("AddCharacter")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		c.Name,
		c.Icon,
		c.LendFace,
		c.Background,
		c.IDUser,
		c.IDInsertUser,
		c.IDEditUser)
	if err != nil {
		logs.Save("character", "Add Character Value", "Error in ExecContext", logs.Error, err.Error())
		return err
	}

	err = c.SetValues()
	if err != nil {
		return err
	}

	logs.Save("character", "Add", "Added a character value", logs.Message, c)
	// return m.UpdatePermission()
	return nil
}

func (c Character) SetValues() error {
	for _, v := range c.Values {
		exist, err := v.Exist()
		if err != nil {
			return err
		}
		if exist {
			v.Update()
		} else {
			v.Add()
		}
	}
	return nil
}
