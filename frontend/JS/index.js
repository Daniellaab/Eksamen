// // Ny kode
// document.addEventListener("DOMContentLoaded", (event) => {
//     const bruger = localStorage.getItem("bruger");
//     //Hvis der ingen bruger er registreret videresendes vedkommende til loginsiden
//     if (!bruger) {
//         location.href= "/login.html";
//     }

//     //Logge ud af bruger
//     document.getElementById("logudform").addEventListener("submit", (event) => {
//         event.preventDefault();
//         //Hvis der findes en bruger i Localstorage, så når den bliver fjernet sendes vedkommende til loginsiden
//         if (bruger) {
//             localStorage.removeItem("bruger");
//             location.href= "/login.html";
//         };
//     });

//     //Slette brugeren
//     document.getElementById("delete").addEventListener("submit", (event) => {
//         event.preventDefault();

//         //Finder brugeren og omdannes til JSON-objekt
//         const bruger =JSON.parse(localStorage.getItem("bruger"));
//         fetch("http://localhost:1801/brugere/delete", {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bruger),
//         })
//         //Bliver sendt til loginside hvis det lykkedes ellers får brugeren en fejlmeddelelse
//         .then((response) => response.json())
//         .then((response) => {
//             if (response) {
//                 //Her slettes brugeren i Localstorage 
//                 localStorage.removeItem("bruger");
//                 location.href = "/login.html";
//             }
//         })
//         .catch(() => {
//             window.alert("Fejlmeddelese");
//         });
//     });
// });