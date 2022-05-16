package main

import (
	"cms/character"
	"cms/commons"
	"cms/component"
	"cms/config"
	"cms/customrequest"
	"cms/database"
	"cms/dbapi"
	"cms/equip"
	"cms/errorpages"
	"cms/forum"
	"cms/guild"
	"cms/location"
	"cms/logs"
	"cms/menu"
	"cms/page"
	"cms/route"
	"cms/sheetelement"
	"cms/user"
	"cms/usertype"
	"log"
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

var db database.Database

func main() {

	var _config config.Config
	err := config.LoadConfiguration(&_config)
	if err != nil {
		log.Panic(err)
	}

	db, err = database.New(_config.Database.Driver, _config.Database.Dns)

	if err != nil {
		log.Fatal("Error initializing database: ", err.Error())
		return
	}
	// defer db.Conn.Close()

	//serving style css
	style := http.FileServer(http.Dir("./www/styles"))
	http.Handle("/styles/", http.StripPrefix("/styles", style))
	http.Handle("/be/styles/", http.StripPrefix("/be/styles", style))
	//serving script
	script := http.FileServer(http.Dir("./www/scripts"))
	http.Handle("/scripts/", http.StripPrefix("/scripts", script))
	http.Handle("/be/scripts/", http.StripPrefix("/be/scripts", script))
	//serving img
	img := http.FileServer(http.Dir("./www/img"))
	http.Handle("/img/", http.StripPrefix("/img", img))
	http.Handle("/be/img/", http.StripPrefix("/be/img", img))
	//serving favicon...

	//handles all calling url
	http.HandleFunc("/", handler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {

	request, err := customrequest.New(w, r, &db)
	if err != nil {
		errorpages.NotAccettable(request, err.Error())
		return
	}
	if request.GetMethod() == "OPTIONS" {
		commons.Ok(request, "", 0, 0)
		return
	} else if !request.Claims.IsAuthorized {
		logs.Save("commons", "CommonLoad", "User not authorized", logs.Warning, "Package: "+request.Package+" Func:"+request.Func+" IDUserType: "+strconv.Itoa(int(request.Claims.IDUserType)))
		errorpages.Unauthorized(request)
		return
	}

	switch request.Package {
	case "page":
		page.ParseRoute(request)
	case "user":
		user.ParseRoute(request)
	case "usertype":
		usertype.ParseRoute(request)
	case "route":
		route.ParseRoute(request)
	case "menu":
		menu.ParseRoute(request)
	case "dbapi":
		dbapi.ParseRoute(request)
	case "component":
		component.ParseRoute(request)
	case "sheetelement":
		sheetelement.ParseRoute(request)
	case "character":
		character.ParseRoute(request)
	case "equip":
		equip.ParseRoute(request)
	case "forum":
		forum.ParseRoute(request)
	case "location":
		location.ParseRoute(request)
	case "guild":
		guild.ParseRoute(request)
	case "logs":
		if request.Func == "getlogs" && request.IsApi {
			logFiles, err := logs.GetLogs()
			if err != nil {
				logs.Save("main", "handler", "Error retrieving all log files", logs.Error, nil)
				errorpages.InternalServerError(request, "Error retrieving all log files")
			}
			commons.Ok(request, logFiles, 0, 0)
		}
		if request.Func == "getlog" && request.IsApi {
			if val, ok := request.Parameters["name"]; ok {
				log, err := logs.GetLog(val)
				if err != nil {
					logs.Save("main", "handler", "Error retrieving the log file "+val, logs.Error, nil)
					errorpages.InternalServerError(request, "Error retrieving the log file "+val)
				}
				commons.Ok(request, log, 0, 0)
			} else {
				errorpages.BadRequest(request, "File not found")
			}
		}
	default:
		errorpages.NotFound(request)
	}
}
