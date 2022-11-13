package route

import "go-desk/logs"

//Add add a routes
func (r Route) Add() error {
	err := DB.Query("AddRoute",
		r.Package,
		r.Func,
		r.Type,
		r.Method,
		r.IDInsertUser,
		r.IDInsertUser)
	if err != nil {
		logs.Save("routes", "Add", "Error in ExecContext", logs.Error, err.Error())
		return err
	}
	logs.Save("routes", "Add", "Added a route", logs.Message, r)

	tempRoute, err := GetRoute(r.Package, r.Func, r.Type, r.Method)
	if err != nil {
		return err
	}

	r.ID = tempRoute.ID
	// Add all usertype
	return DB.Query("AddAllRoutePermission", r.ID)
	// return r.Update()
}

//DeleteRecord a route
func DeleteRecord(id int64) error {
	r, err := GetRouteFromID(id)
	if err != nil {
		return err
	}
	//Delete all permission so cleans the routepermission table
	for i := range r.Permissions {
		r.Permissions[i].Enabled = false
	}
	r.Update()
	return DB.Delete("routes", id)
}

//Update a route
func (r Route) Update() error {
	err := DB.Query("UpdateRoutePackage", r.Package, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Package", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateRouteFunc", r.Func, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Func", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateRouteType", r.Type, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateRouteMethod", r.Method, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating Type", logs.Error, err.Error())
		return err
	}
	err = DB.Query("UpdateRouteEdit", r.IDEditUser, r.ID)
	if err != nil {
		logs.Save("route", "Update", "Error updating EditDate", logs.Error, err.Error())
		return err
	}

	for _, p := range r.Permissions {
		err = DB.Query("UpdateRoutePermissions", p.Enabled, r.ID, p.IDUserType)
		if err != nil {
			logs.Save("routes", "Update", "Error deleteing Permission", logs.Error, err.Error())
			return err
		}
	}

	return nil
}
