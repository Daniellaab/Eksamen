document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("vareForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const varekategori = document.getElementById("varekategori").value;
        const beskrivelse = document.getElementById("beskrivelse").value;
        const pris = document.getElementById("pris").value;
    
        const vare = {
          varekategori: varekategori,
          beskrivelse: beskrivelse,
          pris: pris,
        };

        fetch("http://localhost:1801/varer/opretV", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(vare),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                window.alert("Din vare er hermed blevet oprettet!")
            }
        })
        .catch(() => {
            window.alert("Fejlmeddelelse");
        });
    });
});
