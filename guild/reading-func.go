package guild

import (
	"cms/character"
	"cms/commons"
	"cms/logs"
	"database/sql"
)

func LoadGuilds() ([]Guild, error) {
	sql, err := DB.GetQuery("GetGuilds")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return nil, err
	}

	return results, nil
}

func (g Guild) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Guilds WHERE Name = ?", g.Name)
	if err != nil {
		logs.Save("guild", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func ChackMemeber(idcharacter, idguild int64) (bool, error) {
	result, err := DB.ScanTable("SELECT guildmembers.IDGuild, guildmembers.IDCharacter FROM guildmembers WHERE guildmembers.IDGuild = ? AND guildmembers.IDCharacter = ?", idguild, idcharacter)
	if err != nil {
		logs.Save("guild", "ChackMemeber", "Error executing query", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func read(reader *sql.Rows) ([]Guild, error) {
	var results []Guild
	for reader.Next() {
		var record Guild
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Name,
			&record.Icon,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("equip", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if err != nil {
			return nil, err
		}

		character.DB = DB
		record.Members, err = character.GetGuildCharacters(record.ID)
		if err != nil {
			return nil, err
		}

		results = append(results, record)
	}
	return results, nil
}
