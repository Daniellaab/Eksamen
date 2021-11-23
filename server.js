// Vi benytter os af Express
const express = require('express');
const app = express();

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server lytter på http://localhost:${PORT}`);
});

//Vi skal benytte os af controllers
const brugerCont = require("./controllers/brugerCont")

//Frontend
app.use(express.static("./frontend"));
app.use(express.json());

// Vores routes
app.use("/bruger", brugerCont);

//Middleware 
//Kilde: https://heynode.com/tutorial/process-user-login-form-expressjs/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 