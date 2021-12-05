//Vi benytter os af require og file system modulet (fs) til at opbevare data
var fs = require('fs');

// Opretter const til vores path for brugere og samlet data
const Altdata = __dirname + "/../data";
const varerData = "/varer.json";

// Vi har nu en varabel som indeholder alt fra vores JSON data fil.
class varerDB {
    constructor() {
        this.varer = this.openFile(varerData);
    }
    //Vi vil gerne kunne gemme vores fil så derfor bruger vi saveFile
    saveFile(fileName, contentString) {
        fs.writeFileSync(Altdata + fileName, contentString);
    }
    //Åbne vores fil
    openFile(fileName) {
        const file = fs.readFileSync(Altdata + fileName);
        return JSON.parse(file);        
    }
    saveVare(vare) {
        this.varer.push(vare);
        this.saveFile(varerData, JSON.stringify(this.varer));
    }
    //Sletningen af varen
    deleteVare(vare) {
        this.varer = this.varer.filter((x) => x.beskrivelse != vare.beskrivelse);
        this.saveFile(varerData, JSON.stringify(this.varer));
    } 
}

module.exports = new varerDB();