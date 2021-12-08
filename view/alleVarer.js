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
