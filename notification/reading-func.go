package notification

import (
	"cms/commons"
	"cms/logs"
	"cms/user"
	"database/sql"
)

func LoadNotifications(iduser int64) ([]Notification, error) {
	sql, err := DB.GetQuery("GetNotifications")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE IDUser = ?", iduser)
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

func (n Notification) Exist() (bool, error) {
	sql, err := DB.GetQuery("GetNotifications")
	if err != nil {
		return false, err
	}
	reader, err := DB.Reader(sql+" WHERE IDUser = ?", n.ID)
	if err != nil {
		return false, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return false, err
	}

	return (len(results) > 0), nil
}

func read(reader *sql.Rows) ([]Notification, error) {
	var results []Notification
	for reader.Next() {
		var record Notification
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&record.Description,
			&record.IsRead,
			&record.IDUser,
			&record.ID,
			&appInsertDate,
			&record.IDInsertUser,
			&appEditDate,
			&record.IDEditUser)
		if err != nil {
			logs.Save("notification", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		record.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		record.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if err != nil {
			return nil, err
		}

		user.DB = DB
		record.User, err = user.GetUserByID(record.IDUser)
		if err != nil {
			return nil, err
		}

		results = append(results, record)
	}
	return results, nil
}
