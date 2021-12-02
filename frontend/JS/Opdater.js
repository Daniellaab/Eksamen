// //Opdater brugerens konto
// function updateUser() {
//     var gammelEmail =localStorage.getItem("bruger");
//     gammelEmail = JSON.parse(gammelEmail);

//     var email = document.getElementById("nyEmail").value; 
//     var kode = document.getElementById("nyKode").value;

//     const updateUser = {email: email, kode: kode, gammelEmail: gammelEmail.email};
//     const update = {email: email, kode: kode};

//     fetch("http://localhost:1801/brugere/opdater", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updateUser),
//       })
//       .then((response) => response.json())
//       .then((response) => {
//           if (response) {
//               window.alert("Brugeroplysningerne er hermed blevet opdateret!")
//               localStorage.setItem("bruger", JSON.stringify(bruger));
//           }
//         })
//         .catch(() => {
//           window.alert("Fejlmeddelelse");
//         });
// };


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
  