package commons

import (
	"cms/config"
	"cms/customrequest"
	"cms/logs"
	"crypto/md5"
	"encoding/hex"
	"log"
	"net/mail"
	"net/smtp"
	"regexp"
	"strconv"
	"strings"
	"text/template"
	"time"

	"github.com/dgrijalva/jwt-go"
)

//ExecuteHeader execute the header template
func ExecuteHeader(request customrequest.CustomRequest) {
	comm := template.New("template")
	comm, err := template.ParseFiles("./www/templates/system/_header.htm")
	if err != nil {
		return
	}
	err = comm.Execute(request.Writer, nil)
	if err != nil {
		// InternalServerError(request, err)
		return
	}
}

//ExecuteFooter execute the footer template
func ExecuteFooter(request customrequest.CustomRequest) {
	comm := template.New("template")
	comm, err := template.ParseFiles("./www/templates/system/_footer.htm")
	if err != nil {
		return
	}
	err = comm.Execute(request.Writer, nil)
	if err != nil {
		// InternalServerError(request, err)
		return
	}
}

//CommonLoad Generic func to be invoked before everything else
func CommonLoad(request customrequest.CustomRequest, needAuthorization bool) FunctionResponse {
	if request.GetMethod() == "OPTIONS" {
		return Options
	} else if !request.Claims.IsAuthorized && needAuthorization {
		logs.Save("commons", "CommonLoad", "User not authorized", logs.Warning, "Package: "+request.Package+" Func:"+request.Func+" IDUserType: "+strconv.Itoa(int(request.Claims.IDUserType)))
		return UnAuthorized
	}
	return Yes
}

//ParseMysqlDateTime convert datetime []byte readed from mysql database to a time type
func ParseMysqlDateTime(dateTime []byte) (time.Time, error) {
	appString := strings.Split(string(dateTime), " ")
	if len(appString) == 2 {
		appTimeResult, err := time.Parse(time.RFC3339, appString[0]+"T"+appString[1]+"Z")
		if err != nil {
			logs.Save("commons", "ParseMysqlDateTime", "Errore parsing date", logs.Error, err.Error())
			return appTimeResult, err
		}
		return appTimeResult, nil
	}
	return time.Now(), nil
}

//CryptPassword crypt the password with MD5
func CryptPassword(pass string) string {
	hasher := md5.New()
	hasher.Write([]byte(pass))
	return hex.EncodeToString(hasher.Sum(nil))
}

//CreateJwsToken create a jws token
func CreateJwsToken(username string, iduser, idusertype int64) (string, error) {

	//Create the claims
	claims := customrequest.Claims{
		IDUser:         iduser,
		Username:       username,
		IDUserType:     idusertype,
		StandardClaims: jwt.StandardClaims{
			// ExpiresAt: expirationTime.Unix(),
		},
	}
	//Creo il token JWT con i claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &claims)

	var _config config.Config
	err := config.LoadConfiguration(&_config)

	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	//Cripto il token usando la chiave segreta
	tokenString, err := token.SignedString([]byte(_config.SecretKey))
	if err != nil {
		logs.Save("commons", "CreateJwsToken", "Error in token generation", logs.Error, err.Error())
		return "", err
	}
	return tokenString, nil
}

//VerifyPassword verify if the password is valid
func VerifyPassword(pass, passOld string) string {
	var lower = regexp.MustCompile(`[a-z]`)
	var upper = regexp.MustCompile(`[A-Z]`)
	var number = regexp.MustCompile(`[\d]`)
	// var symbol = regexp.MustCompile(`[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]`)
	if !lower.MatchString(pass) {
		return "Password not valid (no lower casae characters)"
	}
	if !upper.MatchString(pass) {
		return "Password not valid (no uppercase character)"
	}
	if !number.MatchString(pass) {
		return "Password not valid (no number)"
	}
	// if !symbol.MatchString(pass) {
	// 	logs.Salva("user", "UpdatePassword", "Password non valida (nessun simbolo)", logs.Errore, nil)
	// 	return "Password non valida (nessun simbolo)"
	// }
	if len(pass) < 8 {
		return "Password not valid (too short)"
	}
	passwordCrypt := CryptPassword(pass)
	if passwordCrypt == passOld {
		return "Password not valid (the password is the same as as the previous)"
	}
	return ""
}

//SendMail send a mail
func SendMail(from mail.Address, to, subject, message string) (bool, error) {
	var _config config.Config
	err := config.LoadConfiguration(&_config)

	if err != nil {
		log.Fatal("Error loading config: ", err)
	}

	_ = smtp.PlainAuth("", _config.AccountMail.Username, _config.AccountMail.Password, _config.AccountMail.SMTPServer)
	c, err := smtp.Dial(_config.AccountMail.SMTPServer + ":" + _config.AccountMail.Port)
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Dial", logs.Error, err.Error())
		log.Println(err)
		return false, err
	}
	defer c.Close()
	err = c.Mail(from.String())
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Mail", logs.Error, err.Error())
		return false, err
	}
	err = c.Rcpt(to)
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Rcpt", logs.Error, err.Error())
		return false, err
	}
	//???
	data, err := c.Data()
	if err != nil {
		logs.Save("commons", "SendMail", "Errore in Data", logs.Error, err.Error())
		return false, err
	}
	_, err = data.Write([]byte(message))
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Write", logs.Error, err.Error())
		return false, err
	}
	err = data.Close()
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Close", logs.Error, err.Error())
		return false, err
	}
	err = c.Quit()
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Quit", logs.Error, err.Error())
		return false, err
	}
	return true, nil
}
