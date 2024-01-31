import { redirect } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/";

async function rootLoader({ request }) {
    try {
        let result = await fetch(baseUrl + "api/route/check", {
          method: 'POST',
          headers: GetHeaders(),
          body: JSON.stringify({
            Package: "page",
            Func: request.url.replace("http://localhost:3000/", "") === "" ? "home" : request.url.replace("http://localhost:3000/", ""),
            Type: "Page",
            Method: 'PAGE'
          })
        });
        if(result.status === 200)
          return true;
        return redirect(`/error/${result.statusText}`);
    }
    catch(err) {
        return redirect(`/error/Generic error`);
    }
}

async function errorLoader({ params }) {
    return { message: params.message };
}

async function login(username, password) {
    let result = await fetch(baseUrl + "api/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Username: username,
            Password: password
        })
    });

    if(result.status === 200) {
        let data = await result.json();
        //set the cookies
        window.sessionStorage.setItem("Authorization", data.Data);
    }
    else return result;

    return true;
}

function isUserLogged() {
    return (window.sessionStorage.getItem("Authorization") !== null);
}

function logout() {
    window.sessionStorage.removeItem("Authorization");
    window.location.href = '/';
}

function GetHeaders() {
    let headers = {}
    if(window.sessionStorage.getItem("Authorization")) {
        headers = {
            'Content-Type': 'application/json',
            "Authorization": window.sessionStorage.getItem("Authorization"),
        };
    }
    else {
        headers = {
            'Content-Type': 'application/json'
        };
    }
    return headers;
}

async function getroutes(page) {
    let result = await fetch(baseUrl + "api/route/getroutes?" + new URLSearchParams({ page: page }).toString(), {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function getroutesfiltered(propriety, value) {
    let result = await getroutes(0);
    if(!result) return false;
    return result.Data.filter((r) => r[propriety] === value);
    // getroutes(0).then((result) => {
    //     return result.Data.filter((r) => r[propriety] === value);
    // }).catch((err) => {
    //     console.error(err);
    //     return false;
    // });
}

async function updateroute(route) {
    let result = await fetch(baseUrl + "api/route/update", {
        method: 'POST',
        headers: GetHeaders(),
        body: JSON.stringify(route)
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function deleteroute(route) {
    let result = await fetch(baseUrl + "api/route/delete?" + new URLSearchParams({ ID: route.ID }).toString(), {
        method: 'DELETE',
        headers: GetHeaders(),
        body: JSON.stringify(route)
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function addroute(route) {
    let result = await fetch(baseUrl + "api/route/add", {
        method: 'POST',
        headers: GetHeaders(),
        body: JSON.stringify(route)
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function getusers(page) {
    let result = await fetch(baseUrl + "api/user/getusers?" + new URLSearchParams({ page: page }).toString(), {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function getusertypes(page) {
    let result = await fetch(baseUrl + "api/usertype/getusertypes?" + new URLSearchParams({ page: page }).toString(), {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function getmenu(menuName) {
    let result = await fetch(baseUrl + "api/menu/getmenu?" + new URLSearchParams({ menuName: menuName }).toString(), {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function getmenus(menuName) {
    let result = await fetch(baseUrl + "api/menu/getmenus", {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function gettables(menuName) {
    let result = await fetch(baseUrl + "api/dbapi/gettables", {
        method: 'GET',
        headers: GetHeaders()
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

async function command(sql) {
    let result = await fetch(baseUrl + "api/dbapi/command", {
        method: 'POST',
        headers: GetHeaders(),
        body: JSON.stringify(sql)
    });

    if(result.status === 200) {
        let data = await result.json();
        return data;
    }

    return false;
}

export {
    rootLoader,
    errorLoader,
    login,
    isUserLogged,
    logout,
    getroutes,
    getroutesfiltered,
    getusers,
    getusertypes,
    updateroute,
    addroute,
    deleteroute,
    getmenu,
    getmenus,
    gettables,
    command
}