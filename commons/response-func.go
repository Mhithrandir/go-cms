package commons

import (
	"cms/config"
	"cms/customrequest"
	"encoding/json"
	"log"
	"net/http"
)

//SetCors set headers for allowing ajax call
func SetHeaders(request customrequest.CustomRequest, status int, value interface{}) {
	var _config config.Config
	err := config.LoadConfiguration(&_config)

	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	request.Writer.Header().Set("Access-Control-Allow-Origin", _config.Origin)
	request.Writer.Header().Set("Access-Control-Allow-Methods", _config.Methods)
	request.Writer.Header().Set("Access-Control-Allow-Headers", _config.Headers)
	request.Writer.Header().Set("Content-Type", "application/json")
	request.Writer.WriteHeader(status)
	json.NewEncoder(request.Writer).Encode(value)
}

//Yes send ok response
func Ok(request customrequest.CustomRequest, value interface{}, page, pageCount int) {
	SetHeaders(request, http.StatusOK, Package{Data: value, Page: page, PageCount: pageCount})
}

//PasswordExpired Send custom response indicate the password is expired
func PasswordExpired(request customrequest.CustomRequest, value interface{}) {
	SetHeaders(request, http.StatusUnauthorized, value)
}
