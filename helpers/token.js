//Kilde: https://www.npmjs.com/package/jsonwebtoken 
const jwt = require("jsonwebtoken");
const db_file = require("../helpers/db");

const db = new db_file.DB();

exports.createSaveBruger = function(bruger) {
    if (!bruger) {
        return null;
    }

    return {
        _id: bruger._id,
        fornavn: bruger.fornavn,
        efternavn: bruger.efternavn,
        email: bruger.email
    };
}

exports.generateToken = function(_id) {
    return jwt.sign(_id.toString(), process.env.TOKEN_SCERET);
}

//Random token 
exports.create_uuidv4 = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

exports.authenticate = function (request, response, next) {
    const authHeader = request.headers["authorization"];
    if (authHeader == null) {
        return response.sendStatus(401);
    }

    jwt.verify(authHeader, process.env.TOKEN_SCERET, (err, _id) => {
        if (err) {
            return response.sendStatus(403);
        }
        request._id = _id;
        next();
    })
}
