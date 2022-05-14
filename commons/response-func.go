package commons

import (
	"cms/customrequest"
	"encoding/json"
	"net/http"
)

//SetCors set headers for allowing ajax call
func SetHeaders(request customrequest.CustomRequest, status int, value interface{}) {

	request.Writer.Header().Set("Access-Control-Allow-Origin", request.Config.Origin)
	request.Writer.Header().Set("Access-Control-Allow-Methods", request.Config.Methods)
	request.Writer.Header().Set("Access-Control-Allow-Headers", request.Config.Headers)

	// request.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	// request.Writer.Header().Set("Access-Control-Allow-Methods", "*")
	// request.Writer.Header().Set("Access-Control-Allow-Headers", "*")
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
