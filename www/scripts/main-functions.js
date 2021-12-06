function ShowError(message) {
    $("#error-message").show();
    $("#error-message").text(message.status + " " + message.statusText);
    window.setTimeout(() => {
        $("#error-message").hide();
    }, 6000);
}
function Post(package, func, data) {
    return $.ajax({
        method: "POST",
        url: "../api/" + package + "/" + func,
        data: JSON.stringify(data)
    });
}
function Get(url, data) {
    return $.ajax({
        method: "GET",
        url: url,
        data: data
    });
}
function Delete(package, func, data) {
    return $.ajax({
        method: "DELETE",
        url: "../api/" + package + "/" + func + "?ID=" + data
    });
}
function SetLogged(cookie) {
    window.sessionStorage.setItem(cookie.Name, cookie.Value);
    document.cookie = cookie.Name + "=" + cookie.Value + "; expires=" + cookie.Expires;
}
function isLogged() {
    if(!window.sessionStorage.getItem("Authorization")) return false;
    return true;
}
function Logout() {
    window.sessionStorage.removeItem("Authorization");
    document.cookie = "Authorization=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
function Redirect(url, millisecond = 3000) {
    window.setTimeout(() => {
        window.location.href = url;
    }, millisecond);
}
function goBack() {
    window.history.back();
}
function SetDeleteMessage(id, message = "") {
    $("#delete-dialog-button").attr("refer-id", id);
    if(message != "") {
        $("#delete-message").text(message);
    }
    $("#delete-dialog").show();
}