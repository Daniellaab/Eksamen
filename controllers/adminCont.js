const db_file = require("../helpers/db");
const bruger_model = require("../models/bruger");
const utilities = require("../helpers/token");
const bruger = require("../models/bruger");

const db = new db_file.DB();

exports.ErAdmin = function(request, response) {
    const user = db.getUser(request._id);  
    return response.json({ ErAdmin: bruger.ErAdmin});
}

exports.fetchAlleVaresPre = function(request, response) {
    const alleVarer = db.loadDb();
    var AlleVaresPre = [];
    var vareAntal = 0;

    for(var i = 0; i < alleVarer.length; i++) {
        AlleVaresPre.push({
            _id: alleVarer[i]._id,
            vare_navne: alleVarer[i].pris,
            ErAdmin: alleVarer[i].ErAdmin
        })
        vareAntal += alleVarer[i].varer.length
    }

    return response.json({ vareAntal: Math.round(vareAntal/2), AlleVaresPre: AlleVaresPre});
}


