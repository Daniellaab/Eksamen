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
  