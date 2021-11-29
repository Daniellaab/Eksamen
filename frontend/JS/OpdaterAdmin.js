const token = window.localStorage.getItem("token");

let submit_btn = document.getElementById("gem_profil_knap");
let firstField = document.getElementById("opdater_fornavn");
let lastField = document.getElementById("opdater_efternavn");
let kodeField = document.getElementById("opdater_kode");

let headline = document.getElementById("headline");

let delete_btn = document.getElementById("delete_btn");

const urlParams = new URLSearchParams(window.location.search);
var _id = urlParams.get("id");

headline.innerHTML = "Bruger: " + _id;

fetchBrugerInfo().then(bruger_info => {
    firstField.value = bruger_info.fornavn;
    lastField.value = bruger_info.efternavn;

    submit_btn.onclick = () => {
        const bruger = {
            opdaterId: _id,
            fornavn: firstField.value,
            efternavn: lastField.value,
            kode: kodeField.value,
        }
    
        OpdaterBruger(bruger)
            .then((response) => {
                if (!response) {
                    throw new Error("Server fejl");
                }
                window.localStorage.setItem("bruger_information", JSON.stringify(response.bruger));
                window.location.reload();
                alert("Dine oplysninger er blevet opdateret");
            })
            .catch((err) => {
                alert(err);
            });
    };

    delete_btn.onclick = () => {
        DeleteBruger()
            .then((response) => {
                window.location.replace("/Adminside");
            })
            .catch(err => {
                alert(err)
            })
    }
});

async function OpdaterBruger(opdateretInfo) {
    const response = await fetch("/opdater/", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify(opdateretInfo)
    });
    if (response.status != 200) {
        const err = await response.json();
        throw new Error(err.error)
    } else {
        return response.json();
    }
}

async function fetchBrugerInfo() {
    const response = await fetch("/admin/fetchBrugerInfo/" + _id, {
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

async function DeleteBruger() {
    const response = await fetch("../deleteBruger/" + _id, {
        method: "DELETE",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        },
    });
    if (response.status == 200) {
        return response.json();

    } else if (response.status == 400) {
        throw new Error("Ikke muligt at slette bruger")

    } else {
        throw new Error("Server fejl")
    }
}