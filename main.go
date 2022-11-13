package main

import (
	"go-desk/commons"
	"go-desk/config"
	"go-desk/customrequest"
	"go-desk/database"
	"go-desk/logs"
	"go-desk/menu"
	"go-desk/responses"
	"go-desk/route"

	"go-desk/user"
	"go-desk/usertype"
	"log"
	"net/http"
	"strconv"
)

var db database.Database

func main() {

	//Load the config
	var _config config.Config
	err := config.LoadConfiguration(&_config)
	if err != nil {
		log.Panic(err)
	}

	// if _, err := os.Stat(_config.Database.Dns); err == nil {
	// 	os.Remove(_config.Database.Dns)
	// }
	//Open the database
	db, err = database.New(_config.Database.Driver, _config.Database.Dns)
	if err != nil {
		log.Panic(err)
	}

	if _config.InstallationPhase == 0 {
		err = InitializeDatabase()
		if err != nil {
			logs.Save("main", "InitializeDatabase", err.Error(), logs.Warning, err)
			log.Panic(err)
		}
		_config.InstallationPhase = 99
		_config.Save()
	}

	//serving style css
	style := http.FileServer(http.Dir("./www/styles"))
	http.Handle("/styles/", http.StripPrefix("/styles", style))
	//serving script
	script := http.FileServer(http.Dir("./www/scripts"))
	http.Handle("/scripts/", http.StripPrefix("/scripts", script))
	//serving img
	img := http.FileServer(http.Dir("./www/img"))
	http.Handle("/img/", http.StripPrefix("/img", img))
	http.HandleFunc("/favicon.ico", faviconHandler)

	//handles all calling url
	http.HandleFunc("/", handler)

	log.Fatal(http.ListenAndServe(_config.Port, nil))
}

func faviconHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./www/img/favicon.ico")
}

func handler(w http.ResponseWriter, r *http.Request) {
	request, err := customrequest.New(w, r, &db)
	if err != nil {
		responses.NotAccettable(request, err.Error())
		return
	}
	if request.GetMethod() == "OPTIONS" {
		responses.Ok(request, true, 0, 0)
		return
	} else if !request.Claims.IsAuthorized {
		logs.Save("commons", "CommonLoad", "User not authorized", logs.Warning, "Package: "+request.Package+" Func:"+request.Func+" IDUserType: "+strconv.Itoa(int(request.Claims.IDUserType)))
		responses.Unauthorized(request)
		return
	}
	switch request.Package {
	case "menu":
		menu.ParseRoute(request)
	case "user":
		user.ParseRoute(request)
	case "route":
		route.ParseRoute(request)
	case "usertype":
		usertype.ParseRoute(request)
	}

}

func InitializeDatabase() error {

	// #region Table creation

	var standardFields []database.Field
	var fields []database.Field
	standardFields = append(standardFields, database.Field{Name: "ID", Type: "INTEGER", IsPrimary: true})
	standardFields = append(standardFields, database.Field{Name: "InsertDate", Type: "TEXT"})
	standardFields = append(standardFields, database.Field{Name: "IDInsertUser", Type: "INTEGER"})
	standardFields = append(standardFields, database.Field{Name: "EditDate", Type: "TEXT"})
	standardFields = append(standardFields, database.Field{Name: "IDEditUser", Type: "INTEGER"})
	exist, err := db.Exist("Users")

	//Create basic tables
	if err != nil {
		return err
	}
	if !exist {
		fields = append(fields, database.Field{Name: "Username", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Password", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "LastLogin", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "DatePassword", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "PasswordDuration", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "IDUserType", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "CodeResetPassword", Type: "TEXT"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("Users", fields)
		if err != nil {
			return err
		}
	}
	exist, err = db.Exist("UserTypes")
	if err != nil {
		return err
	}
	if !exist {
		fields = nil
		fields = append(fields, database.Field{Name: "Description", Type: "TEXT"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("UserTypes", fields)
		if err != nil {
			return err
		}
	}
	exist, err = db.Exist("Routes")
	if err != nil {
		return err
	}
	if !exist {
		fields = nil
		fields = append(fields, database.Field{Name: "Package", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Func", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Type", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Methods", Type: "TEXT"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("Routes", fields)
		if err != nil {
			return err
		}
	}
	exist, err = db.Exist("RoutePermissions")
	if err != nil {
		return err
	}
	if !exist {
		fields = nil
		fields = append(fields, database.Field{Name: "IDRoute", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "IDUserType", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "Enabled", Type: "BIT"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("RoutePermissions", fields)
		if err != nil {
			return err
		}
	}
	exist, err = db.Exist("Menus")
	if err != nil {
		return err
	}
	if !exist {
		fields = nil
		fields = append(fields, database.Field{Name: "MenuName", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Name", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Parent", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "IDRoute", Type: "INTEGER"})
		fields = append(fields, database.Field{Name: "MenuOrder", Type: "INTEGER"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("Menus", fields)
		if err != nil {
			return err
		}
	}
	exist, err = db.Exist("StoredQueries")
	if err != nil {
		return err
	}
	if !exist {
		fields = nil
		fields = append(fields, database.Field{Name: "Name", Type: "TEXT"})
		fields = append(fields, database.Field{Name: "Command", Type: "TEXT"})
		fields = append(fields, standardFields...)
		err = db.CreateTable("StoredQueries", fields)
		if err != nil {
			return err
		}
	}

	// #endregion

	// #region Common stored queryes

	err = db.InsertStoredQuery("AddUserType", "INSERT INTO UserTypes(Description, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, DateTime('now'), ?, DateTime('now'), ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("LoadUserType", "SELECT Description, ID, InsertDate, IDInsertUser, EditDate, IDEditUser FROM UserTypes")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetUserTypeFromDescription", "SELECT Description, ID, InsertDate, IDInsertUser, EditDate, IDEditUser FROM UserTypes WHERE Description = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("AddUser", "INSERT INTO Users (Username, Password, LastLogin, DatePassword, PasswordDuration, IDUserType, CodeResetPassword, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES (?, ?, DateTime('now'), DateTime('now'), ?, ?, ?, DateTime('now'), ?, DateTime('now'), ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("AddRoute", "INSERT INTO Routes(Package, Func, Type, Methods, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, DateTime('now'), ?, DateTime('now'), ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetRoute", "SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute LEFT JOIN UserTypes ON RoutePermissions.IDUserType = UserTypes.ID WHERE Routes.Package = ? AND Routes.Func = ? AND Routes.Type = ? AND Routes.Methods LIKE ? LIMIT 1")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetRoutePermission", "SELECT RoutePermissions.IDRoute, RoutePermissions.IDUserType, UserTypes.Description, RoutePermissions.Enabled, UserTypes.ID, UserTypes.InsertDate, UserTypes.IDInsertUser, UserTypes.EditDate, UserTypes.IDEditUser FROM RoutePermissions INNER JOIN Routes ON RoutePermissions.IDRoute = Routes.ID LEFT JOIN UserTypes ON RoutePermissions.IDUserType = UserTypes.ID WHERE RoutePermissions.IDRoute = ? OR ((Routes.Package = ? OR Routes.Package = '*') AND (Routes.Func = ? OR Routes.Func = '*') AND (Routes.Type = ? OR Routes.Type = '*'))")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRoutePackage", "UPDATE Routes SET Package = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRouteFunc", "UPDATE Routes SET Func = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRouteType", "UPDATE Routes SET Type = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRouteMethod", "UPDATE Routes SET Methods = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRouteEdit", "UPDATE Routes SET EditDate = DateTime('now'), IDEditUser = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("AddRoutePermissions", "INSERT INTO RoutePermissions(IDRoute, IDUserType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, DateTime('now'), ?, DateTime('now'), ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("DeleteRoutePermissions", "DELETE FROM RoutePermissions WHERE IDRoute = ? AND IDUserType = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateRoutePermissions", "UPDATE RoutePermissions SET Enabled = ? WHERE IDRoute = ? AND IDUserType = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("RouteExist", "SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes WHERE package = ? AND func = ? AND Type = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("LoadRoutes", "SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes ORDER BY Type, Package, Func LIMIT ?, ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("LoadRoutesFiltered", "SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes WHERE Package LIKE ? OR Func LIKE ? OR type LIKE ? ORDER BY Type, Package, Func")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CountRoute", "SELECT COUNT(*) as Conteggio FROM Routes")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CheckRoute", "SELECT Routes.Package, Routes.Func FROM Routes INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute INNER JOIN UserTypes ON RoutePermissions.IDUserType = UserTypes.ID WHERE RoutePermissions.IDUserType = ? AND Routes.Package = ? AND Routes.Func = ? AND Routes.Type = ? AND Routes.Methods LIKE ? LIMIT 1")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetRouteFromID", "SELECT Routes.Package, Routes.Func, Routes.Type, Routes.Methods, Routes.ID, Routes.InsertDate, Routes.IDInsertUser, Routes.EditDate, Routes.IDEditUser FROM Routes LEFT JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute LEFT JOIN UserTypes ON RoutePermissions.IDUserType = UserTypes.ID WHERE Routes.ID = ? LIMIT 1")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CheckLogin", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID WHERE Users.Username = ? AND Users.Password = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetUserFromCodeResetPassword", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID WHERE Users.coderesetpassword = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetUsers", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID LIMIT ?, ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetUsersByUsertype", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID WHERE UserTypes.Description = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetUserByID", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID WHERE Users.ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CheckUsername", "SELECT Users.Username, Users.Password, Users.LastLogin, Users.DatePassword, Users.PasswordDuration, Users.IDUserType, UserTypes.Description AS UserTypeDescription, UserTypes.ID AS UserTypeID, UserTypes.InsertDate AS UserTypeInsertDate, UserTypes.IDInsertUser AS UserTypeInsertUser, UserTypes.EditDate AS UserTypeEditDate, UserTypes.IDEditUser AS UserTypeEditUser, Users.CodeResetPassword, Users.ID, Users.InsertDate, Users.IDInsertUser, Users.EditDate, Users.IDEditUser FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID WHERE Users.Username = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CountUser", "SELECT COUNT(*) as Conteggio FROM Users INNER JOIN UserTypes ON Users.IDUserType = UserTypes.ID")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserUsername", "UPDATE Users SET Username = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserPassword", "UPDATE users SET Password = ?, DatePassword = DateTime('now') WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserPasswordDuration", "UPDATE users SET PasswordDuration = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserIDUserType", "UPDATE users SET IDUserType = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserCodeResetPassword", "UPDATE users SET CodeResetPassword = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateUserEdit", "UPDATE Users SET EditDate = DateTime('now'), IDEditUser = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("DelteMenuWithoutRoutes", "DELETE FROM Menus WHERE Menus.IDRoute IN (SELECT Menus.IDRoute FROM Menus JOIN Routes ON Menus.IDRoute = Routes.ID JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute WHERE RoutePermissions.IDUserType = ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("DelteRoutesWithoutUserType", "DELETE FROM Routes WHERE Routes.ID IN (SELECT RoutePermissions.IDRoute FROM RoutePermissions JOIN Routes on Routes.ID = RoutePermissions.IDRoute WHERE RoutePermissions.IDUserType = ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("SetGuestUserType", "UPDATE Users SET IDUserType = (SELECT ID FROM UserTypes WHERE Description = 'Guest') WHERE IDUserType = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetMenu", "SELECT DISTINCT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDROute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus INNER JOIN Routes ON Menus.IDRoute = Routes.ID INNER JOIN RoutePermissions ON Routes.ID = RoutePermissions.IDRoute WHERE RoutePermissions.IDUserType = ? AND RoutePermissions.Enabled = 1 AND Menus.MenuName = ? AND Menus.Parent = ? ORDER BY Menus.MenuOrder")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetMenuNames", "")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetMenuPlain", "SELECT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDRoute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus LIMIT ?, ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("CountMenuPlain", "SELECT COUNT(*) as Conteggio FROM Menus")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("MenuExist", "SELECT * FROM Menus WHERE MenuName = ? AND Name = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetMenuFromID", "SELECT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDRoute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus WHERE Menus.ID = ? LIMIT 1")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("AddMenu", "INSERT INTO Menus(MenuName, Name, Parent, IDRoute, MenuOrder, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, ?, ?, ?, DateTime('now'), ?, DateTime('now'), ?)")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateMenuMenuName", "UPDATE Menus SET MenuName = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateMenuName", "UPDATE Menus SET Name = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateMenuParent", "UPDATE Menus SET Parent = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateOrder", "UPDATE Menus SET MenuOrder = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateMenuIDRoute", "UPDATE Menus SET IDRoute = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("UpdateMenuEdit", "UPDATE Menus SET EditDate = DateTime('now'), IDEditUser = ? WHERE ID = ?")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("AddAllRoutePermission", "INSERT INTO RoutePermissions(IDRoute, IDUserType, Enabled, InsertDate, IDInsertUser, EditDate, IDEditUser)	SELECT ?, ID, 0, DateTime('now'), 0, DateTime('now'), 0 FROM UserTypes")
	if err != nil {
		return err
	}
	err = db.InsertStoredQuery("GetMenuFromName", "SELECT Menus.MenuName, Menus.Name, Menus.Parent, Menus.IDRoute, Menus.MenuOrder, Menus.ID, Menus.InsertDate, Menus.IDInsertUser, Menus.EditDate, Menus.IDEditUser FROM Menus WHERE Menus.MenuName = ? AND Menus.Name = ? LIMIT 1")
	if err != nil {
		return err
	}

	// #endregion

	// #region Common Users

	//Admin user type
	var uType usertype.UserType
	usertype.DB = &db
	uType.Description = "Admin"
	err = uType.Add()
	if err != nil {
		return err
	}

	//User user type
	uType.Description = "User"
	err = uType.Add()
	if err != nil {
		return err
	}

	//Guest user type
	uType.Description = "Guest"
	err = uType.Add()
	if err != nil {
		return err
	}

	uType, err = usertype.GetUserTypeFromDescription("Admin")
	if err != nil {
		return err
	}

	//Admin user
	var admin user.User
	user.DB = &db
	admin.Username = "admin@admin.com"
	admin.Password = commons.CryptPassword("admin")
	admin.IDUserType = uType.ID
	err = admin.Add()
	if err != nil {
		return err
	}

	// #endregion

	// #region Routes

	var r route.Route
	route.DB = &db

	// Menu

	r.Package = ""
	r.Func = "menus"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "getmenu"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for _, p := range r.Permissions {
		p.Enabled = true
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "getplainmenu"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "getmenunames"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "delete"
	r.Type = route.Api
	r.Method = route.DELETE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "add"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "menu"
	r.Func = "update"
	r.Type = route.Api
	r.Method = route.UPDATE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	// Route

	r.Package = ""
	r.Func = "routes"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "add"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "getroutes"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "getroutesfiltered"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "delete"
	r.Type = route.Api
	r.Method = route.DELETE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "update"
	r.Type = route.Api
	r.Method = route.UPDATE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "route"
	r.Func = "check"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		r.Permissions[i].Enabled = true
	}
	err = r.Update()
	if err != nil {
		return err
	}

	// User

	r.Package = ""
	r.Func = "users"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = ""
	r.Func = "login"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "login"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = ""
	r.Type = route.Page
	r.Func = "register"
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Func = "register"
	r.Package = "user"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "verifyuser"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		r.Permissions[i].Enabled = true
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "loadusers"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "getusersbyusertype"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "update"
	r.Type = route.Api
	r.Method = route.UPDATE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "exist"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "reset"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "user"
	r.Func = "verifyusercode"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Guest" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	// UserType

	r.Package = ""
	r.Func = "usertypes"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "usertype"
	r.Func = "getusertypes"
	r.Type = route.Api
	r.Method = route.GET
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "usertype"
	r.Func = "delete"
	r.Type = route.Api
	r.Method = route.DELETE
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	r.Package = "usertype"
	r.Func = "add"
	r.Type = route.Api
	r.Method = route.POST
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		if r.Permissions[i].UserType.Description == "Admin" {
			r.Permissions[i].Enabled = true
		}
	}
	err = r.Update()
	if err != nil {
		return err
	}

	//Fake route

	r.Package = "fake"
	r.Func = ""
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		r.Permissions[i].Enabled = true
	}
	err = r.Update()
	if err != nil {
		return err
	}

	// Special route to handle homepage
	r.Package = ""
	r.Func = "home"
	r.Type = route.Page
	r.Method = route.Null
	err = r.Add()
	if err != nil {
		return err
	}
	r, err = route.GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}
	for i := 0; i < len(r.Permissions); i++ {
		r.Permissions[i].Enabled = true
	}
	err = r.Update()
	if err != nil {
		return err
	}

func Automatic(db database.Database) error {
	// file, err := os.Open("./config.json")
	// defer fils.Close()
	// if err != nil {
	// 	logs.Save("config", "LoadConfiguration", "Error loading the config", logs.Error, err.Error())
	// 	return err
	// }
	file, err := os.ReadFile("C:/Users/mhith/Downloads/LandMap.csv")
	if err != nil {
		logs.Save("config", "LoadConfiguration", "Error loading the config", logs.Error, err.Error())
		return err
	}
	content := string(file)

	vett := strings.Split(content, "\n")
	var tbl [][]string

	for _, v := range vett {
		var tempRow []string
		row := strings.Split(v, "\",\"")
		for i, _ := range row {
			row[i] = strings.ReplaceAll(row[i], "\"", "")
		}
		tempRow = append(tempRow, row...)
		tbl = append(tbl, tempRow)
	}

	for _, r := range tbl {

		resp, err := http.Get("http://161.97.91.212:8080" + r[1])
		if err != nil {
			return err
		}

		// Create the file
		out, err := os.Create("www" + r[1])
		if err != nil {
			return err
		}

		// Write the body to file
		_, err = io.Copy(out, resp.Body)
		if err != nil {
			return err
		}
		resp.Body.Close()
		out.Close()

		var eq location.Location
		eq.Name = r[0]
		eq.Image = "." + r[1]
		temp, err := strconv.Atoi(r[2])
		if err != nil {
			return err
		}
		eq.X = int64(temp)
		temp, err = strconv.Atoi(r[3])
		if err != nil {
			return err
		}
		eq.Y = int64(temp)
		eq.Description = r[4]
		eq.HasChat, err = strconv.ParseBool(r[5])
		if err != nil {
			return err
		}

		eq.IDInsertUser = 1
		eq.IDEditUser = 1
		location.DB = &db
		err = eq.Add()

		// temp, err = strconv.Atoi(r[6])
		if err != nil {
			return err
		}
		// eq.IDParent = int64(temp)

		// fmt.Println(r[1])
	}

	return nil

}
