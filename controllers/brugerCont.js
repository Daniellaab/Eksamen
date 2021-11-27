const db_file = require("../helpers/db");
const user_model = require("../models/bruger");
const utilities = require("../helpers/token");

//Billede funkt
var http = require('http'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs');                                                    
const { type } = require("os");

const db = new db_file.DB();

exports.opretBruger = function(request, response) {
    let postData = request.body;

    const userData = JSON.parse(postData.user)
    
    if (!brugerData.fornavn) {
        response.status(400)
        return response.json({ "error": "Indtast dit fornavn" });
    };
    if (!brugerData.efternavn) {
        response.status(400)
        return response.json({ "error": "Indtast dit efternavn" });
    };
    if (!brugerData.email) {
        response.status(400)
        return response.json({ "error": "Indtast din email" });
    };
    if (!brugerData.kode) {
        response.status(400)
        return response.json({ "error": "Indtast din kode" });
    };

    var alleBrugere = db.loadDb();

    if(alleBrugere.some(item => item.email === brugerData.email)) {
        response.status(400);
        return response.json({ "error": "Emailen er allerede i brug" });
    }
    //Nyt Id
    let newId;

    while (true) {
        newId = token.create_uuidv4();
        if (!alleBrugere.some(item => item._id === newId)) { 
            break;
        }
    }

exports.loginBruger = function(request, response) {
    try {
        const alleBrugere = db.loadDb();
        var fundetBruger = null;
        for (let user_i = 0; user_i < alleBrugere.length; user_i++) {
            if (alleBrugere[user_i].email == request.body.email) {
                if (alleBrugere[user_i].password == request.body.kode) {
                  fundetBruger = alleBrugere[user_i];
                    break;
                }
            }
        }
        if (fundetBruger == null) {
            response.status(403);
            return response.json({ message: "Ugyldigt login" });
        }

        var newToken = utilities.generateToken(fundetBruger._id);
        response.status(200);
        return response.json({ token: newToken, bruger: { ...token.createSaveBruger(fundetBruger) } });

    } catch (err) {
        response.status(500);
        return response.json("ERROR:\n" + err,);
    };
};

exports.deleteBruger = function(request, response)  {
    const bruger = db.getBruger(request._id);
    var idToDelete = null;
    if(request.params.who === "mig"){
        idToDelete = request._id;
    } else if(bruger.ErAdmin){
        idToDelete = request.params.who;
    } else {
        response.status(400);
        return response.json({ "status": "error" });
    }

    try {
        const slettede_bruger = db.delete(idToDelete);
        if (slettede_bruger) {
            response.status(200);
            return response.json({ "status": "ok" });
        } else {
            response.status(400);
            return response.json({ "status": "error" });
        }
        
    } catch (err) {
        response.status(500);
        return response.json("ERROR:\n" + err);
    };
};

exports.opdaterBruger = function(request, response) {
    let postData = request.body;
    try {

        var gammel_bruger = postData.updateId ? db.getUser(postData.updateId) : db.getUser(request._id);
        let newUser = new user_model.User(
            postData.firstName,
            postData.lastName,
            gammel_bruger.email,
            postData.kode ? postData.kode : gammel_bruger.kode,
        );
    
        db.writeObj(nyBruger);

        response.status(200);
        return response.json({ user: token.createSaveBruger(nyBruger) });

    } catch (err) {
        response.status(500);
        return response.json("ERROR:\n" + err,);
    };
}};