package database

import (
	"errors"
	"go-cms/logs"
)

// Read a single route from the database
func (db Database) GetRouteForUserType(idusertype int64, _package, _func, _type, method string) (Route, error) {
	cmd, err := db.GetQuery("GetRouteForUserType")
	if err != nil {
		return Route{}, err
	}

	reader, err := db.Reader(cmd, _package, _func, _type, method, idusertype)
	if err != nil {
		return Route{}, err
	}
	defer reader.Close()

	var result []Route
	for reader.Next() {
		var r Route
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "GetRouteForUserType", "Error scanning the record", logs.Error, err.Error())
			return Route{}, err
		}

		r.Path = r.CalculatePath()

		result = append(result, r)
	}
	if len(result) == 0 {
		return Route{}, errors.New("no route foud")
	}
	return result[0], nil
}

// Read a single route from the database
func (db Database) GetRouteFromID(id int64) (Route, error) {
	cmd, err := db.GetQuery("GetRouteFromID")
	if err != nil {
		return Route{}, err
	}

	reader, err := db.Reader(cmd, id)
	if err != nil {
		return Route{}, err
	}
	defer reader.Close()

	var result []Route
	for reader.Next() {
		var r Route
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "GetRouteFromID", "Error scanning the record", logs.Error, err.Error())
			return Route{}, err
		}

		err = db.GetRoutePermissions(&r)
		if err != nil {
			return Route{}, err
		}

		r.Path = r.CalculatePath()

		result = append(result, r)
	}
	if len(result) == 0 {
		return Route{}, errors.New("no route foud")
	}
	return result[0], nil
}

// Read a single route from the database
func (db Database) GetRoute(_package, _func string, _type RequestType, method RequestMethod) (Route, error) {
	cmd, err := db.GetQuery("GetRoute")
	if err != nil {
		return Route{}, err
	}

	reader, err := db.Reader(cmd, _package, _func, _type, method)
	if err != nil {
		return Route{}, err
	}
	defer reader.Close()

	var result []Route
	for reader.Next() {
		var r Route
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "GetRoute", "Error scanning the record", logs.Error, err.Error())
			return Route{}, err
		}

		err = db.GetRoutePermissions(&r)
		if err != nil {
			return Route{}, err
		}

		r.Path = r.CalculatePath()

		result = append(result, r)
	}
	if len(result) == 0 {
		return Route{}, errors.New("no route foud")
	}
	return result[0], nil
}

// Check if route exist
func (db Database) RouteExist(route Route) bool {
	cmd, err := db.GetQuery("RouteExist")
	if err != nil {
		return false
	}

	reader, err := db.Reader(cmd, route.Package, route.Func, route.Type, route.Method)
	if err != nil {
		return false
	}
	defer reader.Close()

	var result []Route
	for reader.Next() {
		var r Route
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "RouteExist", "Error scanning the record", logs.Error, err.Error())
			return false
		}
		result = append(result, r)
	}
	return len(result) > 0
}

// add route
func (db Database) AddRoute(route Route) error {
	cmd, err := db.GetQuery("AddRoute")
	if err != nil {
		return err
	}

	err = db.Query(cmd, route.Package, route.Func, string(route.Type), string(route.Method), route.IDInsertUser)
	if err != nil {
		return err
	}

	lastid, err := db.GetLastID("Routes")
	if err != nil {
		return err
	}

	route.ID = lastid

	for _, p := range route.Permissions {
		p.IDRoute = route.ID
		err = db.AddRoutePermission(p)
		if err != nil {
			return err
		}
	}
	// usertypes, err := db.GetUserTypes(0, -1)
	// if err != nil {
	// 	return err
	// }

	// add a routepermission for every usertypes
	// for _, u := range usertypes {
	// 	err = db.AddRoutePermission(RoutePermission{IDRoute: route.ID, IDUserType: u.ID, Enabled: false})
	// 	if err != nil {
	// 		return err
	// 	}
	// }

	return nil
}

// add route permission
func (db Database) AddRoutePermission(routepermission RoutePermission) error {
	cmd, err := db.GetQuery("AddRoutePermission")
	if err != nil {
		return err
	}

	err = db.Query(cmd, routepermission.IDRoute, routepermission.IDUserType, routepermission.Enabled, routepermission.IDInsertUser)
	if err != nil {
		return err
	}

	return nil
}

// get all routes with pagination
func (db Database) GetRoutes(page, count int) ([]Route, error) {
	cmd, err := db.GetQuery("GetRoutes")
	if err != nil {
		return nil, err
	}

	reader, err := db.Reader(cmd, page, count)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	var result []Route
	for reader.Next() {
		var r Route
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "GetRoutes", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		err = db.GetRoutePermissions(&r)
		if err != nil {
			return nil, err
		}

		r.Path = r.CalculatePath()

		result = append(result, r)
	}
	return result, nil
}

// count all records in table route
func (db Database) CountRoutes() (int64, error) {
	cmd, err := db.GetQuery("CountRoute")
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
			logs.Save("database", "CountRoutes", "Error scanning the record", logs.Error, err.Error())
			return -1, err
		}
	}
	return count, nil
}

// update a route and relative routepermissions
func (db Database) UpdateRoute(route Route) error {
	cmd, err := db.GetQuery("UpdateRoute")
	if err != nil {
		return err
	}

	err = db.Query(cmd, route.Package, route.Func, route.Type, route.Method, route.IDEditUser, route.ID)
	if err != nil {
		return err
	}
	for _, r := range route.Permissions {
		err = db.UpdateRoutePermission(r)
		if err != nil {
			return err
		}
	}

	return nil
}

// update a route
func (db Database) UpdateRoutePermission(routepermission RoutePermission) error {
	cmd, err := db.GetQuery("UpdateRoutePermission")
	if err != nil {
		return err
	}

	err = db.Query(cmd, routepermission.Enabled, routepermission.IDEditUser, routepermission.IDRoute, routepermission.IDUserType)
	if err != nil {
		return err
	}

	return nil
}

// load all routepermission for a specific route
func (db Database) GetRoutePermissions(route *Route) error {
	cmd, err := db.GetQuery("GetRoutePermissions")
	if err != nil {
		return err
	}

	reader, err := db.Reader(cmd, route.ID, -1, -1, -1)
	if err != nil {
		return err
	}
	defer reader.Close()

	for reader.Next() {
		var r RoutePermission
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "GetRoutePermissions", "Error scanning the record", logs.Error, err.Error())
			return err
		}

		route.Permissions = append(route.Permissions, r)
	}
	return nil
}

// load all routepermission for a specific route
func (db Database) ToggleRouteForUserType(route Route, idusertype int64, enabled bool) error {
	for i := 0; i < len(route.Permissions); i++ {
		if route.Permissions[i].IDUserType == idusertype {
			route.Permissions[i].Enabled = enabled
		}
	}
	return db.UpdateRoute(route)
}

func (r Route) CalculatePath() string {
	_path := ""
	if r.Type == Api {
		_path = "api/"
	}
	if r.Package != "page" {
		return _path + r.Package + "/" + r.Func
	}
	return _path + "/" + r.Func
}
