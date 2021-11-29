//Vi benytter os af require og file system modulet (fs) til at opbevare data
var fs = require('fs');

// Opretter const til vores path for brugere og samlet data
const Altdata = __dirname + "/../../data";
const brugerData = "/users.json";


// Kilde: https://www.w3schools.com/js/js_object_constructors.asp 
// Kilde: https://stackabuse.com/reading-and-writing-json-files-with-node-js/ 
// Vi har nu en variabel som indeholder alt fra vores JSON data fil.
class DB {
    constructor() {
        this.brugere = this.openFile(brugerData);
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
    //En bestemt bruger
    // saveUser(bruger) {
    //     this.brugere.push(bruger);
    //     this.saveFile();
    // }

    //Sletningen af brugere
    deleteUser(bruger) {
        this.brugere = this.brugere.filter((x) => x.email != bruger.kode);
        this.saveFile(brugerData, JSON.stringify(this.brugere));
    }
    
    //Login af bruger
    saveUser(bruger) {
        this.brugere.push(bruger);
        this.saveFile(brugerData, JSON.stringify(this.brugere));
    }
    
    //Find bruger
    findUser(bruger) {
        return this.brugere.find((x) => bruger.email == x.email);
    }
}
