package config

import (
	"encoding/json"
	"log"
	"os"

	"cms/logs"
)

//LoadConfiguration Load the config file
func LoadConfiguration(config *Config) error {
	configFile, err := os.Open("./config.json")
	defer configFile.Close()
	if err != nil {
		logs.Save("config", "LoadConfiguration", "Error loading the config", logs.Error, err.Error())
		return err
	}
	jsonParser := json.NewDecoder(configFile)
	err = jsonParser.Decode(&config)
	if err != nil {
		logs.Save("config", "LoadConfiguration", "Error parsing the json", logs.Error, err.Error())
		return err
	}
	return nil
}

//Save the information in the config file
func (c Config) Save() error {
	file, err := json.MarshalIndent(c, "", " ")
	if err != nil {
		logs.Save("config", "Save", "Error parsing the config in a string", logs.Error, err.Error())
		return err
	}
	f, err := os.OpenFile("./config.json", os.O_WRONLY|os.O_CREATE, 0644)
	if err != nil {
		log.Panicln(err)
	}
	err = f.Truncate(0)
	if err != nil {
		log.Panicln(err)
	}
	defer f.Close()
	if _, err = f.WriteString(string(file)); err != nil {
		logs.Save("config", "Save", "Error saving the config", logs.Error, err.Error())
	}
	return nil
}
