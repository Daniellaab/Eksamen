const express = require("express");
const routes = express.Router();
const userModel = require("./../models/bruger");
const db = require("./../helpers/db")

//Skabe en rute (/opret)
router.post("/opret", (req, res) => {
    const bruger = userModel(req.body.email, req.body.kode);
    db.saveUser(bruger);
    res.status(200).send(true);
});

//Ny rute til registrering af bruger (/login)
router.post("/login", (req, res) => {
    const bruger = new userModel(req.body.email, req.body.kode);
    const found = db.findBruger(bruger);
    if (found) {
      if (bruger.kode == found.kode) {
        res.status(200).send(true);
      } else {
        res.status(401).send(false);
      }
    } else {
      res.status(404).send(false);
    }
  });