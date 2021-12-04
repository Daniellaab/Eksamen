const express = require("express");
const router = express.Router();
const varerModel = require("./../models/vare");
const varerDB = require("./../helpers/vareDB");

//Til at registrere en vare i vores JSON-fil
router.post("/opretV", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.beskrivelse, req.body.pris);
  varerDB.saveVare(vare);
  res.status(200).send(true);
});

module.exports = router; 