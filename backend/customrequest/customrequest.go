package customrequest

import (
	"encoding/json"
	"errors"
	"go-cms/config"
	"go-cms/database"
	"go-cms/logs"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
)

// Parse parse a request from server
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
	for i := range vett {
		vett[i] = strings.ToLower(vett[i])
	}

	if vett[0] == "api" {
		//if first parameter is api it means to invoke the api part of the code
		a.Package = vett[1]
		a.Type = "Api"
		if len(vett) > 2 {
			a.Func = vett[2]
		} else {
			//if there is no func it an error
			return a, errors.New("the url is malformed: no func specified")
		}
	} else {
		//if first parameter is not be nor api it means to invoke the front end
		a.Package = "Page"
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
			a.Parameters[vett[0]] = strings.ReplaceAll(vett[1], "%20", " ")
		} else {
			a.Parameters[vett[0]] = ""
		}
	}

	err := config.LoadConfiguration(&a.Config)
	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	if a.Request.Method == "OPTIONS" {
		return a, nil
	}

	a, err = a.CheckPermission()
	if err != nil {
		return a, err
	}

	return a, nil
}

// GetPath returns the path of the request
func (a CustomRequest) GetPath() string {
	return a.Request.URL.Path
}

// GetMethod returns the method of the request
func (a CustomRequest) GetMethod() string {
	return a.Request.Method
}

// CheckPermission check if user exist and has permission to open this route
func (a CustomRequest) CheckPermission() (CustomRequest, error) {
	a, err := a.VerifyJwsToken()
	if err != nil {
		return a, err
	}

	_, err = a.DB.GetRouteForUserType(a.Claims.IDUserType, a.Package, a.Func, a.Type, a.Request.Method)
	if err != nil {
		a.Claims.IsAuthorized = false
		return a, err
	}
	a.Claims.IsAuthorized = true
	return a, nil
}

// VerifyJwsToken Verify the JSON token
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

			usertype, err := a.DB.GetUserTypeFromDescription("Guest")
			if err != nil {
				return CustomRequest{}, err
			}

			a.Claims.IDUserType = usertype.ID
			// Cyrcular reference is not allowed, so I have to query the usertype table
			// sql, err := a.DB.GetQuery("GetUserTypeFromDescription")
			// if err != nil {
			// 	return a, err
			// }
			// reader, err := a.DB.ScanTable(sql, "Guest")
			// if err != nil {
			// 	return a, err
			// }
			// if len(reader) > 0 {
			// 	res, err := strconv.Atoi(fmt.Sprintf("%d", reader[0]["ID"]))
			// 	if err != nil {
			// 		return a, err
			// 	}
			// 	a.Claims.IDUserType = int64(res)
			// }
			// a.Claims.IDUserType = 99
			a.Claims.Username = "Guest"
			a.Claims.IsValid = true
			return a, nil
		}
	}
	claims := &Claims{}

	token, err := jwt.ParseWithClaims(cookie, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(a.Config.SecretKey), nil
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

// ParserBodyRequest read the body from post request and fill a specific struct
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

// Create a login token
func (a CustomRequest) CreateToken(user database.User) (string, error) {
	//Create the claims
	claims := Claims{
		IDUser:         user.ID,
		Username:       user.Username,
		IDUserType:     user.IDUserType,
		StandardClaims: jwt.StandardClaims{
			// ExpiresAt: expirationTime.Unix(),
		},
	}
	//Creo il token JWT con i claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)

	//Cripto il token usando la chiave segreta
	tokenString, err := token.SignedString([]byte(a.Config.SecretKey))
	if err != nil {
		logs.Save("customrequest", "CreateToken", "Error in token generation", logs.Error, err.Error())
		return "", err
	}
	return tokenString, nil

}
