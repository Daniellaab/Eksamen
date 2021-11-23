const { json } = require("body-parser");
const { response } = require("express");

let firstField = document.getElementById("fornavn_input")
let lastField = document.getElementById("efternavn_input")
let submit_btn = document.getElementById("opret_bruger_knap");
let emailField = document.getElementById("email_input");
let kodeField = document.getElementById("kode_input");

submit_btn.onclick = () => {
    submit_btn.disabled = true;
    const bruger = {
        fornavn: firstField.value,
        efternavn: lastField.value,
        email: emailField.value,
        kode: kodeField.value
    }

    OpretBruger(bruger)
    .then((response) => {
        if (!response) {
            throw new Error("Server fejl");
        }
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("brugerId", response.id);
        window.localStorage.setItem("bruger_information", JSON.stringify(bruger));
        window.location.replace("Hovedside");
    })
    .catch((err) => {
        submit_btn.disabled = false;
        alert(err);
    });
};

async function OpretBruger(bruger) {
    formData.delete("bruger");
    formData.append("bruger", JSON.stringify(bruger));

    const response = await fetch("opretBruger/", {
        method: "POST",
        body: formData
    })

    if (response.status !=201) {
        const err = await response.json();
        throw new Error(err.error)
    } else {
        return response.json();
    }
}

// const { response } = require("express");

// document.addEventListener("DOMContentLoaded", (event) => {
//     document.getElementById("form").addEventListener("opret", (event) => {
//         event.preventDefault();

//         const email = document.getElementById("email").value;
//         const kode = document.getElementById("kode").value;
    
//         const bruger = {
//           email: email,
//           kode: kode,
//         };

//         fetch("http://localhost:4000/bruger/opret", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//             },
//             // Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//             body: JSON.stringify(bruger),
//         })
//         .then((response) => response.json())
//         .then((response) => {
//             if (response) {
//                 location.href = "/login.html";
//             }
//         })
//         .catch(() => {
//             window.alert("Fejlmeddelse");
//         });
//     });
// });