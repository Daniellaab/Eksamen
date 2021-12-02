//Opdater brugerens konto
function updateUser() {
    var gammelEmail =localStorage.getItem("bruger");
    gammelEmail = JSON.parse(gammelEmail);

    var email = document.getElementById("nyEmail").value; 
    var kode = document.getElementById("nyKode").value;

    const updateUser = {email: email, kode: kode, gammelEmail: gammelEmail.email};
    const update = {email: email, kode: kode};

    fetch("http://localhost:1801/brugere/opdater", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
      })
      .then((response) => response.json())
      .then((response) => {
          if (response) {
              window.alert("Brugeroplysningerne er hermed blevet opdateret!")
              localStorage.setItem("bruger", JSON.stringify(bruger));
          }
        })
        .catch(() => {
          window.alert("Fejlmeddelelse");
        });
};


// document.addEventListener("DOMContentLoaded", (event) => {
//     const bruger = localStorage.getItem("bruger");
//     if (bruger) {
//       location.href = "/";
//     }
  
//     document.getElementById("opdaterform").addEventListener("submit", (event) => {
//       event.preventDefault();
  
//       const email = document.getElementById("email_input").value;
//       const kode = document.getElementById("kode_input").value;
  
//       const bruger = {
//         email: email,
//         kode: kode,
//       };
  
//       fetch("http://localhost:1801/brugere/opdater", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bruger),
//       })
//         .then((response) => response.json())
//         .then((response) => {
//           if (response) {
//             localStorage.setItem("bruger", JSON.stringify(bruger));
//             location.href = "/hovedside.html";
//           } else {
//             window.alert("Oplysningerne er forkerte");
//           }
//         })
//         .catch(() => {
//           window.alert("Fejlmeddelelse");
//         });
//     });
//   });
  


// const { response } = require("express");

// //Opdatere 
// let submit_btn = document.getElementById("gem_bruger_knap");
// let firstField = document.getElementById("opdater_email");
// let kodeField = document.getElementById("opdater_kode");

// const bruger_info = JSON.parse(window.localStorage.getItem("bruger_information"));

// firstField.value = bruger_info.fornavn;
// lastField.value = bruger_info.efternavn;

// //Benytte os af token
// token = window.localStorage.getItem("token");

// submit_btn.onclick = () => {
//     const bruger = {
//         fornavn: firstField.value,
//         efternavn: lastField.value,
//         kode: kodeField.value
//     }

//     OpdaterBruger(bruger)
//         .then((response) => {
//             if (!response) {
//                 throw new Error("Server fejl");
//             }
//             window.localStorage.setItem("bruger_information", JSON.stringify(response.bruger));
//             window.location.reload();
//             alert("Brugeroplysningerne er hermed blevet opdateret");
//         })
//         .catch((err) => {
//             alert(err);
//         });
// };

// async function OpdaterBruger(opdateretInfomation) {
//     const response = await fetch("/opdater/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "authorization": token
//         },
//         body: JSON.stringify(opdateretInfomation)
//     });
//     if (response.status !=200) {
//         const err = await response.json();
//         throw new Error(err.error)
//     } else {
//         return response.json();
//     }
// }