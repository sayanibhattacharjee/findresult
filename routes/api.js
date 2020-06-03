var express = require("express");
var resultRouter = require("./result");

var app = express();

app.use("/getResult/", resultRouter)

module.exports = app;