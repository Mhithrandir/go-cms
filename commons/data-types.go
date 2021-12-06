package commons

import "time"

type FunctionResponse int8

const (
	Options      FunctionResponse = 0
	UnAuthorized FunctionResponse = 1
	Error        FunctionResponse = 2
	Yes          FunctionResponse = 99
)

//AuthorizationToken struct to handle Authorization Token (must be saved by the front end application in the cookies or in browser memory)
type AuthorizationToken struct {
	Name    string `json:"Name"`
	Value   string `json:"Value"`
	Expires time.Time
}

type Package struct {
	Data      interface{} `json:"Data"`
	Page      int         `json:"Page"`
	PageCount int         `json:"PageCount"`
}
