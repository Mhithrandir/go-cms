package forum

import (
	"cms/commons"
	"cms/logs"
	"cms/user"
	"database/sql"
)

func LoadTopics() ([]Topic, error) {
	sql, err := DB.GetQuery("GetTopics")
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

func LoadTopic(id int64) ([]TopicMessage, error) {
	sql, err := DB.GetQuery("GetTopicMessages")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, id)
	if err != nil {
		return nil, err
	}
	defer reader.Close()
	results, err := readTopic(reader)
	if err != nil {
		return nil, err
	}

	return results, nil
}

//Exist check if a menupermission records alreasdy exist
func (e Topic) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM Forums WHERE Title = ?", e.Title)
	if err != nil {
		logs.Save("forum", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

//Exist check if a menupermission records alreasdy exist
func (e TopicMessage) Exist() (bool, error) {
	result, err := DB.ScanTable("SELECT * FROM ForumMessages WHERE Message = ?", e.Message)
	if err != nil {
		logs.Save("forum", "Exist", "Error selecting", logs.Error, err.Error())
		return false, err
	}
	return (len(result) > 0), nil
}

func read(reader *sql.Rows) ([]Topic, error) {
	var results []Topic
	for reader.Next() {
		var record Topic
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Title,
			&record.Icon,
			&record.Closed,
			&record.IDAuthor,
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

		user.DB = DB
		record.Author, err = user.GetUserByID(record.IDAuthor)
		if err != nil {
			return nil, err
		}

		results = append(results, record)
	}
	return results, nil
}

func readTopic(reader *sql.Rows) ([]TopicMessage, error) {
	var results []TopicMessage
	for reader.Next() {
		var record TopicMessage
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Message,
			&record.IDParent,
			&record.IDAuthor,
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

		user.DB = DB
		record.Author, err = user.GetUserByID(record.IDAuthor)
		if err != nil {
			return nil, err
		}

		results = append(results, record)
	}
	return results, nil
}
