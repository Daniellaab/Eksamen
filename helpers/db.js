//Vi benytter os af require og file system modulet (fs) til at opbevare data
var fs = require('fs');

// Opretter const til vores path for brugere og samlet data
const brugerData = "/users.json";
const Altdata = __dirname+ "./../../data";

// Kilde: https://www.w3schools.com/js/js_object_constructors.asp 
// Kilde: https://stackabuse.com/reading-and-writing-json-files-with-node-js/ 
// Vi har nu en variabel som indeholder alt fra vores JSON data fil.
class DB {
    constructor() {
        this.brugere = this.openFile();
    }
    //Vi vil gerne kunne gemme vores fil så derfor bruger vi saveFile
    saveFile() {
        fs.writeFileSync(Altdata+brugerData, this.brugere);
    }
    //Åbne vores fil
    openFile() {
        const file = fs.readFileSync(brugerData+Altdata);
        return JSON.parse(file);        
    }
    //En bestemt bruger
    saveUser(bruger) {
        this.brugere.push(bruger);
        this.saveFile();
    }    
    //Login af bruger
    findUser(bruger) {
        return this.brugere.find((x) => bruger.email == x.email);
    }
}
