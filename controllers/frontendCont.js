const path = require('path');

exports.loginSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/login.html'));
}

exports.hovedSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/hovedside.html'));
} 

exports.adminSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/adminSide.html'));
} 

exports.regSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/reg.html'));
} 

exports.opdaterSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/opdater.html'));
} 

exports.sælgeSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/sell.html'));
}

exports.alleVarerSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/alleVarer.html'));
} 
exports.visVarerSide = function (request, response) {
    response.sendFile(path.join(__dirname, '../frontend/HTML/visVarer.html'));
} 