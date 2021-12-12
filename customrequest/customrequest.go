package customrequest

import (
	"cms/config"
	"cms/database"
	"cms/logs"
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

//Parse parse a request from server
func New(w http.ResponseWriter, r *http.Request, db *database.Database) (CustomRequest, error) {
	parametri := strings.Split(r.URL.RawQuery, "&")
	var a CustomRequest
	a.Writer = w
	a.Request = r
	a.DB = db
	a.Parameters = make(map[string]string)

	vett := strings.Split(r.URL.Path, "/")

	//The firs item is always empty string
	appSlice := make([]string, 0)
	appSlice = append(appSlice, vett[1:]...)
	vett = appSlice

	//lower case to all parameters
	for i, _ := range vett {
		vett[i] = strings.ToLower(vett[i])
	}

	if vett[0] == "api" {
		//if first parameter is api it means to invoke the api part of the code
		a.Package = vett[1]
		a.IsApi = true
		if len(vett) > 2 {
			a.Func = vett[2]
		} else {
			//if there is no func it an error
			return a, errors.New("The url is malformed: no func specified")
		}
	} else if vett[0] == "be" {
		//if first parameter is be it means to invoke the backend (front end and backend can have same func)
		a.Package = "page"
		if len(vett) > 1 && vett[1] != "" {
			a.Func = vett[1]
		} else {
			//if there is no func returns the homepage
			a.Func = "home"
		}
		a.IsBakcEnd = true
	} else {
		//if first parameter is not be nor api it means to invoke the front end
		a.Package = "page"
		if vett[0] != "" {
			a.Func = vett[0]
		} else {
			//if there is no func returns the homepage
			a.Func = "home"
		}
	}
	//Process the GET parameter you can find in the URL
	for _, key := range parametri {
		vett = strings.Split(key, "=")
		if len(vett) == 2 {
			a.Parameters[vett[0]] = vett[1]
		} else {
			a.Parameters[vett[0]] = ""
		}
	}

	//Check the authorization if exist
	a, err := a.CheckPermission()
	if err != nil {
		return a, err
	}
	return a, nil
}

//GetPath returns the path of the request
func (a CustomRequest) GetPath() string {
	return a.Request.URL.Path
}

//GetMethod returns the method of the request
func (a CustomRequest) GetMethod() string {
	return a.Request.Method
}

//CheckPermission check if user exist and has permission to open this route
func (a CustomRequest) CheckPermission() (CustomRequest, error) {
	a, err := a.VerifyJwsToken()
	if err != nil {
		return a, err
	}

	sql, err := a.DB.GetQuery("CheckRoute")
	if err != nil {
		return a, err
	}

	_type := "fe"
	if a.IsApi {
		_type = "api"
	}
	if a.IsBakcEnd {
		_type = "be"
	}

	results, err := a.DB.ScanTable(sql, a.Claims.IDUserType, a.Package, a.Func, _type, a.Request.Method)
	if err != nil {
		return a, err
	}
	a.Claims.IsAuthorized = (len(results) > 0)

	return a, nil
}

//VerifyJwsToken Verify the JSON token
func (a CustomRequest) VerifyJwsToken() (CustomRequest, error) {
	//Saved in the header from a angular or other javascript application
	cookie := a.Request.Header.Get("Authorization")
	if cookie == "" {
		//saved in the cookie from a traditional web application
		c := a.Request.Cookies()
		if len(c) > 0 && c[0].Name == "Authorization" {
			cookie = c[0].Value
		} else {
			//get cookie for guest
			a.Claims.IDUser = -1
			a.Claims.IDUserType = 99
			a.Claims.Username = "Guest"
			a.Claims.IsValid = true
			return a, nil
		}
	}
	claims := &Claims{}

	var _config config.Config
	err := config.LoadConfiguration(&_config)

	if err != nil {
		logs.Save("customrequest", "VerifyJwsToken", "Error loading config", logs.Error, err.Error())
		return a, err
	}

	token, err := jwt.ParseWithClaims(cookie, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(_config.SecretKey), nil
	})
	if err != nil || !token.Valid {
		logs.Save("customrequest", "VerifyJwsToken", "Error parsing JSON token", logs.Error, err.Error())
		return a, err
	} else {
		claims.IsValid = true
	}
	a.Claims = *claims
	return a, nil
}

//ParserBodyRequest read the body from post request and fill a specific struct
func (a CustomRequest) ParserBodyRequest(value interface{}) error {
	body, err := ioutil.ReadAll(a.Request.Body)
	if err != nil {
		logs.Save("customrequest", "ReadBody", "Error reading body request", logs.Error, err.Error())
		return err
	}
	err = json.Unmarshal(body, value)
	if err != nil {
		logs.Save("customrequest", "ParserBodyRequest", "Error parsing json", logs.Error, err.Error())
		return err
	}
	return nil
}
