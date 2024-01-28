package config

//Config struct to hadle file config
type Config struct {
	Database struct {
		Driver string `json:"Driver"`
		Dns    string `json:"Dns"`
	}
	SecretKey              string            `json:"SecretKey"`
	InstallationPhase      InstallationPhase `json:"InstallationPhase"`
	Pagination             int               `json:"Pagination"`
	PasswordDuration       int               `json:"PasswordDuration"`
	Port                   string            `json:"Port"`
	IsNil                  bool
	Origin                 string `json:"Origin"`
	Methods                string `json:"Methods"`
	Headers                string `json:"Headers"`
	TokenDuration          int64  `json:"TokenDuration"`
	RegistrationBody       string `json:"RegistrationBody"`
	SubjectRegistration    string `json:"SubjectRegistration"`
	LinkVerifyRegistration string `json:"LinkVerifyRegistration"`
	NoreplyMailAddress     string `json:"NoreplyMailAddress"`
	MaxUploadSize          int64  `json:"MaxUploadSize"`
	SiteUrl                string `json:"SiteUrl"`
	AccountMail            struct {
		Username   string `json:"Username"`
		Password   string `json:"Password"`
		SMTPServer string `json:"SMTPServer"`
		Mime       string `json:"Mime"`
		Port       string `json:"Port"`
	}
}

//InstallationPhase Custom type for enum
type InstallationPhase int8

//const Enum for installation phases
const (
	DefineDatabase    InstallationPhase = 0
	CreateBasicTables                   = 1
	RegisterAdmin                       = 2
	Completed                           = 99
)

//ServerData struct for connectione data
type ServerData struct {
	Dns          string `json:"Dns"`
	DatabaseType string `json:"DatabaseType"`
}
