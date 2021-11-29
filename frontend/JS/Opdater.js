// const { response } = require("express");

// //Opdatere 
// let submit_btn = document.getElementById("gem_bruger_knap");
// let firstField = document.getElementById("opdater_fornavn");
// let lastField = document.getElementById("opdater_efternavn");
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