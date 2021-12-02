// Original kode
// document.addEventListener("DOMContentLoaded", (event) => {
//     document.getElementById("form").addEventListener("submit", (event) => {
//         event.preventDefault();

//         const email = document.getElementById("email_input").value;
//         const kode = document.getElementById("kode_input").value;
    
//         const bruger = {
//           email: email,
//           kode: kode,
//         };

//         fetch("http://localhost:1801/brugere/opret", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//             },
// // Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//             body: JSON.stringify(bruger),
//         })
//         .then((response) => response.json())
//         .then((response) => {
//             // Hvis brugeren bliver registreret så videresendes brugeren til hovedsiden
//             if (response) {
//                 location.href = "/hovedside.html";
//             }
//             // window.localStorage.setItem("bruger_information", JSON.stringify(bruger));
//             // window.location.replace("/frontend/HTML/hovedside");
//         })
//         .catch(() => {
//             window.alert("Fejlmeddelelse");
//         });
//     });
// });
