package user

import (
	"cms/commons"
	"cms/customrequest"
	"cms/errorpages"
	"cms/logs"
	"strconv"
	"strings"
	"time"

	"github.com/google/uuid"
)

//ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "login":
		Login(request)
	case "register":
		Register(request)
	case "verifyuser":
		VerifyUser(request)
	case "loadusers":
		LoadUsers(request)
	case "update":
		Update(request)
	case "exist":
		CheckUserExist(request)
	case "reset":
		ResetPassword(request)
	default:
		errorpages.NotFound(request)
	}
}

//Login handle users login
func Login(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	user, err := userJSON.CheckLogin()

	if user == nil && err == nil {
		errorpages.Unauthorized(request)
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	tokenString, err := commons.CreateJwsToken(user[0].Username, user[0].ID, user[0].IDUserType, request)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	expiration := time.Now()
	expiration = expiration.Add(time.Duration(request.Config.TokenDuration * 60000000000))

	if !user[0].PasswordExpired() {
		user[0].Password = ""
		user[0].SetLoggedIn()
		commons.Ok(request, &commons.AuthorizationToken{
			Name:    "Authorization",
			Value:   tokenString,
			Expires: expiration,
		}, 0, 0)
	} else {
		code := uuid.Must(uuid.NewRandom()).String()
		user[0].CodeResetPassword = code
		err = user[0].Update()
		if err != nil {
			errorpages.BadRequest(request, err.Error())
			return
		}
		logs.Save("user", "Login", "Login with expired password", logs.Warning, user[0])
		commons.PasswordExpired(request, "{Error: \"Expired password\", Code: "+code+"}")
	}
}

//Register a new user
func Register(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if exist && err == nil {
		errorpages.BadRequest(request, "User already exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	verifiedPassword := commons.VerifyPassword(userJSON.Password, "")

	if verifiedPassword != "" {
		errorpages.BadRequest(request, "{Error: "+verifiedPassword+", Code: ''")
		return
	}

	// userJSON.IDUserType = usertype.ID
	userJSON.CodeResetPassword = uuid.Must(uuid.NewRandom()).String()
	userJSON.PasswordDuration = request.Config.PasswordDuration

	body := strings.Replace(request.Config.RegistrationBody, "$username", userJSON.Username, -1)
	body = strings.Replace(body, "$registrazione", request.Config.LinkVerifyRegistration+userJSON.CodeResetPassword, -1)
	headers := make(map[string]string)
	headers["From"] = request.Config.NoreplyMailAddress
	headers["To"] = userJSON.Username
	headers["Subject"] = request.Config.SubjectRegistration

	headers["MIME-version"] = request.Config.AccountMail.Mime
	message := ""
	for k, v := range headers {
		message += k + ": " + v + "\r\n"
	}
	message += "\r\n" + body

	// sent, err := commons.SendMail(
	// 	mail.Address{"NoReply", _config.NoreplyMailAddress},
	// 	userJSON.Username,
	// 	_config.SubjectRegistration,
	// 	message)
	// if err != nil || !sent {
	// 	errorpages.InternalServerError(request, err.Error())
	// 	return
	// }

	//if everything is ok add the user in the database
	err = userJSON.Add()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//VerifyUser verify the mail of a user
func VerifyUser(request customrequest.CustomRequest) {
	DB = request.DB

	if !request.Claims.IsAuthorized {
		errorpages.Unauthorized(request)
	}

	user, err := GetUserFromCodeResetPassword(request.Parameters["code"])
	if err != nil {
		errorpages.BadRequest(request, "User not found")
		return
	}

	user[0].CodeResetPassword = ""
	err = user[0].Update()
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}

//Reset the password in the database for a specific user
func ResetPassword(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "User not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	userJSON.CodeResetPassword = uuid.Must(uuid.NewRandom()).String()
	userJSON.PasswordDuration = request.Config.PasswordDuration

	body := strings.Replace(request.Config.RegistrationBody, "$username", userJSON.Username, -1)
	body = strings.Replace(body, "$registrazione", request.Config.LinkVerifyRegistration+userJSON.CodeResetPassword, -1)
	headers := make(map[string]string)
	headers["From"] = request.Config.NoreplyMailAddress
	headers["To"] = userJSON.Username
	headers["Subject"] = request.Config.SubjectRegistration

	headers["MIME-version"] = request.Config.AccountMail.Mime
	message := ""
	for k, v := range headers {
		message += k + ": " + v + "\r\n"
	}
	message += "\r\n" + body

	// sent, err := commons.SendMail(
	// 	mail.Address{"NoReply", _config.NoreplyMailAddress},
	// 	userJSON.Username,
	// 	_config.SubjectRegistration,
	// 	message)
	// if err != nil || !sent {
	// 	errorpages.InternalServerError(request, err.Error())
	// 	return
	// }

	//if everything is ok update the user in the database
	err = userJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}
	commons.Ok(request, true, 0, 0)
}

//CheckUserExist verify the user exist
func CheckUserExist(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	results, err := userJSON.Exist()
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	commons.Ok(request, results, 0, 0)
}

//LoadUsers load users
func LoadUsers(request customrequest.CustomRequest) {
	DB = request.DB

	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("users", "LoadUsers", "Parameter page not valid", logs.Error, err.Error())
			errorpages.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}
	result, err := GetUsers(page, request.Config.Pagination)
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	count, err := CountUser()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, result, page, int(count)/request.Config.Pagination)
}

//Update update user information
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		errorpages.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if !exist && err == nil {
		errorpages.BadRequest(request, "User not exist")
		return
	} else if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	err = userJSON.Update()
	if err != nil {
		errorpages.InternalServerError(request, err.Error())
		return
	}

	commons.Ok(request, true, 0, 0)
}
