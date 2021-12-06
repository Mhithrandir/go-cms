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

//NotAccettable respond with the 406 error
func NotAccettable(request customrequest.CustomRequest, value interface{}) {
	SetHeaders(request, http.StatusNotAcceptable, value)
}

//BadRequest respond with the 400 error
func BadRequest(request customrequest.CustomRequest, value interface{}) {
	SetHeaders(request, http.StatusBadRequest, value)
}

//InternalServerError respond with the 500 error
func InternalServerError(request customrequest.CustomRequest, value interface{}) {
	SetHeaders(request, http.StatusInternalServerError, value)
}

//MethodNotAllowed respond with the 405 error
func MethodNotAllowed(request customrequest.CustomRequest) {
	SetHeaders(request, http.StatusMethodNotAllowed, nil)
}

//Unauthorized respond with the 401 error
func Unauthorized(request customrequest.CustomRequest) {
	SetHeaders(request, http.StatusUnauthorized, nil)
}

//NotFound respond with the 404 error
func NotFound(request customrequest.CustomRequest) {
	SetHeaders(request, http.StatusNotFound, nil)
}
