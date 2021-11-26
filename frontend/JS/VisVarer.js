const token = window.localStorage.getItem("token");

var pris = document.getElementById("pris");
var beskrivelse = document.getElementById("beskrivelse");
var vareBillede = document.getElementById("vareBillede");

const urlParams = new URLSearchParams(window.location.search);
var _id = urlParams.get("id");

async function fetchData() {
    const response = await fetch("/fåVareInfo/" + _id, {
        method: "GET",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        }
    });

    if (response.status != 200) {
        const err = await response.json();
        throw new Error(err.error)
    } else {
        const data = await response.json();
        return data;
    }
}

fetchData()
    .then((response) => {
        var name = document.createElement("h2");
        name.innerHTML = response.info.fornavn + " ";
        document.getElementById("nameContainer").appendChild(name)

        pris.innerHTML = "Pris: " + response.info.pris + " kr.";
        beskrivelse.innerHTML = response.info.vare_navn + "Lidt om varen: " + response.info.beskrivelse;
        vareBillede.src = response.info.vareBilledeUrl; 
    })
    .catch((err) => {
        alert(err)
    })
