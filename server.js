var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var db = require("./config/db");
//mongoose.connect(db.url);
var port = process.env.port || 9000;

app.use(bodyParser.json());

app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({ extended:true}));

app.use(methodOverride("X-HTTP-Method-Override"));

app.use(express.static(__dirname+"/public"));

require("./app/routes")(app);

app.listen(port);

//Will need to implement a db logger to log startup of server

exports = module.exports = app;
