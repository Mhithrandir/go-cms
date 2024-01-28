package responses

import (
	"encoding/json"
	"go-cms/customrequest"
	"net/http"
)

type Package struct {
	Data      interface{} `json:"Data"`
	Page      int         `json:"Page"`
	PageCount int         `json:"PageCount"`
}

// SetApiHeaders set headers for allowing ajax call
func SetApiHeaders(request customrequest.CustomRequest, status int, value interface{}) {
	request.Writer.Header().Set("Access-Control-Allow-Origin", request.Config.Origin)
	request.Writer.Header().Set("Access-Control-Allow-Methods", request.Config.Methods)
	request.Writer.Header().Set("Access-Control-Allow-Headers", request.Config.Headers)
	request.Writer.Header().Set("Content-Type", "application/json")
	request.Writer.WriteHeader(status)
	json.NewEncoder(request.Writer).Encode(value)
}

// NotFound print the not found page (error code 400)
func NotFound(request customrequest.CustomRequest) {
	SetApiHeaders(request, http.StatusNotFound, false)
}

// NotAccettable print the not found page (error code 406)
func NotAccettable(request customrequest.CustomRequest, errorMessage string) {
	SetApiHeaders(request, http.StatusNotAcceptable, errorMessage)
}

// InternalServerError print the internal server error page (error code 500)
func InternalServerError(request customrequest.CustomRequest, errorMessage string) {
	SetApiHeaders(request, http.StatusInternalServerError, errorMessage)
}

// Unauthorized print the not found page (error code 401)
func Unauthorized(request customrequest.CustomRequest) {
	SetApiHeaders(request, http.StatusUnauthorized, false)
}

// BadRequest print the internal server error page (error code 400)
func BadRequest(request customrequest.CustomRequest, errorMessage string) {
	SetApiHeaders(request, http.StatusBadRequest, errorMessage)
}

// PasswordExpired Send custom response indicate the password is expired
func PasswordExpired(request customrequest.CustomRequest, value interface{}) {
	SetApiHeaders(request, http.StatusUnauthorized, value)
}

// Yes send ok response
func Ok(request customrequest.CustomRequest, value interface{}, page, pageCount int) {
	SetApiHeaders(request, http.StatusOK, Package{Data: value, Page: page, PageCount: pageCount})
}

// Send the options response
func Options(request customrequest.CustomRequest) {
	request.Writer.Header().Set("Access", request.Config.Methods)
	request.Writer.Header().Set("Access-Control-Allow-Origin", request.Config.Origin)
	request.Writer.Header().Set("Access-Control-Allow-Methods", request.Config.Methods)
	request.Writer.Header().Set("Access-Control-Allow-Headers", request.Config.Headers)
	request.Writer.Header().Set("Content-Type", "application/json")
	request.Writer.WriteHeader(http.StatusOK)
	json.NewEncoder(request.Writer).Encode("")
}
