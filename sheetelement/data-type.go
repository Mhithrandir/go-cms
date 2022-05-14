package sheetelement

import "cms/database"

//DB variables to handle database
var DB *database.Database

//SheetElement struct for the ShhetElements table
type SheetElement struct {
	Name                      string           `json:"Name"`
	Description               string           `json:"Description"`
	Icon                      string           `json:"Icon"`
	Min                       int64            `json:"Min"`
	Max                       int64            `json:"Max"`
	Cost                      int64            `json:"Cost"`
	IDType                    int64            `json:"IDType"`
	Type                      SheetElementType `json:"SheetElementType"`
	IDReferenceSheetElement   int64            `json:"IDReferenceSheetElement"`
	ReferenceSheetElement     Parent           `json:"ReferenceSheetElement"`
	AbilitatedForSheetElement []Parent         `json:"AbilitatedForSheetElement"`
	database.BaseTable
}
type Parent struct {
	Name        string           `json:"Name"`
	Description string           `json:"Description"`
	Min         int64            `json:"Min"`
	Max         int64            `json:"Max"`
	Cost        int64            `json:"Cost"`
	IDType      int64            `json:"IDType"`
	Type        SheetElementType `json:"SheetElementType"`
	database.BaseTable
}

type SheetElementType struct {
	Name   string   `json:"Name"`
	Fields []string `json:"Fields"`
	database.BaseTable
}
