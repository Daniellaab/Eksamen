let sælg_btn = document.getElementById("sælg_btn");
let vare_navn = document.getElementById("vare_navn");
let pris = document.getElementById("pris");
let beskrivelse = document.getElementById("beskrivelse");
let vareBillede = document.getElementById("vareBillede");


let vareMatchId = null;

const token = window.localStorage.getItem("token");

async function fetchvareMatchId() {
    const response = await fetch("/FåvareMatchId/", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        },
    });

    if (response.status != 200) {
        const err = await response.json();
        throw new Error(err.error)
    } else {
        const data = await response.json();
        return data;
    }
}

async function vilSælge() {
    const response = await fetch("/sælg/", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify({
            idVilSælge: vareMatchId
        })

    });
    if (response.status != 200) {
        const err = await response.json();
        throw new Error(err.error)
    } else {
        return await response.json();
    }
}

function sælg() {
    vilSælge()
        .then((response) => {
            if (response.købt) {
                alert("Din vare er hermed blevet sat til salg" + vare_navn.innerHTML);
            }
            window.location.reload();
        })
        .catch((err) => {
            alert(err);
        });
}


sælg_btn.onclick = sælg;
