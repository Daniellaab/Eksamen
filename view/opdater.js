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
              localStorage.setItem("bruger", JSON.stringify(update));
          }
        })
        .catch(() => {
          window.alert("Fejlmeddelelse");
        });
};
