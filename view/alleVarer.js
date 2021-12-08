document.getElementById("formAlle").addEventListener("click", async () => {
    let table = document.getElementById("alleVareliste");
    let result = await fetch("http://localhost:1801/varer/returnerVare", { 
    method: "GET"})
    .then(res => res.json())
    .catch(err => console.log(err));
    console.log(result)

    let tableHTML = `
    <tr>
        <th>Varekategori</th>
        <th>Beskrivelse</th>
        <th>Pris</th>
    </tr>
    `;
    for(const varer in result) {
        tableHTML+= `
        <tr>
            <td>${result[varer].varekategori}</td>
            <td>${result[varer].beskrivelse}</td>
            <td>${result[varer].pris}</td>
        </tr>
        `;
    }
    table.innerHTML=tableHTML
})
//Varekategoriopgave (krav 11)
//første knap med bolig
document.getElementById("clickBolig").addEventListener("click", async () => {
    let table = document.getElementById("varekatListe");
    let result = await fetch("http://localhost:1801/varer/returnerVare", {
        method: "GET"})
        .then(res => res.json())
        .catch(err => console.log(err));
        console.log(result)
    
        let tableHTML = `
        <tr>
            <th>Varekategori</th>
            <th>Beskrivelse</th>
            <th>Pris</th>
        </tr>
    `;
    for(const varer in result) {
        tableHTML+= `
        <tr>
            <td>${result[varer].varekategori}</td>
            <td>${result[varer].beskrivelse}</td>
            <td>${result[varer].pris}</td>
        </tr>
        `;
    }
    table.innerHTML = tableHTML
})

//næste knap med tøj
document.getElementById("clickTøj").addEventListener("click", async () => {
    let table = document.getElementById("varekatListe");
    let result = await fetch("http://localhost:1801/varer/returnerVare", {
        method: "GET"})
        .then(res => res.json())
        .catch(err => console.log(err));
        console.log(result)
    
        let tableHTML = `
        <tr>
            <th>Varekategori</th>
            <th>Beskrivelse</th>
            <th>Pris</th>
        </tr>
    `;
    for(const varer in result) {
        tableHTML+= `
        <tr>
            <td>${result[varer].varekategori}</td>
            <td>${result[varer].beskrivelse}</td>
            <td>${result[varer].pris}</td>
        </tr>
        `;
    }
    table.innerHTML = tableHTML
})

//næste knap med have og byg
document.getElementById("clickHave").addEventListener("click", async () => {
    let table = document.getElementById("varekatListe");
    let result = await fetch("http://localhost:1801/varer/returnerVare", {
        method: "GET"})
        .then(res => res.json())
        .catch(err => console.log(err));
        console.log(result)
    
        let tableHTML = `
        <tr>
            <th>Varekategori</th>
            <th>Beskrivelse</th>
            <th>Pris</th>
        </tr>
    `;
    for(const varer in result) {
        tableHTML+= `
        <tr>
            <td>${result[varer].varekategori}</td>
            <td>${result[varer].beskrivelse}</td>
            <td>${result[varer].pris}</td>
        </tr>
        `;
    }
    table.innerHTML = tableHTML
})

//næste knap med elektronik
document.getElementById("clickElek").addEventListener("click", async () => {
    let table = document.getElementById("varekatListe");
    let result = await fetch("http://localhost:1801/varer/returnerVare", {
        method: "GET"})
        .then(res => res.json())
        .catch(err => console.log(err));
        console.log(result)
    
        let tableHTML = `
        <tr>
            <th>Varekategori</th>
            <th>Beskrivelse</th>
            <th>Pris</th>
        </tr>
    `;
    for(const varer in result) {
        tableHTML+= `
        <tr>
            <td>${result[varer].varekategori}</td>
            <td>${result[varer].beskrivelse}</td>
            <td>${result[varer].pris}</td>
        </tr>
        `;
    }
    table.innerHTML = tableHTML
})