// var express = require("express");
// var router = express.Router();

// var token = require("../helpers/token");
// var brugerCont = require("../controllers/brugerCont");
// var adminCont = require("../controllers/adminCont");
// var frontendCont = require("../controllers/frontendCont");

// // Opdaterer URL'en 

// // defaults
// router.post("/opretBruger/", brugerCont.opretBruger);

// router.post("/loginBruger/", brugerCont.loginBruger);

// router.delete("/sletBruger/:hvem", token.authenticate, brugerCont.sletBruger);

// router.post("/opdater/", token.authenticate, brugerCont.opdaterBruger);

// router.get("/", frontendCont.loginSide);

// router.get("/hovedside", frontendCont.hovedSide);

// router.get("/reg", frontendCont.regSide);

// router.get("/opdater", frontendCont.opdaterSide);

// router.get("/sælg", frontendCont.sælgeSide);

// router.post("/sletVare/", token.authenticate, brugerCont.sletVare);

// router.get("/alleVarer", frontendCont.alleVarerSide);

// // Admin
// router.get("/Adminside", frontendCont.adminSide);

// router.get("/admin/erAdmin", token.authenticate, adminCont.ErAdmin);

// router.get("/admin/alleVarersPre", token.authenticate, adminCont.fetchAlleVaresPre);

// router.get("/admin/bruger", frontendCont.adminBruger);

// module.exports = router;