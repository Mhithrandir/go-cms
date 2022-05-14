package guild

import "cms/logs"

func (g Guild) Add() error {
	sql, err := DB.GetQuery("AddGuild")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		g.Name,
		g.Icon,
		g.IDInsertUser,
		g.IDEditUser)
	if err != nil {
		logs.Save("forum", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("forum", "Add", "Added a menu item", logs.Message, g)
	return nil
}

func (g Guild) Update() error {
	err := DB.Query("UPDATE Guilds SET Name = ? WHERE ID = ?", g.Name, g.ID)
	if err != nil {
		logs.Save("guild", "Update", "Error updating Name", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Guilds SET Icon = ? WHERE ID = ?", g.Icon, g.ID)
	if err != nil {
		logs.Save("guild", "Update", "Error updating Icon", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Forums SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", g.IDEditUser, g.ID)
	if err != nil {
		logs.Save("guild", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}
	return nil
}

func AddMember(idcharacter, idguild int64) error {
	err := DB.Query("SELECT guildmembers.IDGuild, guildmembers.IDCharacter FROM guildmembers WHERE guildmembers.IDGuild = ? AND guildmembers.IDCharacter = ?", idguild, idcharacter)
	if err != nil {
		logs.Save("guild", "AddMember", "Error executing query", logs.Error, err.Error())
		return err
	}

	return nil
}

func RemoveMember(idcharacter, idguild int64) error {
	err := DB.Query("DELETE FROM guildmembers WHERE guildmembers.IDGuild = ? AND guildmembers.IDCharacter = ?", idguild, idcharacter)
	if err != nil {
		logs.Save("guild", "RemoveMember", "Error executing query", logs.Error, err.Error())
		return err
	}

	return nil
}
