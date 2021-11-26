var missingElement = false;

if (!window.localStorage.getItem("token")) {
    missingElement =true;
}
if (!window.localStorage.getItem("bruger_information")) {
    missingElement = true;
}

if (missingElement) {
    window.location.replace("/");
} else {
    
}