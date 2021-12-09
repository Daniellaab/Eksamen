const express = require("express");
const router = express.Router();
const userModel = require("./../models/bruger");
const db = require("./../helpers/db");

//Opret bruger 
router.post("/opret", (req, res) => {
  const bruger = new userModel(req.body.email, req.body.kode);
  db.saveUser(bruger);
  res.status(200).send(true);
});

//Slet bruger 
router.delete("/delete", (req, res) => {
  const bruger = new userModel(req.body.email, req.body.kode);
  db.deleteUser(bruger);
  res.status(200).send(true);
});

//Login bruger 
router.post("/login", (req, res) => {
  const bruger = new userModel(req.body.email, req.body.kode);
  const found = db.findUser(bruger);
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

//Opdater bruger 
router.put("/opdater", (req, res) => {
  const bruger = {email: req.body.email, kode: req.body.kode, gammelEmail: req.body.gammelEmail};
  db.updateUser(bruger);
  res.status(200).send(true);
});

module.exports = router;
