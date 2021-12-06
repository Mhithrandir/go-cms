package page

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/menu"
	"text/template"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "home":
		home(request)
	case "login":
		login(request)
	case "logout":
		logout(request)
	case "users":
		users(request)
	case "usertypes":
		usertypes(request)
	case "routes":
		routes(request)
	case "menus":
		menus(request)
	case "db":
		db(request)
	case "register":
		register(request)
	default:
		errorpages.NotFound(request)
	}
}

//LoadTemplate load specific template
func LoadTemplate(path ...string) (*template.Template, error) {
	comm := template.New("template")
	comm, err := template.ParseFiles(path...)
	if err != nil {
		return nil, err
	}
	return comm, err
}

func common(request customrequest.CustomRequest, pathTemplate string, params map[string]interface{}) {

	//Set the database variable
	DB = request.DB

	commons.ExecuteHeader(request)
	defer commons.ExecuteFooter(request)

	//Get the template
	template, err := LoadTemplate(pathTemplate, "www/templates/components/menu-item.htm")
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	//load the main menu
	data := make(map[string]interface{})
	menu.DB = request.DB
	menuName := "MainMenuFe"
	data["Title"] = "Front End"
	if request.IsBakcEnd {
		menuName = "MainMenuBe"
		data["Title"] = "Back End"
	}
	result, err := menu.LoadMenu(menuName, request.Claims.IDUserType, -1)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	data["MainMenu"] = result
	data["User"] = request.Claims

	if params != nil {
		for k, v := range params {
			data[k] = v
		}
	}

	//Execute the template
	err = template.Execute(request.Writer, data)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
}

func home(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/home.htm", nil)
}

func login(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, false) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}
	if request.Claims.IsAuthorized && request.Claims.IDUserType < 99 {
		//It not a guest user, so it sould not enter this page
		template, err := LoadTemplate("www/templates/views/redirect.htm")
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
		//Execute the template
		err = template.Execute(request.Writer, nil)
		if err != nil {
			errorpages.InternalServerError(request, err.Error())
			return
		}
	}

	common(request, "www/templates/views/login.htm", nil)
}

func logout(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/logout.htm", nil)
}

func users(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/users.htm", nil)
}

func usertypes(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/usertypes.htm", nil)
}

func routes(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/routes.htm", nil)
}

func menus(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/menu.htm", nil)
}

func db(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/database.htm", nil)
}

func register(request customrequest.CustomRequest) {
	switch commons.CommonLoad(request, request.IsBakcEnd) {
	case commons.Options:
		return
	case commons.UnAuthorized:
		errorpages.Unauthorized(request)
		return
	case commons.Error:
		errorpages.InternalServerError(request, "Not handled yet, maybe it doesn't need it")
		return
	}

	common(request, "www/templates/views/register.htm", nil)
}
