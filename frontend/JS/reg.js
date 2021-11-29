const { response } = require("express");
const { json } = require("body-parser");

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("opret", (event) => {
        event.preventDefault();

        const fornavn = document.getElementById("fornavn_input").value;
        const efternavn = document.getElementById("efternavn_input").value;
        const email = document.getElementById("email_input").value;
        const kode = document.getElementById("kode_input").value;
    
        const bruger = {
          fornavn: fornavn,
          efternavn: efternavn,
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
                window.alert("Hehe");
                location.href = "/frontend/HTML/login.html";
            }
            window.localStorage.setItem("bruger_information", JSON.stringify(bruger));
            window.location.replace("/frontend/HTML/hovedside");
        })
        .catch(() => {
            window.alert("Fejlmeddelse");
        });
    });
});
