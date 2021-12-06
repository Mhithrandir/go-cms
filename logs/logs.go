package logs

import (
	"encoding/json"
	"log"
	"os"
	"runtime"
	"strings"
	"time"
)

//Func to instantiate a LogMessageType
func Save(pkg, _func, message string, severity MessageType, info interface{}) {
	var mex LogMessage
	mex.Data = time.Now()
	mex.Package = pkg
	mex.Function = _func
	mex.Message = message
	mex.Severity = severity
	mex.Info = info
	mex.StackTrace = make([]byte, 5000)
	length := runtime.Stack(mex.StackTrace, false)
	mex.StackTraceString = string(mex.StackTrace[0:length])

	//Remove futile stack trace such as log.Save
	app := strings.Split(mex.StackTraceString, "\n")
	var result []string
	result = append(result, app[0])
	for i := 3; i < len(app); i++ {
		result = append(result, app[i])
	}
	mex.StackTraceString = strings.Join(result[:], "\n")

	SaveMessage(mex)
}

//save a message in the log files
func SaveMessage(mex LogMessage) {
	filename := "./log_" + time.Now().Format("02-01-2006") + ".json"
	file, err := json.MarshalIndent(mex, "", " ")

	f, err := os.OpenFile(filename, os.O_APPEND|os.O_WRONLY|os.O_CREATE, os.ModePerm)
	if err != nil {
		log.Panicln(err)
	}
	defer f.Close()
	if _, err = f.WriteString(string(file) + ","); err != nil {
		log.Panicln(err)
	}
}
