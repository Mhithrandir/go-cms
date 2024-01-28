package user

import (
	"database/sql"
	"go-cms/customrequest"
	"go-cms/database"
	"go-cms/logs"
	"go-cms/responses"
	"strconv"
	"strings"
	"time"

	"github.com/google/uuid"
)

// ParseRoute handle the func specified in the apirequest
func ParseRoute(request customrequest.CustomRequest) {
	switch request.Func {
	case "login":
		Login(request)
	case "register":
		Register(request)
	case "verifyuser":
		VerifyUser(request)
	case "getusers":
		GetUsers(request)
	case "update":
		Update(request)
	case "exist":
		CheckUserExist(request)
	case "reset":
		ResetPassword(request)
	default:
		responses.NotFound(request)
	}
}

// Login handle users login
func Login(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	valid, err := request.DB.CheckLogin(userJSON)
	if !valid && err == nil {
		responses.Unauthorized(request)
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	if !userJSON.PasswordExpired() {
		token, err := request.CreateToken(userJSON)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		userJSON.LastLogin = database.DateTime{DatabaseValue: time.Now().Format("2006-01-02 15:04:05.999999999"), ParsedValue: time.Now(), IsNil: false}
		err = request.DB.UpdateUser(userJSON)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		responses.Ok(request, &token, 0, 0)
	} else {
		code := uuid.Must(uuid.NewRandom()).String()
		userJSON.CodeResetPassword = sql.NullString{String: code, Valid: true}
		err = request.DB.UpdateUser(userJSON)
		if err != nil {
			responses.BadRequest(request, err.Error())
			return
		}
		logs.Save("user", "Login", "Login with expired password", logs.Warning, userJSON)
		responses.PasswordExpired(request, "{ \"Error\": \"Expired password\", \"Code\": \""+code+"\" }")
	}
}

// Register a new user
func Register(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		logs.Save("user", "Register", "Errore parsing body", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)
	if err == nil {
		responses.BadRequest(request, "User already exist")
		return
	}

	// userJSON.IDUserType = usertype.ID
	userJSON.CodeResetPassword = sql.NullString{String: uuid.Must(uuid.NewRandom()).String(), Valid: true}
	userJSON.PasswordDuration = request.Config.PasswordDuration

	body := strings.Replace(request.Config.RegistrationBody, "$username", userJSON.Username, -1)
	body = strings.Replace(body, "$registrationCode", request.Config.LinkVerifyRegistration+userJSON.CodeResetPassword.String, -1)
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

	// send a mail for verification
	// sent, err := commons.SendMail(
	// 	request.Config.NoreplyMailAddress,
	// 	userJSON.Username,
	// 	request.Config.SubjectRegistration,
	// 	message, request)
	// if err != nil || !sent {
	// 	responses.InternalServerError(request, err.Error())
	// 	return
	// }

	//For default a new user is just a User
	userType, err := request.DB.GetUserTypeFromDescription("User")
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	userJSON.IDUserType = userType.ID
	userJSON.Password = database.CryptPassword(userJSON.Password)
	err = request.DB.AddUser(userJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// VerifyUser verify the mail of a user
func VerifyUser(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)
	if err != nil {
		responses.BadRequest(request, "User doesn't exist")
		return
	}

	userJSON.PasswordDuration = request.Config.PasswordDuration
	err = request.DB.UpdateUser(userJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	token, err := request.CreateToken(userJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, &token, 0, 0)
}

// Reset the password in the database for a specific user
func ResetPassword(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)
	if err != nil {
		responses.BadRequest(request, "User doesn't exist")
		return
	}

	userJSON.CodeResetPassword = sql.NullString{String: uuid.Must(uuid.NewRandom()).String(), Valid: true}
	userJSON.PasswordDuration = request.Config.PasswordDuration

	body := strings.Replace(request.Config.RegistrationBody, "$username", userJSON.Username, -1)
	body = strings.Replace(body, "$registrazione", request.Config.LinkVerifyRegistration+userJSON.CodeResetPassword.String, -1)
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
	err = request.DB.UpdateUser(userJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

// CheckUserExist verify the user exist
func CheckUserExist(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)

	responses.Ok(request, err != nil, 0, 0)
}

// LoadUsers load users
func GetUsers(request customrequest.CustomRequest) {
	var page int
	var err error
	if val, ok := request.Parameters["page"]; ok {
		page, err = strconv.Atoi(val)
		if err != nil {
			logs.Save("users", "LoadUsers", "Parameter page not valid", logs.Error, err.Error())
			responses.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}
	result, err := request.DB.GetUsers(page, request.Config.Pagination)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	count, err := request.DB.CountUsers()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, page, int(count)/request.Config.Pagination)
}

// Update update user information
func Update(request customrequest.CustomRequest) {
	var userJSON database.User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	userJSON, err = request.DB.GetUser(userJSON.Username)
	if err != nil {
		responses.BadRequest(request, "User doesn't exist")
		return
	}

	userJSON.Password = database.CryptPassword(userJSON.Password)
	err = request.DB.UpdateUser(userJSON)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}
