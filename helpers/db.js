//Vi benytter os af require og file system modulet (fs)
var fs = require('fs');

// Opretter const til vores path for brugere og samlet data
const Altdata = __dirname + "/../data";
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
    //Login af bruger
    saveUser(bruger) {
        this.brugere.push(bruger);
        this.saveFile(brugerData, JSON.stringify(this.brugere));
    }

    //Find bruger
    findUser(bruger) {
        return this.brugere.find((x) => bruger.email == x.email);
    }
    
    //Sletningen af brugere
    deleteUser(bruger) {
        this.brugere = this.brugere.filter((x) => x.email != bruger.email);
        this.saveFile(brugerData, JSON.stringify(this.brugere));
    } 
    //Opdatering af brugerens oplysninger
    updateUser(bruger) {
    for (let i=0; i < this.brugere.length; i++) {
      console.log(this.brugere[i]);
      console.log(bruger);
      if (this.brugere[i].email == bruger.gammelEmail) {
        this.brugere[i].email = bruger.email;
        this.brugere[i].kode = bruger.kode;
      } 
    }
    this.saveFile(brugerData, JSON.stringify(this.brugere));
  }
}

module.exports = new DB();