const express = require("express");
const routes = express.Router();
const userModel = require("./../models/bruger");
const db = require("./../helpers/db")

//Skabe en rute (/opret)
router.post("/opret", (req, res) => {
    const bruger = userModel(req.body.email, req.body.kode);
    db.saveUser(bruger);
    console.log(bruger);  
});

routes.get("/", (req, res) => {
    res.status(200).send(true);
});