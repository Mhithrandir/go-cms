package user

import (
	"go-desk/commons"
	"go-desk/customrequest"
	"go-desk/logs"
	"go-desk/responses"
	"go-desk/usertype"
	"strconv"
	"strings"

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
	case "verifyusercode":
		VerifyUserCode(request)
	case "loadusers":
		LoadUsers(request)
	case "getusersbyusertype":
		LoadUsersByUsertype(request)
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

//Login handle users login
func Login(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	user, err := userJSON.CheckLogin()

	if user == nil && err == nil {
		responses.Unauthorized(request)
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	if !user[0].PasswordExpired() {
		token, err := CreateToken(user[0], request)
		if err != nil {
			responses.InternalServerError(request, err.Error())
			return
		}
		user[0].Password = ""
		user[0].SetLoggedIn()
		responses.Ok(request, &token, 0, 0)
	} else {
		code := uuid.Must(uuid.NewRandom()).String()
		user[0].CodeResetPassword = code
		err = user[0].Update()
		if err != nil {
			responses.BadRequest(request, err.Error())
			return
		}
		logs.Save("user", "Login", "Login with expired password", logs.Warning, user[0])
		responses.PasswordExpired(request, "{ \"Error\": \"Expired password\", \"Code\": \""+code+"\" }")
	}
}

//Register a new user
func Register(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		logs.Save("user", "Register", "Errore parsing body", logs.Error, err.Error())
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if exist && err == nil {
		logs.Save("user", "Register", "User already exist", logs.Error, err.Error())
		responses.BadRequest(request, "User already exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	verifiedPassword := commons.VerifyPassword(userJSON.Password, "")

	if verifiedPassword != "" {
		logs.Save("user", "Register", verifiedPassword, logs.Error, err.Error())
		responses.BadRequest(request, "{Error: "+verifiedPassword+", Code: ''")
		return
	}

	// userJSON.IDUserType = usertype.ID
	userJSON.CodeResetPassword = uuid.Must(uuid.NewRandom()).String()
	userJSON.PasswordDuration = request.Config.PasswordDuration

	body := strings.Replace(request.Config.RegistrationBody, "$username", userJSON.Username, -1)
	body = strings.Replace(body, "$registrationCode", request.Config.LinkVerifyRegistration+userJSON.CodeResetPassword, -1)
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

	sent, err := commons.SendMail(
		request.Config.NoreplyMailAddress,
		userJSON.Username,
		request.Config.SubjectRegistration,
		message, request)
	if err != nil || !sent {
		responses.InternalServerError(request, err.Error())
		return
	}

	//For default a new user is just a User
	usertype.DB = DB
	userType, err := usertype.GetUserTypeFromDescription("User")
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	userJSON.IDUserType = userType.ID

	//if everything is ok add the user in the database
	err = userJSON.Add()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//VerifyUser verify the mail of a user
func VerifyUser(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if !exist && err == nil {
		responses.BadRequest(request, "User doesn't exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	userReset, err := GetUserFromCodeResetPassword(userJSON.CodeResetPassword)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	} else if userJSON.CodeResetPassword == "" || len(userReset) == 0 || userJSON.Username != userReset[0].Username {
		responses.BadRequest(request, "Code reset password is invalid")
		return
	}
	userReset[0].PasswordDuration = request.Config.PasswordDuration
	err = userReset[0].Update()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	token, err := CreateToken(userReset[0], request)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, &token, 0, 0)
}

//Verify the user code when user click on email
func VerifyUserCode(request customrequest.CustomRequest) {
	DB = request.DB

	code, ok := request.Parameters["code"]
	if !ok {
		responses.BadRequest(request, "Code not valid")
		return
	}
	fountUser, err := GetUserFromCodeResetPassword(code)
	if err != nil || len(fountUser) == 0 {
		responses.BadRequest(request, "Code not valid")
		return
	}
	fountUser[0].CodeResetPassword = ""
	err = fountUser[0].Update()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}

//Reset the password in the database for a specific user
func ResetPassword(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if !exist && err == nil {
		responses.BadRequest(request, "User doesn't exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
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
		responses.InternalServerError(request, err.Error())
		return
	}
	responses.Ok(request, true, 0, 0)
}

//CheckUserExist verify the user exist
func CheckUserExist(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	results, err := userJSON.Exist()
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	responses.Ok(request, results, 0, 0)
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
			responses.BadRequest(request, err.Error())
			return
		}
	} else {
		page = 0
	}
	result, err := GetUsers(page, request.Config.Pagination)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	count, err := CountUser()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, page, int(count)/request.Config.Pagination)
}

func LoadUsersByUsertype(request customrequest.CustomRequest) {
	DB = request.DB

	usertype, _ := request.Parameters["usertype"]

	result, err := GetUsersByUsertype(usertype)
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, result, 0, 0)
}

//Update update user information
func Update(request customrequest.CustomRequest) {
	DB = request.DB

	var userJSON User
	err := request.ParserBodyRequest(&userJSON)
	if err != nil {
		responses.BadRequest(request, err.Error())
		return
	}

	exist, err := userJSON.Exist()
	if !exist && err == nil {
		responses.BadRequest(request, "User not exist")
		return
	} else if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	userJSON.Password = commons.CryptPassword(userJSON.Password)
	err = userJSON.Update()
	if err != nil {
		responses.InternalServerError(request, err.Error())
		return
	}

	responses.Ok(request, true, 0, 0)
}
