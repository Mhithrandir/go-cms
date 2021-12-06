package errorpages

import (
	"cms/commons"
	"cms/config"
	"cms/customrequest"
	"encoding/json"
	"html/template"
	"log"
	"net/http"
)

//LoadTemplate load specific template
func LoadTemplate(path ...string) (*template.Template, error) {
	comm := template.New("template")
	comm, err := template.ParseFiles(path...)
	if err != nil {
		return nil, err
	}
	return comm, err
}

//SetApiHeaders set headers for allowing ajax call
func SetApiHeaders(request customrequest.CustomRequest, status int, value interface{}) {
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

//NotFound print the not found page (error code 400)
func NotFound(request customrequest.CustomRequest) {
	if request.IsApi {
		SetApiHeaders(request, http.StatusNotFound, nil)
		return
	}
	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)
	result, err := LoadTemplate("./www/templates/errors/404.htm")
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
	err = result.Execute(request.Writer, nil)
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
}

//NotAccettable print the not found page (error code 406)
func NotAccettable(request customrequest.CustomRequest, errorMessage string) {
	if request.IsApi {
		SetApiHeaders(request, http.StatusNotAcceptable, errorMessage)
		return
	}
	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)
	result, err := LoadTemplate("./www/templates/errors/406.htm")
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
	err = result.Execute(request.Writer, errorMessage)
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
}

//InternalServerError print the internal server error page (error code 500)
func InternalServerError(request customrequest.CustomRequest, errorMessage string) {
	if request.IsApi {
		SetApiHeaders(request, http.StatusInternalServerError, errorMessage)
		return
	}
	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)
	result, err := LoadTemplate("./www/templates/errors/500.htm")
	if err != nil {
		// commons.InternalServerError(request, err)
		return
	}
	err = result.Execute(request.Writer, errorMessage)
	if err != nil {
		// commons.InternalServerError(request, err)
		return
	}
}

//Unauthorized print the not found page (error code 401)
func Unauthorized(request customrequest.CustomRequest) {
	if request.IsApi {
		SetApiHeaders(request, http.StatusUnauthorized, nil)
		return
	}
	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)
	result, err := LoadTemplate("./www/templates/errors/401.htm")
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
	err = result.Execute(request.Writer, nil)
	if err != nil {
		InternalServerError(request, err.Error())
		return
	}
}

//BadRequest print the internal server error page (error code 400)
func BadRequest(request customrequest.CustomRequest, errorMessage string) {
	if request.IsApi {
		SetApiHeaders(request, http.StatusBadRequest, errorMessage)
		return
	}
	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)
	result, err := LoadTemplate("./www/templates/errors/400.htm")
	if err != nil {
		// commons.InternalServerError(request, err)
		return
	}
	err = result.Execute(request.Writer, errorMessage)
	if err != nil {
		// commons.InternalServerError(request, err)
		return
	}
}
