# go-cms
Simple cms written in golang

# Documentation

first thing first, i used this structure for all of my package: 
- **package name** (folder) *mandatory*
- \***package name\*.go** (main package) *mandatory*
- **data-types.go** (contains all types, especially "var DB *database.Database", variable used to read\write from database)
- **writing-func.go** (contains all func that write in the database)
- **reading-func.go** (contains all func that read in the database)

Here a short description of all packages:
- **commons**: contains all commons func
- **config**: hadle the config file
- **cusotmrequest**: parser all request for the webserver
- **database**: handle all operation in the database
- **dbapi**: CRUD operations for interact whith database
- **errorpages**: print errors in the browser (or return a JSON response)
- **logs**: handle logs for the webserver
- **menu**: CRUD operation for the menu table
- **page**: handle pages of the website
- **route**: CRUD operations for the route table
- **user**: CRUD operations for the user table
- **usertype**: CRUD operations for the UserType table
- **www**: contains all css, template and script

### commons
- ExecuteHeader execute the header template of the webpage
- ExecuteFooter execute the footer template of the webpage
- CommonLoad execute the first operation before a func run
- ParseMysqlDateTime function to format a date time stored in a mysql field
- CryptPassword crypt a password
- CreateJwsToken create a jwt token
- VerifyPassword check if the password is correct
- SendMail send registration mail
- SetHeaders set headers for api response
- handle commons response error (404, 500,...)

### configuration
LoadConfiguration, SaveConfiguration handle the config file

### customrequest
This package is responsable to parse all request to the server and istantiate a type that will be use in all of package and check the credentials stored in cookie, or in "Authorization" header
- New parse a new request
- GetPath return url path
- GetMethod return method of the request
- CheckPermission check if user has permission to open this url
- VerifyJwsToken check the validity of jws token
- ParserBodyRequest retrieve a body request (usually a POST request)
 
Example:
> - [1]\*request type\*/\*package name\*/\*func name\* (www.mywebsite.com/api/menu/getmenu)
> this is an api request, it must specified the package to handle the request and the func to call
> - [2]\*request type\*/\*func name\* (www.mywebsite.com/be/users)
> this is request for backend page, the package will be set for default "page", in case there is no func, it simply set the func = "home" for the backend homepage
> - [3]\*func name\* (www.mywebsite.com/user)
> this is a frontend request, the package will be set for default a "page", in case there is no func, it simply set the func = "home" for the frontend homepage

### database
This package is used for read and write into the database
- New open new connection 
- Query execute a query that non required to return any results
- Reader execute a query that return a result ("SELECT field1, field2...from table")
- GetQuery return a stored query in the table "storedqueries" from the database
- ScanTable execute a query and istantiate a []map[string]interface{} with all the rows and colums read
- Delete delete a specific record from the database

### dbapi
Handle all api request for interact with the database
- ParseRoute handle the func specified in the request
- GetDatabases return a list of all databases in the server
- GetTables return a list of all tables in the specific database
- OpenTable return all data from a specified table

### errorpages
Handle all standard errors pages

### logs
Handle the application log

### menu
Handle all api request for the menu table
- ParseRoute handle the func specified in the request
- GetMenu load a specific menu
- GetPlainMenu return all menu in plain (a non structured list)
- AddMenu add a menu item in the database
- UpdateMenu update a menu item in the database
- DeleteMenu delete a menu item in the database
<<<<<<< HEAD

### page
Handle the pages of the website
- ParseRoute handle the func specified in the request
- LoadTemplate load a template
- common load the menu and specific template 
- all func for a specific page

### route
Handle all api request for the route table
- ParseRoute handle the func specified in the request
- AddRoute add a new route
- GetRoutes returns all routes configured in the database
- DeleteRoute delete a route from database
- UpdateRoute update a route in the database
- CheckRoute check if user has permission to open this route

### user
Handle all api request for the user table
- Login handle users login
- Register register a new user
- VerifyUser verify the mail of a user
- CheckUserExist verify the user exist
- LoadUsers load all users
- UpdateUser update user information

*to be: implement delete user*

### usertype
Handle all api request for the usertype table
- ParseRoute handle the func specified in the request
- GetUserTypes retrieve alla UserTypes from database
- DeleteUserType delete a route from database
- AddUserType insert a UserType in database

there is no update for usertype, simply delete or add

### www
This folder contains these folders:
- scripts for javascript files
- styles for css files
- templates for htm template files

the template contains:
- components sub template (like menu)
- errors template for error page
- system system template like header, footer and a redirect page
- views all template handled in "page" package

### simple explanation
every url must be mapped in the route table, so every user has it's usertype, so you can set specific permission for specific type of user (you can create any different type of usertype). And every menu item in the same way must be setted for the specific usertype

the database contains these tables:
- menus contains all menu items
- menupermission specific witch permission has a menu item (every item can have more than 1 permission)
- routes contains all url handled by the website (*Attention routes can handled wildcards with "\*"*)
- routespermission specific witch permission has a route item (every item can have more than 1 permission)
- storedqueries the queryes used by the code
- users contains all users registered in the website
- usertypes contains all type of user

### menus
- MenuName a field to group all menu items in a specific menu
- Name the label written in the html
- Parent the menu can handled children like accordion
- MenuOrder the order to print the menu
- *system fields*

### menupermission
- IDMenu external key for table menu
- IDUserType external key for table usertype
- *system fields*

### routes
- Package the name of the package
- Func the name of the func
- Type a string field, can contain "api", "be", "fe"
- *system fields*

### routepermission
- IDRoute external key for route table
- IDUserType external key for usertype table
- *system fields*

### storedqueries
- Name name of the stored query
- Command sql command
- *system fields*

### user
- Username
- Password crypted with md5
- LastLogin
- DatePassword last time the password was chenged (or created)
- PasswordDuration (in days) the amounth of days until the password will expired (the value -1 means the password never expire)
- IDUserType external key to table usertype
- CodeResetPassword a code (guid) for verify user email
- *system fields*
