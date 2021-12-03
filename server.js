// Vi benytter os af Express
const express = require('express');
const app = express();

//Vi skal benytte os af controllers
const brugerCont = require("./controllers/brugerCont");
const vareCont = require("./controllers/vareCont");

//Frontend
app.use(express.static("./view"));
app.use(express.json());

// Vores routes
app.use("/brugere", brugerCont);
app.use("/varer", vareCont);


const PORT = 1801;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
});
