package installation

import "go-cms/database"

func InsertStoredQueries(db *database.Database) error {
	err := db.InsertStoredQuery(`AddRoute`, `INSERT INTO Routes(Package, Func, Type, Method, InsertDate, IDInsertUser)
	VALUES(?, ?, ?, ?, DateTime('now'), ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetRouteForUserType`, `SELECT
			Routes.Package,
			Routes.Func,
			Routes.Type,
			Routes.Method,
			Routes.ID,
			Routes.InsertDate,
			Routes.IDInsertUser,
			Routes.EditDate,
			Routes.IDEditUser
		FROM Routes
		INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute
		WHERE Routes.Package = ? AND Routes.Func = ? AND Routes.Type = ? AND Routes.Method = ?
		AND RoutePermissions.IDUserType = ? AND RoutePermissions.Enabled = 1
		LIMIT 1`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetRoute`, `SELECT
			Routes.Package,
			Routes.Func,
			Routes.Type,
			Routes.Method,
			Routes.ID,
			Routes.InsertDate,
			Routes.IDInsertUser,
			Routes.EditDate,
			Routes.IDEditUser
		FROM Routes
		WHERE Routes.Package = ? AND Routes.Func = ? AND Routes.Type = ? AND Routes.Method = ?
		LIMIT 1`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetRouteFromID`, `SELECT
			Routes.Package,
			Routes.Func,
			Routes.Type,
			Routes.Method,
			Routes.ID,
			Routes.InsertDate,
			Routes.IDInsertUser,
			Routes.EditDate,
			Routes.IDEditUser
		FROM Routes
		WHERE Routes.ID = ?
		LIMIT 1`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetRoutePermissions`, `SELECT
			RoutePermissions.IDRoute,
			RoutePermissions.IDUserType,
			UserTypes.Description,
			RoutePermissions.Enabled,
			UserTypes.ID,
			UserTypes.InsertDate,
			UserTypes.IDInsertUser,
			UserTypes.EditDate,
			UserTypes.IDEditUser
		FROM RoutePermissions
		INNER JOIN Routes ON RoutePermissions.IDRoute = Routes.ID
		LEFT JOIN UserTypes ON RoutePermissions.IDUserType = UserTypes.ID
		WHERE RoutePermissions.IDRoute = ? OR (Routes.Package = ? AND Routes.Func = ? AND Routes.Type = ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`UpdateRoute`, `UPDATE Routes
			SET Package = ?,
			Func = ?,
			Type = ?,
			Method = ?,
			EditDate = DateTime('now'),
			IDEditUser = ?
		WHERE ID = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`AddRoutePermission`, `INSERT INTO RoutePermissions(IDRoute, IDUserType, Enabled, InsertDate, IDInsertUser)
		VALUES(?, ?, ?, DateTime('now'), ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`UpdateRoutePermission`, `UPDATE RoutePermissions
		SET Enabled = ?, EditDate = DateTime('now'), IDEditUser = ? 
		WHERE IDRoute = ? AND IDUserType = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`RouteExist`, `SELECT
			Routes.Package,
			Routes.Func,
			Routes.Type,
			Routes.Method,
			Routes.ID,
			Routes.InsertDate,
			Routes.IDInsertUser,
			Routes.EditDate,
			Routes.IDEditUser
		FROM Routes
		WHERE Package = ? AND Func = ? AND Type = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetRoutes`, `SELECT
			Routes.Package,
			Routes.Func,
			Routes.Type,
			Routes.Method,
			Routes.ID,
			Routes.InsertDate,
			Routes.IDInsertUser,
			Routes.EditDate,
			Routes.IDEditUser
		FROM Routes
		ORDER BY Type, Package, Func
		LIMIT ?, ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`CountRoute`, `SELECT
			COUNT(*)
		FROM Routes`)
	if err != nil {
		return err
	}

	err = db.InsertStoredQuery(`AddUserTypes`, `INSERT INTO UserTypes(Description, InsertDate, IDInsertUser)
		VALUES(?, DateTime('now'), ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUserTypes`, `SELECT Description, ID, InsertDate, IDInsertUser, EditDate, IDEditUser FROM UserTypes LIMIT ?, ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUserTypeFromDescription`, `SELECT
			Description,
			ID,
			InsertDate,
			IDInsertUser,
			EditDate,
			IDEditUser
		FROM UserTypes
		WHERE Description = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUserTypeFromID`, `SELECT
			Description,
			ID,
			InsertDate,
			IDInsertUser,
			EditDate,
			IDEditUser
		FROM UserTypes
		WHERE ID = ?`)
	if err != nil {
		return err
	}

	err = db.InsertStoredQuery(`AddUser`, `INSERT INTO Users (
			Username,
			Password,
			DatePassword,
			PasswordDuration,
			IDUserType,
			InsertDate,
			IDInsertUser)
		VALUES (?, ?, DateTime('now'), -1, ?, DateTime('now'), ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`CheckLogin`, `SELECT
			Users.Username,
			Users.Password,
			Users.LastLogin,
			Users.DatePassword,
			Users.PasswordDuration,
			Users.IDUserType,
			Users.CodeResetPassword,
			Users.ID,
			Users.InsertDate,
			Users.IDInsertUser,
			Users.EditDate,
			Users.IDEditUser
		FROM Users
		WHERE Users.Username = ? AND Users.Password = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUserFromCodeResetPassword`, `SELECT
		Users.Username,
		Users.Password,
		Users.LastLogin,
		Users.DatePassword,
		Users.PasswordDuration,
		Users.IDUserType,
		Users.CodeResetPassword,
		Users.ID,
		Users.InsertDate,
		Users.IDInsertUser,
		Users.EditDate,
		Users.IDEditUser
		FROM Users
		WHERE Users.coderesetpassword = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUsers`, `SELECT
		Users.Username,
		Users.LastLogin,
		Users.DatePassword,
		Users.PasswordDuration,
		Users.IDUserType,
		Users.CodeResetPassword,
		Users.ID,
		Users.InsertDate,
		Users.IDInsertUser,
		Users.EditDate,
		Users.IDEditUser
		FROM Users
		INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID
		LIMIT ?, ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`CountUser`, `SELECT COUNT(*)
		FROM Users`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`UpdateUser`, `UPDATE Users
		SET Username = ?,
		Password = ?,
		PasswordDuration = ?,
		IDUserType = ?,
		CodeResetPassword = ?,
		EditDate = DateTime('now'),
		IDEditUser = ?
		WHERE ID = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`CountUser`, `SELECT COUNT(*)
		FROM Users
		INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetUser`, `SELECT
			Users.Username,
			Users.Password,
			Users.LastLogin,
			Users.DatePassword,
			Users.PasswordDuration,
			Users.IDUserType,
			Users.CodeResetPassword,
			Users.ID,
			Users.InsertDate,
			Users.IDInsertUser,
			Users.EditDate,
			Users.IDEditUser
		FROM Users
		WHERE Users.Username = ?`)
	if err != nil {
		return err
	}

	err = db.InsertStoredQuery(`AddMenu`, `INSERT INTO Menus(MenuName, Name, Icon, Parent, IDRoute, MenuOrder, InsertDate, IDInsertUser)
		VALUES(?, ?, ?, ?, ?, ?, DateTime('now'), ?)`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`UpdateMenu`, `UPDATE Menus
			SET MenuName = ?,
			Name = ?,
			Icon = ?,
			Parent = ?,
			IDRoute = ?,
			MenuOrder = ?,
			EditDate = DateTime('now'),
			IDEditUser = ?
		WHERE ID = ?`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetMenuNames`, `SELECT DISTINCT Menus.MenuName
		FROM Menus
		INNER JOIN Routes ON Menus.IDRoute = Routes.ID
		INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute
		WHERE RoutePermissions.IDUserType = ?
		AND RoutePermissions.Enabled = 1
		ORDER BY Menus.MenuOrder`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`GetMenu`, `SELECT DISTINCT 
			Menus.MenuName,
			Menus.Name,
			Menus.Icon,
			Menus.Parent,
			Menus.IDRoute,
			Menus.MenuOrder,
			Menus.ID,
			Menus.InsertDate,
			Menus.IDInsertUser,
			Menus.EditDate,
			Menus.IDEditUser
		FROM Menus
		INNER JOIN Routes ON Menus.IDRoute = Routes.ID
		INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute
		WHERE RoutePermissions.IDUserType = ?
		AND RoutePermissions.Enabled = 1
		AND Menus.MenuName = ?
		AND Menus.Parent = ?
		ORDER BY Menus.MenuOrder`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`CountMenu`, `SELECT COUNT(*)
		FROM Menus
		INNER JOIN Routes ON Menus.IDRoute = Routes.ID
		INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute
		WHERE RoutePermissions.IDUserType = ?
		AND RoutePermissions.Enabled = 1
		AND Menus.MenuName = ?
		AND Menus.Parent = ?
		ORDER BY Menus.MenuOrder`)
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery(`MenuExist`, `SELECT *
		FROM Menus
		WHERE MenuName = ? AND Name = ?`)
	if err != nil {
		return err
	}

	return nil
}
