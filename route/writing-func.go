package route

import "cms/logs"

//Add add a routes
func (r Route) Add() error {
	sql, err := DB.GetQuery("AddRoute")
	if err != nil {
		return err
	}
	err = DB.Query(sql,
		r.Package,
		r.Func,
		r.IDInsertUser,
		r.IDInsertUser)
	if err != nil {
		logs.Save("routes", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("routes", "Add", "Added a route", logs.Message, r)

	tempRoute, err := GetRoute(r.Package, r.Func)
	if err != nil {
		return err
	}

	r.ID = tempRoute.ID
	//Run the update to save all the permissions
	r.Update()

	return nil
}

//Delete a route
func Delete(id int64) error {
	r, err := GetRouteFromID(id)
	if err != nil {
		return err
	}
	//Delete all permission so cleans the routepermission table
	for i, _ := range r.Permissions {
		r.Permissions[i].Enabled = false
	}
	r.Update()
	return DB.Delete("routes", id)
}

//Update a route
func (r Route) Update() error {
	err := DB.Query("UPDATE Routes SET Package = ? WHERE ID = ?", r.Package, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Package", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Routes SET Func = ? WHERE ID = ?", r.Func, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Func", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Routes SET Type = ? WHERE ID = ?", r.Type, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UPDATE Routes SET EditDate = NOW(), IDEditUser = ? WHERE ID = ?", r.IDEditUser, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}

	for _, p := range r.Permissions {
		if p.Enabled {
			exist, err := r.CheckRoute(p.IDUserType)
			if err != nil {
				return err
			}
			if !exist {
				err = DB.Query("INSERT INTO RoutesPermission(IDRoute, IDUserType, InsertDate, IDInsertUser, EditDate, IDEditUser) VALUES(?, ?, NOW(), ?, NOW(), ?)",
					r.ID, p.IDUserType, r.IDInsertUser, r.IDEditUser)
				if err != nil {
					logs.Save("routes", "Update", "Error adding Permission", logs.Error, err.Error())
					return err
				}
			}
		} else {
			err = DB.Query("DELETE FROM RoutesPermission WHERE IDRoute = ? AND IDUserType = ?",
				r.ID, p.IDUserType)
			if err != nil {
				logs.Save("routes", "Update", "Error deleteing Permission", logs.Error, err.Error())
				return err
			}
		}
	}

	return nil
}
