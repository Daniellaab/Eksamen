// const { json } = require("body-parser");
// const { response } = require("express")

// const slet_btn = document.getElementById("slet_btn")
// slet_btn.onclick = () => {
//   SletBruger()
//     .then((response) => {
//       window.localStorage.clear();
//       window.location.replace("/");
//     })
//     .catch(err => {
//       alert(err)
//     })
// }

// //Slette bruger 
// async function SletBruger() {
//   const response = await fetch("sletBruger/mig", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       "authorization": token
//     },
//   });
//   if (response.status == 200) {
//     return response.json();

//   } else if (response.status == 400) {
//     throw new Error("Ikke muligt at slette bruger")


//   } else {
//     throw new Error("Server fejl")
//   }
// }

// //Logud
// const logud_btn = document.getElementById("logud_btn")
// logud_btn.onclick = () => {
//   window.localStorage.clear();
//   window.location.replace("/");
// }

// //Opbevaring af brugeroplysninger med id og token
// const brugerId = window.localStorage.getItem("brugerId");
// const token = window.localStorage.getItem("token");
// const brugerData = JSON.parse(window.localStorage.getItem("bruger_oplysninger"));



//EKSTRA

// //Kilde til design af frontend https://www.youtube.com/watch?v=GAOBXGPuKqo&ab_channel=EasyTutorials 

// //Kilde: https://www.youtube.com/watch?v=3GsKEtBcGTk&ab_channel=dcode 
// document.addEventListener("DOMContentLoaded", (event) => {
//     const bruger = localStorage.getItem("bruger");
//     if (!bruger) {
//       location.href = "/login.html";
//     }
  
//     document.getElementById("slet").addEventListener("opret", (event) => {
//       event.preventDefault();
  
//       const bruger = JSON.parse(localStorage.getItem("bruger"));
  
//       fetch("http://localhost:4000/brugere/slet", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bruger),
//       })
//         .then((response) => response.json())
//         .then((response) => {
//           if (response) {
//             localStorage.removeItem("bruger");
//             location.href = "/login.html";
//           }
//         })
//         .catch(() => {
//           window.alert("Fejlmeddelelse");
//         });
//     });
//   });
  