var express = require("express");
var app = express();
require ("../models/burger.js");

module.exports = function(app, path) {
   
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    })

    app.get("", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    })
};