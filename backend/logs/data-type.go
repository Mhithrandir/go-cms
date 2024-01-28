package logs

import "time"

type LogMessage struct {
	Data             time.Time `json:"Data"`
	Package          string    `json:"Package"`
	Function         string    `json:"Function"`
	Message          string    `json:"Message"`
	Info             interface{}
	Severity         MessageType `json:"Severity"`
	StackTrace       []byte
	StackTraceString string `json:"StackTrace"`
}

type MessageType int8

const (
	Message    MessageType = 0
	Warning    MessageType = 1
	Error      MessageType = 2
	FatalError MessageType = 99
)
