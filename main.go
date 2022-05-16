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
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"

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

	// Automatic(db)

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

func Automatic(db database.Database) error {
	// file, err := os.Open("./config.json")
	// defer fils.Close()
	// if err != nil {
	// 	logs.Save("config", "LoadConfiguration", "Error loading the config", logs.Error, err.Error())
	// 	return err
	// }
	file, err := os.ReadFile("C:/Users/mhith/Downloads/LandMap.csv")
	if err != nil {
		logs.Save("config", "LoadConfiguration", "Error loading the config", logs.Error, err.Error())
		return err
	}
	content := string(file)

	vett := strings.Split(content, "\n")
	var tbl [][]string

	for _, v := range vett {
		var tempRow []string
		row := strings.Split(v, "\",\"")
		for i, _ := range row {
			row[i] = strings.ReplaceAll(row[i], "\"", "")
		}
		tempRow = append(tempRow, row...)
		tbl = append(tbl, tempRow)
	}

	for _, r := range tbl {

		resp, err := http.Get("http://161.97.91.212:8080" + r[1])
		if err != nil {
			return err
		}

		// Create the file
		out, err := os.Create("www" + r[1])
		if err != nil {
			return err
		}

		// Write the body to file
		_, err = io.Copy(out, resp.Body)
		if err != nil {
			return err
		}
		resp.Body.Close()
		out.Close()

		var eq location.Location
		eq.Name = r[0]
		eq.Image = "." + r[1]
		temp, err := strconv.Atoi(r[2])
		if err != nil {
			return err
		}
		eq.X = int64(temp)
		temp, err = strconv.Atoi(r[3])
		if err != nil {
			return err
		}
		eq.Y = int64(temp)
		eq.Description = r[4]
		eq.HasChat, err = strconv.ParseBool(r[5])
		if err != nil {
			return err
		}

		eq.IDInsertUser = 1
		eq.IDEditUser = 1
		location.DB = &db
		err = eq.Add()

		// temp, err = strconv.Atoi(r[6])
		if err != nil {
			return err
		}
		// eq.IDParent = int64(temp)

		// fmt.Println(r[1])
	}

	return nil

}
