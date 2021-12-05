document.addEventListener("DOMContentLoaded", (event) => {
    //Slette varen
    document.getElementById("formSlet").addEventListener("submit", (event) => {
        event.preventDefault();
        //Finder varen og omdannes til JSON-objekt
        const vare = JSON.parse(localStorage.getItem("vare"));
        fetch("http://localhost:1801/varer/deleteV", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vare),
        })
        //Bliver sendt til hovedsiden hvis det lykkedes ellers får brugeren en fejlmeddelelse
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                //Her slettes varen i Localstorage 
                localStorage.removeItem("vare");
                window.alert("Succes: varen blev slettet!");
            }
        })
        .catch(() => {
            window.alert("Fejlmeddelelse: varen kunne ikke slettes!");
        });
    });
});