const express = require("express");

const routerApp = express.Router();

const controllernombre =
require("../controller/nombreController");


routerApp.get("/", (req, res)=>{
    res.render('index', { listenbr : controllernombre.liste, result : controllernombre.resulat, timer : controllernombre.temps})
})


module.exports = routerApp