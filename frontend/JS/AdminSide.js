const { response } = require("express");

const token = window.localStorage.getItem("token");

const dropdown = document.getElementById("dropdown-indhold");
const alle_varer = document.getElementById("alle_varer");

fetchData().then(response => {
    console.log(response)
    alle_varer.innerHTML = "Alle varer til salg på Den blå bazar:" + response.alleVarerPræs.lenght

    for (var i = 0; i < response.alleVarerPræs.lenght; i++) {
        if (!response.alleVarerPræs[i].ErAdmin) {
            var child_a = document.createElement("a");
            child_a.innerHTML = response.alleVarerPræs[i].name
            dropdown.appendChild(child_a)
        }
    }
})

async function fetchData() {
    const response = await fetch("/admin/Vareoversigt", {
        method: "GET",
        headers: {
            "content-type": "application/json",
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
