package commons

import (
	"cms/customrequest"
	"cms/logs"
	"crypto/md5"
	"encoding/hex"
	"io/ioutil"
	"log"
	"net/http"
	"net/mail"
	"net/smtp"
	"os"
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
func CommonLoad(request customrequest.CustomRequest) FunctionResponse {
	if request.GetMethod() == "OPTIONS" {
		return Options
	} else if !request.Claims.IsAuthorized {
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
func CreateJwsToken(username string, iduser, idusertype int64, request customrequest.CustomRequest) (string, error) {

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

	//Cripto il token usando la chiave segreta
	tokenString, err := token.SignedString([]byte(request.Config.SecretKey))
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
func SendMail(from mail.Address, to, subject, message string, request customrequest.CustomRequest) (bool, error) {

	_ = smtp.PlainAuth("", request.Config.AccountMail.Username, request.Config.AccountMail.Password, request.Config.AccountMail.SMTPServer)
	c, err := smtp.Dial(request.Config.AccountMail.SMTPServer + ":" + request.Config.AccountMail.Port)
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

//UploadFile upload a file in a specifi folder
func UploadFile(request customrequest.CustomRequest, basePath string, extensions []string) (int, string) {

	err := request.Request.ParseMultipartForm(request.Config.MaxUploadSize)
	if err != nil {
		logs.Save("commons", "UploadFile", "Error parsing multipart form data", logs.Error, err)
		return http.StatusBadRequest, "Error parsing multipart form data"
	}

	file, handler, err := request.Request.FormFile("myFile")
	if err != nil {
		logs.Save("commons", "UploadFile", "Error retrieving the File", logs.Error, err)
		return http.StatusInternalServerError, "Error retrieving the File"
	}
	defer file.Close()

	fileSize := handler.Size
	if fileSize > request.Config.MaxUploadSize {
		logs.Save("commons", "UploadFile", "File is too big", logs.Error, err)
		return http.StatusBadRequest, "File is too big"
	}

	tempFile, err := ioutil.TempFile("./www/img/temp-ftp", "tempfile")
	if err != nil {
		logs.Save("commons", "UploadFile", "Error uploading the file", logs.Error, err)
		return http.StatusInternalServerError, "Error uploading the file"
	}
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		logs.Save("commons", "UploadFile", "Error streaming the file to upload", logs.Error, err)
		return http.StatusInternalServerError, "Error streaming the file to upload"
	}

	if extensions[0] != "*" {
		detectedFileType := http.DetectContentType(fileBytes)
		var found bool = false
		for _, e := range extensions {
			if e == detectedFileType {
				found = true
				break
			}
		}
		if !found {
			logs.Save("commons", "UploadFile", "The file format is not valid", logs.Error, err)
			return http.StatusBadRequest, "The file format is not valid"
		}
	}

	//Write the temporary file
	tempFile.Write(fileBytes)
	tempFile.Close()
	//move the temporary file in the right folder
	err = os.Rename("./"+tempFile.Name(), basePath+handler.Filename)
	if err != nil {
		logs.Save("commons", "UploadFile", "Error renaming the file", logs.Error, err)
		return http.StatusInternalServerError, "Error renaming the file"
	}

	return http.StatusOK, basePath + handler.Filename
}
