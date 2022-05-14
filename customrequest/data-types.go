package customrequest

import (
	"cms/config"
	"cms/database"
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

type CustomRequest struct {
	Writer     http.ResponseWriter `json:"Writer"`
	Request    *http.Request       `json:"Request"` //r.Method, r.URL.Path
	Parameters map[string]string   `json:"Parameters"`
	DB         *database.Database  `json:"DB"`
	Config     config.Config       `json:"Config"`
	Claims     Claims              `json:"Claims"`
	Package    string              `json:"Package"`
	Func       string              `json:"Func"`
	IsBakcEnd  bool                `json:"IsBakcEnd"`
	IsApi      bool                `json:"IsApi"`
}

//Claims struct for JWT
type Claims struct {
	IDUser       int64  `json:"IDUser"`
	Username     string `json:"Username"`
	IDUserType   int64  `json:"IDUserType"`
	IsValid      bool   `json:"IsValid"`
	IsAuthorized bool   `json:"IsAuthorized"`
	jwt.StandardClaims
}
