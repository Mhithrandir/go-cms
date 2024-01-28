package database

import (
	"errors"
	"go-cms/logs"
	"time"
)

// Check the login
func (db Database) CheckLogin(user User) (bool, error) {
	cmd, err := db.GetQuery("CheckLogin")
	if err != nil {
		return false, err
	}

	reader, err := db.Reader(cmd, user.Username, CryptPassword(user.Password))
	if err != nil {
		return false, err
	}
	defer reader.Close()

	var result []User
	for reader.Next() {
		var u User
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "CheckLogin", "Error scanning the record", logs.Error, err.Error())
			return false, err
		}

		result = append(result, u)
	}
	return len(result) > 0, nil
}

// GetUser get a user filtered by username
func (db Database) GetUser(username string) (User, error) {
	cmd, err := db.GetQuery("GetUser")
	if err != nil {
		return User{}, err
	}

	reader, err := db.Reader(cmd, username)
	if err != nil {
		return User{}, err
	}
	defer reader.Close()

	var result []User
	for reader.Next() {
		var u User
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "GetUser", "Error scanning the record", logs.Error, err.Error())
			return User{}, err
		}

		result = append(result, u)
	}
	if len(result) == 0 {
		logs.Save("database", "GetUser", "no user found", logs.Error, nil)
		return User{}, errors.New("no user found")
	}
	return result[0], nil
}

// PasswordExpired check if user password is expired
func (u User) PasswordExpired() bool {
	//If the duration is -1 the password never expired
	if u.PasswordDuration == -1 {
		return false
	}
	// app := u.DatePassword.ParsedValue
	// app = app.ParsedValue.AddDate(0, 0, u.PasswordDuration)
	return !time.Now().Before(u.DatePassword.ParsedValue)
}

// update a route
func (db Database) UpdateUser(user User) error {
	cmd, err := db.GetQuery("UpdateUser")
	if err != nil {
		return err
	}

	err = db.Query(cmd, user.Username, user.Password, user.LastLogin.DatabaseValue, user.DatePassword.DatabaseValue, user.PasswordDuration, user.IDUserType, user.CodeResetPassword, user.ID)
	if err != nil {
		return err
	}

	return nil
}

// update a route
func (db Database) AddUser(user User) error {
	cmd, err := db.GetQuery("AddUser")
	if err != nil {
		return err
	}

	err = db.Query(cmd, user.Username, user.Password, user.IDUserType, user.IDInsertUser)
	if err != nil {
		return err
	}

	return nil
}

// GetUsers with pagination
func (db Database) GetUsers(page, count int) ([]User, error) {
	cmd, err := db.GetQuery("GetUsers")
	if err != nil {
		return nil, err
	}

	reader, err := db.Reader(cmd, page, count)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	var result []User
	for reader.Next() {
		var u User
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "GetUsers", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}

		u.UserType, err = db.GetUserTypeFromID(u.IDUserType)
		if err != nil {
			return nil, err
		}

		result = append(result, u)
	}

	return result, nil
}

// count all records in table route
func (db Database) CountUsers() (int64, error) {
	cmd, err := db.GetQuery("CountUser")
	if err != nil {
		return -1, err
	}

	reader, err := db.Reader(cmd)
	if err != nil {
		return -1, err
	}
	defer reader.Close()

	var count int64
	for reader.Next() {
		err = reader.Scan(&count)
		if err != nil {
			logs.Save("database", "CountUsers", "Error scanning the record", logs.Error, err.Error())
			return -1, err
		}
	}
	return count, nil
}
