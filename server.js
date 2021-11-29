// Vi benytter os af Express
const express = require('express');
const app = express();

//Vi skal benytte os af controllers
const brugerCont = require("./controllers/brugerCont");

//Frontend
app.use(express.static("./frontend/HTML"));
app.use(express.static("./frontend/JS"));
app.use(express.json());

// Vores routes
app.use("/brugere", brugerCont);

//Middleware 
//Kilde: https://heynode.com/tutorial/process-user-login-form-expressjs/
// const bodyParser = require('body-parser');
// const bruger = require('./models/bruger');
// app.use(bodyParser.urlencoded({ extended: false })); 

const PORT = 1801;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
});
