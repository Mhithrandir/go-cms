package route

import (
	"cms/commons"
	"cms/logs"
	"cms/usertype"
	"database/sql"
	"sort"
)

//Exist check if routes exist
func (r Route) Exist() (bool, error) {
	sql, err := DB.GetQuery("GetRoutes")
	if err != nil {
		return false, err
	}
	reader, err := DB.Reader(sql+" WHERE package = ? AND func = ? AND Type = ?", r.Package, r.Func, r.Type)
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

//LoadRoutes return all routes in the database
func LoadRoutes(start, end int) ([]Route, error) {
	sql, err := DB.GetQuery("GetRoutes")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" ORDER BY Type, Package, Func LIMIT ?, ?", start, end)
	if err != nil {
		return nil, err
	}
	results, err := read(reader)
	if err != nil {
		return nil, err
	}
	reader.Close()

	for i, r := range results {
		results[i].Permissions, err = r.GetPermission()
		if err != nil {
			return nil, err
		}
	}

	return results, err
}

//LoadRoutes return all routes in the database
func LoadRoutesFiltered(_package, _func, _type string) ([]Route, error) {
	sql, err := DB.GetQuery("GetRoutes")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql+" WHERE Package LIKE ? AND Func LIKE ? AND type LIKE ? ORDER BY Type, Package, Func ", "%"+_package+"%", "%"+_func+"%", "%"+_type+"%")
	if err != nil {
		return nil, err
	}
	results, err := read(reader)
	if err != nil {
		return nil, err
	}
	reader.Close()

	for i, r := range results {
		results[i].Permissions, err = r.GetPermission()
		if err != nil {
			return nil, err
		}
	}

	return results, err
}

//CountRoute count all records in the table
func CountRoute() (int64, error) {
	sql, err := DB.GetQuery("CountRoute")
	if err != nil {
		return -1, err
	}
	reader, err := DB.Reader(sql)
	defer reader.Close()
	reader.Next()
	var count int64
	reader.Scan(&count)
	if err != nil {
		logs.Save("route", "CountRoute", "Error scanning the record", logs.Error, err.Error())
		return -1, err
	}
	return count, nil
}

func (r Route) GetPermission() ([]RoutePermission, error) {
	sql, err := DB.GetQuery("RoutePermissionPrinc")
	if err != nil {
		return nil, err
	}
	reader, err := DB.Reader(sql, r.ID, r.Func, r.Package, r.Type)
	if err != nil {
		return nil, err
	}
	results, err := readPermission(reader)
	reader.Close()
	if err != nil {
		return nil, err
	}
	//Insert empty permissions
	usertype.DB = DB
	usertypes, err := usertype.Load()
	if err != nil {
		return nil, err
	}

	for _, us := range usertypes {
		found := false
		for i, r := range results {
			if us.Description == r.UserType.Description {
				results[i].Enabled = true
				found = true
				break
			}
		}
		if !found {
			results = append(results, RoutePermission{IDRoute: r.ID, IDUserType: us.ID, Enabled: found, UserType: us})
		}
	}

	sort.SliceStable(results, func(i, j int) bool {
		return results[i].IDUserType < results[j].IDUserType
	})
	return results, err
}

//CheckRoute check if routes exist and has the specific permission
func (r Route) CheckRoute(iduserType int64) (bool, error) {
	sql, err := DB.GetQuery("CheckRoute")
	if err != nil {
		return false, err
	}
	results, err := DB.ScanTable(sql, iduserType, r.Package, r.Func, r.Type, r.Methods)
	if err != nil {
		return false, err
	}

	return (len(results) > 0), nil
}

func GetRoute(_package, _func, _type, _methods string) (Route, error) {
	sql, err := DB.GetQuery("GetRoute")
	if err != nil {
		return Route{}, err
	}
	reader, err := DB.Reader(sql, _package, _func, _type, _methods)
	if err != nil {
		return Route{}, err
	}
	results, err := read(reader)
	if err != nil {
		return Route{}, err
	}
	reader.Close()

	for i, r := range results {
		results[i].Permissions, err = r.GetPermission()
		if err != nil {
			return Route{}, err
		}
	}

	return results[0], err
}

func GetRouteFromID(id int64) (Route, error) {
	if id < 1 {
		var p []RoutePermission
		//Insert empty permissions
		usertype.DB = DB
		usertypes, err := usertype.Load()
		if err != nil {
			return Route{}, err
		}
		for _, us := range usertypes {
			p = append(p, RoutePermission{IDRoute: -1, IDUserType: us.ID, Enabled: false, UserType: us})
		}
		sort.SliceStable(p, func(i, j int) bool {
			return p[i].IDUserType < p[j].IDUserType
		})
		return Route{Permissions: p}, nil
	}
	sql, err := DB.GetQuery("GetRouteFromID")
	if err != nil {
		return Route{}, err
	}
	reader, err := DB.Reader(sql, id)
	if err != nil {
		return Route{}, err
	}
	results, err := read(reader)
	if err != nil {
		return Route{}, err
	}
	reader.Close()

	for i, r := range results {
		results[i].Permissions, err = r.GetPermission()
		if err != nil {
			return Route{}, err
		}
	}

	return results[0], err
}

//read read a route record from database
func read(reader *sql.Rows) ([]Route, error) {
	var rows []Route
	for reader.Next() {
		var row Route
		var appInsertDate []byte
		var appEditDate []byte
		err := reader.Scan(&row.Package,
			&row.Func,
			&row.Type,
			&row.Methods,
			&row.ID,
			&appInsertDate,
			&row.IDInsertUser,
			&appEditDate,
			&row.IDEditUser)
		if err != nil {
			logs.Save("routes", "read", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if row.Type != "*" && row.Package != "*" && row.Func != "*" {
			row.Path = "../"
			if row.Type != "fe" {
				row.Path += row.Type + "/"
			}
			if row.Package != "page" {
				row.Path += row.Package + "/"
			}
			row.Path += row.Func
		} else {
			row.Path = ""
		}

		rows = append(rows, row)
	}
	return rows, nil
}

//readPermission read all permission for a specific route item
func readPermission(reader *sql.Rows) ([]RoutePermission, error) {
	var rows []RoutePermission
	for reader.Next() {
		var row RoutePermission
		var appInsertDate []byte
		var appEditDate []byte
		//Possible null values
		var usertypeDescription sql.NullString
		var usertypeID sql.NullInt64
		var usertypeIDInsertUser sql.NullInt64
		var usertypeIDEditUser sql.NullInt64
		err := reader.Scan(&row.IDRoute,
			&row.IDUserType,
			&usertypeDescription,
			&usertypeID,
			&appInsertDate,
			&usertypeIDInsertUser,
			&appEditDate,
			&usertypeIDEditUser)
		if err != nil {
			logs.Save("routes", "readPermission", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		row.UserType.InsertDate, _ = commons.ParseMysqlDateTime(appInsertDate)
		row.UserType.EditDate, _ = commons.ParseMysqlDateTime(appEditDate)
		if usertypeDescription.Valid {
			row.UserType.Description = usertypeDescription.String
		}
		if usertypeID.Valid {
			row.UserType.ID = usertypeID.Int64
		}
		if usertypeIDInsertUser.Valid {
			row.UserType.IDInsertUser = usertypeIDInsertUser.Int64
		}
		if usertypeIDEditUser.Valid {
			row.UserType.IDEditUser = usertypeIDEditUser.Int64
		}
		row.Enabled = true
		rows = append(rows, row)
	}
	return rows, nil
}
