package forum

import "cms/logs"

//Add add a forum
func (t Topic) Add() error {
	sql, err := DB.GetQuery("AddTopic")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		t.Title,
		t.Icon,
		false,
		t.IDAuthor,
		t.IDInsertUser,
		t.IDEditUser)
	if err != nil {
		logs.Save("forum", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("forum", "Add", "Added a menu item", logs.Message, t)
	return nil
}

//Add add a forum
func (t TopicMessage) Add() error {
	sql, err := DB.GetQuery("AddTopicMessage")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		t.Message,
		t.IDParent,
		t.IDAuthor,
		t.IDInsertUser,
		t.IDEditUser)
	if err != nil {
		logs.Save("forum", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("forum", "Add", "Added a menu item", logs.Message, t)
	return nil
}

func (t Topic) Update() error {
	err := DB.Query("UPDATE Forums SET Title = ? WHERE ID = ?", t.Title, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating Title", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Forums SET Icon = ? WHERE ID = ?", t.Icon, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating Icon", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Forums SET Closed = ? WHERE ID = ?", t.Closed, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating Closed", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Forums SET IDAuthor = ? WHERE ID = ?", t.IDAuthor, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating IDAuthor", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Forums SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", t.IDEditUser, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

func (t TopicMessage) Update() error {
	err := DB.Query("UPDATE ForumMessages SET Message = ? WHERE ID = ?", t.Message, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating Message", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE ForumMessages SET IDParent = ? WHERE ID = ?", t.IDParent, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating IDParent", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE ForumMessages SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", t.IDEditUser, t.ID)
	if err != nil {
		logs.Save("forum", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}
