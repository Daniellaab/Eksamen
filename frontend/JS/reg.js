const { response } = require("express");

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("opret", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const kode = document.getElementById("kode").value;
    
        const bruger = {
          email: email,
          kode: kode,
        };

        fetch("http://localhost:4000/bruger/opret", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            // Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
            body: JSON.stringify(bruger),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                location.href = "/login.html";
            }
        })
        .catch(() => {
            window.alert("Fejlmeddelse");
        });
    });
});