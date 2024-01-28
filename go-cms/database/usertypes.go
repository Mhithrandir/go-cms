package database

import (
	"errors"
	"go-cms/logs"
)

// Get usertype by description
func (db Database) GetUserTypeFromDescription(description string) (UserType, error) {
	sql, err := db.GetQuery("GetUserTypeFromDescription")
	if err != nil {
		return UserType{}, err
	}

	reader, err := db.Reader(sql, description)
	if err != nil {
		return UserType{}, err
	}
	defer reader.Close()

	var result []UserType
	for reader.Next() {
		var u UserType
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "GetUserTypeFromDescription", "Error scanning the record", logs.Error, err.Error())
			return UserType{}, err
		}
		result = append(result, u)
	}
	if len(result) == 0 {
		return UserType{}, errors.New("no user foud")
	}
	return result[0], err
}

// Get usertype by description
func (db Database) GetUserTypeFromID(id int64) (UserType, error) {
	sql, err := db.GetQuery("GetUserTypeFromID")
	if err != nil {
		return UserType{}, err
	}

	reader, err := db.Reader(sql, id)
	if err != nil {
		return UserType{}, err
	}
	defer reader.Close()

	var result []UserType
	for reader.Next() {
		var u UserType
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "GetUserTypeFromID", "Error scanning the record", logs.Error, err.Error())
			return UserType{}, err
		}
		result = append(result, u)
	}
	if len(result) == 0 {
		return UserType{}, errors.New("no user foud")
	}
	return result[0], err
}

// get all usertypes with pagination
func (db Database) GetUserTypes(page, count int) ([]UserType, error) {
	cmd, err := db.GetQuery("GetUserTypes")
	if err != nil {
		return nil, err
	}

	reader, err := db.Reader(cmd, page, count)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	var result []UserType
	for reader.Next() {
		var u UserType
		err = reader.StructScan(&u)
		if err != nil {
			logs.Save("database", "GetUserTypes", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		result = append(result, u)
	}

	return result, nil
}

// add a usertype
func (db Database) AddUserType(usertype UserType) error {
	cmd, err := db.GetQuery("AddUserTypes")
	if err != nil {
		return err
	}

	err = db.Query(cmd, usertype.Description, usertype.IDInsertUser)
	if err != nil {
		return err
	}

	usertypeTemp, err := db.GetUserTypeFromDescription(usertype.Description)
	if err != nil {
		return err
	}
	usertype.ID = usertypeTemp.ID

	routes, err := db.GetRoutes(0, -1)
	if err != nil {
		return err
	}

	for _, r := range routes {
		err = db.AddRoutePermission(RoutePermission{IDRoute: r.ID, IDUserType: usertype.ID, Enabled: false})
		if err != nil {
			return err
		}
	}

	return nil
}
