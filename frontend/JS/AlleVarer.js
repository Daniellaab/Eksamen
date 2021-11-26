const token = window.localStorage.getItem("token");

async function fetchAlleVare() {
    const response = await fetch("/fetchAlleVare", {
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

async function fetchDeleteVare(vareId) {
    const response = await fetch("/sletVare", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "authorization": token
        },
        body: JSON.stringify({ 
            vareId: vareId
        })

    });
//Vi kan slette en vare her
    if (response.status != 200) {
        alert("Ikke muligt at slette varen!")
    } else {
        window.location.reload();
    }
}

// Laver oversigt over alle brugerens varer
function opretVare(_vare) {
    
    var tr = document.createElement('tr');
    tr.style.width = "100%";

    var a = document.createElement("a");
    a.style.width = 100;
    a.style.left = 100;
    a.style.color = "black";
    // Link til den fulde profil
    a.href = "visVare?id=" + _vare._id;

    var th = document.createElement("th");
    th.style.display = "block";
    
    // Displayer for varen
    var h2 = document.createElement("h2");
    h2.innerHTML = _vare.vare_navn+ " " + _vare.pris;
    
    th.appendChild(h2);

    var td1 = document.createElement("td");
    td1.style.display = "block";

    var vareBillede = document.createElement("vareBillede");
    vareBillede.src = _match.vareBilledeUrl
    vareBillede.style.width = "400px";
    vareBillede.style.left = "35%";
    vareBillede.style.top = "50%";
    td1.append(vareBillede);

    var td2 = document.createElement("td");
    td2.style.display = "block";
    td2.style.margin = "auto";

    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.style.display = "block";
    button.style.width = "100%";
    button.style.right = "70%";
    button.style.top = "80%";
    
    button.onclick = () => {
        fetchDeleteVare(_vare._id);
    }
    
    td2.appendChild(button);
    
    var hr = document.createElement("hr");
    a.appendChild(th);
    a.appendChild(td1);
    tr.appendChild(a);
    tr.appendChild(td2);
    tr.appendChild(hr);

    document.getElementById("varerContainer").appendChild(tr);
}

function opretAllevare(response) {
    var varer = response.varer;
    for (i=0;i < varer.length; i++) {  
        opretVare(varer[i]);
    }
}

fetchAlleVare()
    .then(opretAllevare)
    .catch((err) => {
        alert(err)
    });
