package route

import (
	"database/sql"
	"errors"
	"go-desk/commons"
	"go-desk/logs"
	"go-desk/usertype"
	"sort"
)

//Exist check if routes exist
func (r Route) Exist() (bool, error) {
	reader, err := DB.Reader("RouteExist", r.Package, r.Func, r.Type)
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
	reader, err := DB.Reader("LoadRoutes", start, end)
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
func LoadRoutesFiltered(filter string) ([]Route, error) {
	reader, err := DB.Reader("LoadRoutesFiltered", "%"+filter+"%", "%"+filter+"%", "%"+filter+"%")
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
	reader, err := DB.Reader("CountRoute")
	if err != nil {
		logs.Save("route", "CountRoute", "Error scanning the record", logs.Error, err.Error())
		return -1, err
	}
	defer reader.Close()
	reader.Next()
	var count int64
	reader.Scan(&count)
	return count, nil
}

func (r Route) GetPermission() ([]RoutePermission, error) {
	reader, err := DB.Reader("GetRoutePermission", r.ID, r.Func, r.Package, r.Type)
	if err != nil {
		return nil, err
	}
	results, err := readPermission(reader)
	reader.Close()
	if err != nil {
		return nil, err
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
	results, err := DB.ScanTable(sql, iduserType, r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return false, err
	}

	return (len(results) > 0), nil
}

func GetRoute(_package, _func string, _type RequestType, _method RequestMethod) (Route, error) {
	reader, err := DB.Reader("GetRoute", _package, _func, _type, _method)
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

	if len(results) == 0 {
		return Route{}, errors.New("No routes found")
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
	reader, err := DB.Reader("GetRouteFromID", id)
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
			&row.Method,
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
		if row.Package == "fake" {
			row.Path = "fake"
		} else {
			if row.Package != "" {
				row.Path = "./" + row.Package + "/" + row.Func
			} else {
				row.Path = "./" + row.Func
			}
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
			&row.Enabled,
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
		rows = append(rows, row)
	}
	return rows, nil
}
