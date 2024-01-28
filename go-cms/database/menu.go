package database

import "go-cms/logs"

func (db Database) GetMenus(idusertype int64) (map[string][]Menu, error) {
	cmd, err := db.GetQuery("GetMenuNames")
	if err != nil {
		return nil, err
	}

	reader, err := db.Reader(cmd, idusertype)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	result := make(map[string][]Menu)
	for reader.Next() {
		menuName := ""
		err = reader.Scan(&menuName)
		if err != nil {
			logs.Save("database", "GetMenus", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}
		result[menuName], err = db.GetMenu(idusertype, -1, menuName)
		if err != nil {
			return nil, err
		}
	}
	return result, nil
}

func (db Database) GetMenu(idusertype, parent int64, menuname string) ([]Menu, error) {
	cmd, err := db.GetQuery("GetMenu")
	if err != nil {
		return nil, err
	}

	reader, err := db.Reader(cmd, idusertype, menuname, parent)
	if err != nil {
		return nil, err
	}
	defer reader.Close()

	var result []Menu
	for reader.Next() {
		var menuItem Menu
		err = reader.StructScan(&menuItem)
		if err != nil {
			logs.Save("database", "GetMenu", "Error scanning the record", logs.Error, err.Error())
			return nil, err
		}

		menuItem.Childrens, err = db.GetMenu(idusertype, menuItem.ID, menuname)
		if err != nil {
			return nil, err
		}

		menuItem.Route, err = db.GetRouteFromID(menuItem.IDRoute)
		if err != nil {
			return nil, err
		}

		result = append(result, menuItem)
	}

	return result, nil
}

func (db Database) MenuExist(menu Menu) bool {
	cmd, err := db.GetQuery("MenuExist")
	if err != nil {
		return false
	}

	reader, err := db.Reader(cmd, menu.MenuName, menu.Name)
	if err != nil {
		return false
	}
	defer reader.Close()

	var result []Menu
	for reader.Next() {
		var r Menu
		err = reader.StructScan(&r)
		if err != nil {
			logs.Save("database", "MenuExist", "Error scanning the record", logs.Error, err.Error())
			return false
		}
		result = append(result, r)
	}
	return len(result) > 0
}

// add route
func (db Database) AddMenu(menu Menu) error {
	cmd, err := db.GetQuery("AddMenu")
	if err != nil {
		return err
	}

	err = db.Query(cmd, menu.MenuName, menu.Name, menu.Icon, menu.Parent, menu.IDRoute, menu.MenuOrder, menu.IDInsertUser)
	if err != nil {
		return err
	}

	return nil
}

// add route
func (db Database) UpdateMenu(menu Menu) error {
	cmd, err := db.GetQuery("UpdateMenu")
	if err != nil {
		return err
	}

	err = db.Query(cmd, menu.MenuName, menu.Name, menu.Icon, menu.Parent, menu.IDRoute, menu.MenuOrder, menu.IDEditUser, menu.ID)
	if err != nil {
		return err
	}

	return nil
}
