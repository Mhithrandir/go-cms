package main

import (
	"go-cms/config"
	"go-cms/customrequest"
	"go-cms/database"
	dbapi "go-cms/db-api"
	"go-cms/installation"
	"go-cms/menu"
	"go-cms/responses"
	"go-cms/route"
	"go-cms/user"
	"go-cms/usertype"
	"log"
	"net/http"
	"os"
)

var db database.Database

func main() {

	//Load the config
	var _config config.Config
	err := config.LoadConfiguration(&_config)
	if err != nil {
		log.Panic(err)
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

	// http.HandleFunc("/favicon.ico", faviconHandler)

	if _config.InstallationPhase == 0 {
		e := os.Remove(_config.Database.Dns)
		if e != nil {
			log.Fatal(e)
		}
	}

	//Open the database
	db, err = database.New(_config.Database.Driver, _config.Database.Dns)
	if err != nil {
		log.Panic(err)
	}
	if _config.InstallationPhase == 0 {
		//handles all calling url
		// http.HandleFunc("/", handlerInstallation)
		err = installation.Install(&db)
		if err != nil {
			log.Panic(err)
		}

		_config.InstallationPhase = 99
		err = _config.Save()
		if err != nil {
			log.Panic(err)
		}
	}

	//handles all calling url
	http.HandleFunc("/", handler)

	log.Fatal(http.ListenAndServe(_config.Port, nil))
}

// func handlerInstallation(w http.ResponseWriter, r *http.Request) {
// 	installation.Install(&db)
// }

func handler(w http.ResponseWriter, r *http.Request) {
	request, err := customrequest.New(w, r, &db)
	if err != nil {
		responses.NotAccettable(request, err.Error())
		return
	}

	if request.GetMethod() == "OPTIONS" {
		responses.Options(request)
		return
	}
	// else if !request.Claims.IsAuthorized {
	// 	logs.Save("main", "handler", "User not authorized", logs.Warning, "Package: "+request.Package+" Func:"+request.Func+" IDUserType: "+strconv.Itoa(int(request.Claims.IDUserType)))
	// 	responses.Unauthorized(request)
	// 	return
	// }

	switch request.Package {
	// case "menu":
	// 	menu.ParseRoute(request)
	case "user":
		user.ParseRoute(request)
	case "route":
		route.ParseRoute(request)
	case "usertype":
		usertype.ParseRoute(request)
	case "menu":
		menu.ParseRoute(request)
	case "dbapi":
		dbapi.ParseRoute(request)
	default:
		responses.NotFound(request)
	}
}
