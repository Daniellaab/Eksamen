const express = require("express");
const routes = express.Router();

router.post("/opret", (req, res) => {
    console.log(req,body);    
});

routes.get("/", (req, res) => {
    res.status(200).send(true);
});