function CheckLogin() {
    var missingElement = false;
    if (!window.localStorage.getItem("token")) {
        missingElement = true;
    }
    if (!window.localStorage.getItem("bruger_info")) {
        missingElement = true;
    }
    if (missingElement) {
    } else {
        window.location.replace("hovedside");
    }
}

CheckLogin();