package location

import "cms/logs"

//Add add a forum
func (t Location) Add() error {
	sql, err := DB.GetQuery("AddLocation")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		t.Name,
		t.Description,
		t.Image,
		t.X,
		t.Y,
		t.IDParent,
		t.HasChat,
		t.IDInsertUser,
		t.IDEditUser)
	if err != nil {
		logs.Save("location", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("location", "Add", "Added a menu item", logs.Message, t)
	return nil
}

func (l Location) Update() error {
	err := DB.Query("UPDATE Locations SET Name = ? WHERE ID = ?", l.Name, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET Description = ? WHERE ID = ?", l.Description, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating Description", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET Image = ? WHERE ID = ?", l.Image, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating Image", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET X = ? WHERE ID = ?", l.X, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating X", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET Y = ? WHERE ID = ?", l.Y, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating Y", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET IDParent = ? WHERE ID = ?", l.IDParent, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating IDParent", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET HasChat = ? WHERE ID = ?", l.HasChat, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating HasChat", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Locations SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", l.IDEditUser, l.ID)
	if err != nil {
		logs.Save("location", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

//Archieve the chat of a specific location chat and send to validation
func (l Location) ValidateChat(idmaster int64) error {
	sql, err := DB.GetQuery("SendChatToValidate")
	if err != nil {
		return err
	}
	err = DB.Query(sql, idmaster, l.ID, "Nuova chat da validare", 1, false, 1, 1)
	if err != nil {
		return err
	}
	return nil
}

//EmptyChat delete all message for target location chat
func (l Location) EmptyChat() error {
	sql, err := DB.GetQuery("EmptyChat")
	if err != nil {
		return err
	}
	err = DB.Query(sql, l.ID)
	if err != nil {
		return err
	}
	return nil
}

//Add add a forum
func (t ChatMessage) Add() error {
	sql, err := DB.GetQuery("AddChatMessage")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		t.Message,
		t.Archive,
		t.IDCharacter,
		t.IDLocation,
		t.IDInsertUser,
		t.IDEditUser)
	if err != nil {
		logs.Save("location", "Add chat message", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}

func (l Location) SetValidated(archive int64) error {
	sql, err := DB.GetQuery("ValidateChatMessage")
	if err != nil {
		return err
	}
	err = DB.Query(sql, l.ID, archive)
	if err != nil {
		logs.Save("location", "Add chat message", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	return nil
}
