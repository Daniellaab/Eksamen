const express = require("express");
const router = express.Router();
const varerModel = require("./../models/vare");
const varerDB = require("./../helpers/vareDB");
const { varer } = require("./../helpers/vareDB");
const vare = require("./../models/vare");

//Til at registrere en vare i vores JSON-fil
router.post("/opretV", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.beskrivelse, req.body.pris);
  varerDB.saveVare(vare);
  res.status(200).send(true);
});

//Slette varen i JSON-filen
router.delete("/deleteV", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.beskrivelse, req.body.pris);
  varerDB.deleteVare(vare);
  res.status(200).send(true);
});

//Opdater vare 
router.put("/opdaterV", (req, res) => {
  const vare = {beskrivelse: req.body.beskrivelse, pris: req.body.pris, gammelBeskrivelse: req.body.gammelBeskrivelse};
  varerDB.updateVare(vare);
  res.status(200).send(true);
});

const varerTo = require("./../data/varer.json")
//Returnere alle varerne
router.get("/returnerVare", (req, res) => {
  const vare = varerDB.openFile(varerTo)
  res.status(200).json(vare)
  console.log(vare)
});

module.exports = router; 