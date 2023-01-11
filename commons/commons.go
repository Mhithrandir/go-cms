package commons

import (
	"bytes"
	"crypto/md5"
	"encoding/hex"
	"go-cms/customrequest"
	"go-cms/logs"
	"image"
	"image/jpeg"
	_ "image/png"
	"io"
	"io/ioutil"
	"net/http"
	"net/smtp"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/nfnt/resize"
)

// CommonLoad Generic func to be invoked before everything else
func CommonLoad(request customrequest.CustomRequest) FunctionResponse {
	if request.GetMethod() == "OPTIONS" {
		return Options
	} else if !request.Claims.IsAuthorized {
		logs.Save("commons", "CommonLoad", "User not authorized", logs.Warning, "Package: "+request.Package+" Func:"+request.Func+" IDUserType: "+strconv.Itoa(int(request.Claims.IDUserType)))
		return UnAuthorized
	}
	return Yes
}

// ParseMysqlDateTime convert datetime []byte readed from mysql database to a time type
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

// CryptPassword crypt the password with MD5
func CryptPassword(pass string) string {
	hasher := md5.New()
	hasher.Write([]byte(pass))
	return hex.EncodeToString(hasher.Sum(nil))
}

// CreateJwsToken create a jws token
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

// VerifyPassword verify if the password is valid
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

// SendMail send a mail
func SendMail(from, to, subject, message string, request customrequest.CustomRequest) (bool, error) {
	auth := smtp.PlainAuth("", request.Config.AccountMail.Username, request.Config.AccountMail.Password, request.Config.AccountMail.SMTPServer)
	var tempTo []string
	tempTo = append(tempTo, to)
	err := smtp.SendMail(request.Config.AccountMail.SMTPServer+":"+request.Config.AccountMail.Port, auth, from, tempTo, []byte(message))
	if err != nil {
		logs.Save("commons", "SendMail", "Error in Mail", logs.Error, err.Error())
		return false, err
	}
	return true, nil
}

// UploadFile upload a file in a specifi folder
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

	tempFile, err := ioutil.TempFile("./www/upload/temp-ftp", "tempfile")
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

// ResizeImageresize an image
func ResizeImage(path string, height, width uint) error {
	reader, err := os.Open(path)
	if err != nil {
		logs.Save("commons", "ResizeImage", "Error opening the file", logs.Error, err)
		return err
	}

	buf := make([]byte, 1024)
	var file []byte
	for {
		_, err := reader.Read(buf)
		if err == io.EOF {
			break
		}
		if err != nil {
			logs.Save("commons", "ResizeImage", "Error reading the file", logs.Error, err)
			return err
		}
		file = append(file, buf...)
	}

	// image, temp, err := image.Decode(bytes.NewReader(file))
	image, _, err := image.Decode(bytes.NewBuffer(file))
	if err != nil {
		logs.Save("commons", "ResizeImage", "Error decoding the file", logs.Error, err)
		return err
	}
	reader.Close()

	newImage := resize.Resize(width, height, image, resize.Lanczos3)

	//delete the origina image
	err = os.Remove(path)
	if err != nil {
		logs.Save("commons", "ResizeImage", "Error deleting the old file", logs.Error, err)
		return err
	}

	writer, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE, 0777)
	if err != nil {
		logs.Save("commons", "ResizeImage", "Error witing the new file", logs.Error, err)
		return err
	}
	err = jpeg.Encode(writer, newImage, nil)
	if err != nil {
		logs.Save("commons", "ResizeImage", "Error encoding the file", logs.Error, err)
		return err
	}
	return nil
}
