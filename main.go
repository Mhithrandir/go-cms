package main

import (
	"cms/component"
	"cms/config"
	"cms/customrequest"
	"cms/database"
	"cms/dbapi"
	"cms/errorpages"
	"cms/menu"
	"cms/page"
	"cms/route"
	"cms/user"
	"cms/usertype"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	//serving style css
	style := http.FileServer(http.Dir("./www/styles"))
	http.Handle("/styles/", http.StripPrefix("/styles", style))
	http.Handle("/be/styles/", http.StripPrefix("/be/styles", style))
	//serving script
	script := http.FileServer(http.Dir("./www/scripts"))
	http.Handle("/scripts/", http.StripPrefix("/scripts", script))
	http.Handle("/be/scripts/", http.StripPrefix("/be/scripts", script))
	//serving favicon...

	//handles all calling url
	http.HandleFunc("/", handler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	var _config config.Config
	err := config.LoadConfiguration(&_config)
	if err != nil {
		log.Panic(err)
	}

	db, err := database.New(_config.Database.Driver, _config.Database.Dns)
	defer db.Conn.Close()
	if err != nil {
		log.Fatal("Error initializing database: ", err.Error())
		return
	}
	request, err := customrequest.New(w, r, &db)
	if err != nil {
		errorpages.NotAccettable(request, err.Error())
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
	default:
		errorpages.NotFound(request)
		break
	}
}
