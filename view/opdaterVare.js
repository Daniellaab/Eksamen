//Opdater varens oplysninger
function updateVare() {
    var gammelBeskrivelse =localStorage.getItem("vare");
    gammelBeskrivelse = JSON.parse(gammelBeskrivelse);

    var beskrivelse = document.getElementById("NyBeskrivelse").value; 
    var pris = document.getElementById("NyPris").value;

    const updateVare = {beskrivelse: beskrivelse, pris: pris, gammelBeskrivelse: gammelBeskrivelse.beskrivelse};
    const updateV = {beskrivelse: beskrivelse, pris: pris};

    fetch("http://localhost:1801/varer/opdaterV", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateVare),
      })
      .then((response) => response.json())
      .then((response) => {
          if (response) {
            localStorage.setItem("vare", JSON.stringify(updateV))
            window.alert("Vareoplysningerne er hermed blevet opdateret!")
          }
        })
        .catch(() => {
          window.alert("Fejlmeddelelse");
        });
};
