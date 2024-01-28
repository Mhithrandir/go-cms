package installation

import "go-cms/database"

func Install(db *database.Database) error {
	err := CreateTables(db)
	if err != nil {
		return err
	}
	err = InsertStoredQueries(db)
	if err != nil {
		return err
	}

	err = db.AddUserType(database.UserType{Description: "Admin"})
	if err != nil {
		return err
	}
	err = db.AddUserType(database.UserType{Description: "User"})
	if err != nil {
		return err
	}
	err = db.AddUserType(database.UserType{Description: "Guest"})
	if err != nil {
		return err
	}

	err = AddRoutes(db)
	if err != nil {
		return err
	}

	admin, err := db.GetUserTypeFromDescription("Admin")
	if err != nil {
		return err
	}

	err = db.AddUser(database.User{Username: "admin@admin.com", Password: database.CryptPassword("admin"), PasswordDuration: 0, IDUserType: admin.ID})
	if err != nil {
		return err
	}

	err = AddMenus(db)
	if err != nil {
		return err
	}

	return nil
}

func AddMenus(db *database.Database) error {
	err := AddMenu(db, "home", database.Menu{MenuName: "MainMenu", Name: "Home", Icon: "Home", Parent: -1, IDRoute: 0, MenuOrder: 0})
	if err != nil {
		return err
	}
	err = AddMenu(db, "fakeAdmin", database.Menu{MenuName: "MainMenu", Name: "Configuration", Icon: "Configuration", Parent: -1, IDRoute: 0, MenuOrder: 0})
	if err != nil {
		return err
	}

	parents, err := db.GetMenu(1, -1, "MainMenu")
	if err != nil {
		return err
	}
	var parent database.Menu
	for _, p := range parents {
		if p.Name == "Configuration" {
			parent = p
		}
	}

	err = AddMenu(db, "routes", database.Menu{MenuName: "MainMenu", Name: "Routes", Icon: "Route", Parent: parent.ID, IDRoute: 0, MenuOrder: 0})
	if err != nil {
		return err
	}
	err = AddMenu(db, "users", database.Menu{MenuName: "MainMenu", Name: "Users", Icon: "User", Parent: parent.ID, IDRoute: 0, MenuOrder: 0})
	if err != nil {
		return err
	}
	err = AddMenu(db, "usertypes", database.Menu{MenuName: "MainMenu", Name: "Usertypes", Icon: "Usertypes", Parent: parent.ID, IDRoute: 0, MenuOrder: 10})
	if err != nil {
		return err
	}
	err = AddMenu(db, "menus", database.Menu{MenuName: "MainMenu", Name: "Menus", Icon: "Menu", Parent: parent.ID, IDRoute: 0, MenuOrder: 20})
	if err != nil {
		return err
	}
	err = AddMenu(db, "login", database.Menu{MenuName: "MainMenu", Name: "Login", Icon: "Login", Parent: -1, IDRoute: 0, MenuOrder: 90})
	if err != nil {
		return err
	}
	err = AddMenu(db, "logout", database.Menu{MenuName: "MainMenu", Name: "Logout", Icon: "Register", Parent: -1, IDRoute: 0, MenuOrder: 100})
	if err != nil {
		return err
	}
	err = AddMenu(db, "Database", database.Menu{MenuName: "MainMenu", Name: "Database", Icon: "Database", Parent: parent.ID, IDRoute: 30, MenuOrder: 0})
	if err != nil {
		return err
	}
	return nil
}

func AddMenu(db *database.Database, _func string, menu database.Menu) error {
	route, err := db.GetRoute("page", _func, database.Page, database.PAGE)
	if err != nil {
		return err
	}
	menu.IDRoute = route.ID
	err = db.AddMenu(menu)
	if err != nil {
		return err
	}
	return nil
}

func AddRoutes(db *database.Database) error {
	admin, err := db.GetUserTypeFromDescription("Admin")
	if err != nil {
		return err
	}

	user, err := db.GetUserTypeFromDescription("User")
	if err != nil {
		return err
	}

	guest, err := db.GetUserTypeFromDescription("Guest")
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "route", Func: "add", Type: database.Api, Method: database.POST}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "route", Func: "getroutes", Type: database.Api, Method: database.GET}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "route", Func: "delete", Type: database.Api, Method: database.DELETE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "route", Func: "update", Type: database.Api, Method: database.POST}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "route", Func: "check", Type: database.Api, Method: database.POST}, []int64{admin.ID, user.ID, guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "user", Func: "login", Type: database.Api, Method: database.POST}, []int64{guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "user", Func: "getusers", Type: database.Api, Method: database.GET}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "usertype", Func: "getusertypes", Type: database.Api, Method: database.GET}, []int64{admin.ID})
	if err != nil {
		return err
	}

	/// MENUS

	err = AddRoute(db, database.Route{Package: "menu", Func: "getmenus", Type: database.Api, Method: database.GET}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "menu", Func: "getmenu", Type: database.Api, Method: database.GET}, []int64{admin.ID, user.ID, guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "menu", Func: "delete", Type: database.Api, Method: database.DELETE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "menu", Func: "add", Type: database.Api, Method: database.POST}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "menu", Func: "update", Type: database.Api, Method: database.POST}, []int64{admin.ID})
	if err != nil {
		return err
	}

	/// DATABASE-API

	err = AddRoute(db, database.Route{Package: "dbapi", Func: "gettables", Type: database.Api, Method: database.GET}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "dbapi", Func: "command", Type: database.Api, Method: database.POST}, []int64{admin.ID})
	if err != nil {
		return err
	}

	/// PAGES

	err = AddRoute(db, database.Route{Package: "page", Func: "login", Type: database.Page, Method: database.PAGE}, []int64{guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "register", Type: database.Page, Method: database.PAGE}, []int64{guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "home", Type: database.Page, Method: database.PAGE}, []int64{admin.ID, user.ID, guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "routes", Type: database.Page, Method: database.PAGE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "users", Type: database.Page, Method: database.PAGE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "usertypes", Type: database.Page, Method: database.PAGE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "menus", Type: database.Page, Method: database.PAGE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "fakeAdmin", Type: database.Page, Method: database.PAGE}, []int64{admin.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "fakeUser", Type: database.Page, Method: database.PAGE}, []int64{user.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "fakeGuest", Type: database.Page, Method: database.PAGE}, []int64{guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "fakeAdminUser", Type: database.Page, Method: database.PAGE}, []int64{admin.ID, user.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "fakeAll", Type: database.Page, Method: database.PAGE}, []int64{admin.ID, user.ID, guest.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "logout", Type: database.Page, Method: database.PAGE}, []int64{admin.ID, user.ID})
	if err != nil {
		return err
	}

	err = AddRoute(db, database.Route{Package: "page", Func: "Database", Type: database.Page, Method: database.PAGE}, []int64{admin.ID, user.ID})
	if err != nil {
		return err
	}

	return nil
}

func AddRoute(db *database.Database, route database.Route, usertypes []int64) error {
	err := db.AddRoute(route)
	if err != nil {
		return err
	}

	route, err = db.GetRoute(route.Package, route.Func, route.Type, route.Method)
	if err != nil {
		return err
	}

	for _, u := range usertypes {
		err = db.ToggleRouteForUserType(route, u, true)
		if err != nil {
			return err
		}
	}
	return nil
}
