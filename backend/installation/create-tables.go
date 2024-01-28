package installation

import "go-cms/database"

func CreateTables(db *database.Database) error {
	err := db.Query(`CREATE TABLE StoredQueries(
		Name TEXT,
		Command TEXT,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}
	err = db.Query(`CREATE TABLE Routes(
		Package TEXT,
		Func TEXT,
		Type TEXT,
		Method TEXT,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}
	err = db.Query(`CREATE TABLE RoutePermissions(
		IDRoute INTEGER,
		IDUserType INTEGER,
		Enabled BIT,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}
	err = db.Query(`CREATE TABLE Users(
		Username TEXT,
		Password TEXT,
		LastLogin TEXT,
		DatePassword TEXT,
		PasswordDuration INTEGER,
		IDUserType INTEGER,
		CodeResetPassword TEXT,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}
	err = db.Query(`CREATE TABLE UserTypes(
		Description TEXT,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}
	err = db.Query(`CREATE TABLE Menus(
		MenuName TEXT,
		Name TEXT,
		Icon TEXT,
		Parent INTEGER,
		IDRoute INTEGER,
		MenuOrder INTEGER,
		ID INTEGER PRIMARY KEY,
		InsertDate TEXT,
		IDInsertUser INTEGER,
		EditDate TEXT,
		IDEditUser INTEGER)`)
	if err != nil {
		return err
	}

	return nil
}
