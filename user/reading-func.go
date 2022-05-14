package user

import (
	"cms/commons"
	"cms/logs"
	"database/sql"
	"errors"
	"time"
)

//CheckLogin check the credentials in the database
func (u User) CheckLogin() ([]User, error) {
	sql, err := DB.GetQuery("UserPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE Users.Username = ? AND Users.Password = ?", u.Username, commons.CryptPassword(u.Password))
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

//PasswordExpired check if user password is expired
func (u User) PasswordExpired() bool {
	//If the duration is -1 the password never expired
	if u.PasswordDuration == -1 {
		return false
	}
	app := u.DatePassword
	app = app.AddDate(0, 0, u.PasswordDuration)
	return !time.Now().Before(app)
}

//GetUserFromCodeResetPassword get the user that has the specified code reset password
func GetUserFromCodeResetPassword(code string) ([]User, error) {
	sql, err := DB.GetQuery("UserPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE Users.coderesetpassword = ?", code)
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

//GetUsers return an array of users
func GetUsers(start, end int) ([]User, error) {
	sql, err := DB.GetQuery("UserPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" LIMIT ?, ?", start, end)
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

//GetUserByID return a user from id
func GetUserByID(id int64) (User, error) {
	sql, err := DB.GetQuery("UserPrinc")
	if err != nil {
		return User{}, err
	}
	reader, err := DB.Reader(sql+" WHERE Users.ID = ?", id)
	if err != nil {
		return User{}, err
	}
	defer reader.Close()
	results, err := read(reader)
	if err != nil {
		return User{}, err
	}
	if len(results) == 0 {
		return User{}, errors.New("No user found for the ID: " + string(id))
	}

	return results[0], nil
}

//CheckUsername verifyu if username already exist
func CheckUsername(username string) (bool, error) {
	sql, err := DB.GetQuery("UserPrinc")
	if err != nil {
		return false, err
	}
	reader, err := DB.Reader(sql+" WHERE Users.Username = ?", username)
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

//CountUser count all records in the table
func CountUser() (int64, error) {
	sql, err := DB.GetQuery("CountUser")
	if err != nil {
		return -1, err
	}
	reader, err := DB.Reader(sql)
	defer reader.Close()
	reader.Next()
	var count int64
	reader.Scan(&count)
	if err != nil {
		logs.Save("user", "CountUser", "Error scanning the record", logs.Error, err.Error())
		return -1, err
	}
	return count, nil
}

//Exist check if user exist
func (u User) Exist() (bool, error) {
	return CheckUsername(u.Username)
}

//read Read all the record from the query
func read(reader *sql.Rows) ([]User, error) {
	var rows []User
	for reader.Next() {
		var row User
		var appLastLogin []byte
		var appDatePassword []byte
		var appInsertDate []byte
		var appEditDate []byte
		var appUserTypeInsertDate []byte
		var appUserTypeEditDate []byte
		err := reader.Scan(&row.Username,
			&row.Password,
			&appLastLogin,
			&appDatePassword,
			&row.PasswordDuration,
			&row.IDUserType,
			&row.UserType.Description,
			&row.UserType.ID,
			&appUserTypeInsertDate,
			&row.UserType.IDInsertUser,
			&appUserTypeEditDate,
			&row.UserType.IDEditUser,
			&row.CodeResetPassword,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("user", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.LastLogin, _ = commons.ParseMysqlDateTime(appLastLogin)
		row.DatePassword, _ = commons.ParseMysqlDateTime(appDatePassword)
		// dataTemp := row.DatePassword.AddDate(0, 0, row.PasswordDuration)
		row.IsPasswordExpired = row.PasswordExpired() //time.Now().After(dataTemp)
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		row.UserType.InsertDate, _ = commons.ParseMysqlDateTime(appUserTypeInsertDate)
		row.UserType.EditDate, _ = commons.ParseMysqlDateTime(appUserTypeEditDate)
		rows = append(rows, row)
	}
	return rows, nil
}
