const { Nbrs } = require("../classes/Listenombre.js");

const nombres = new Nbrs(6)

let liste = nombres.creaListe()

let resulat = nombres.calculRep(liste)

// Le temps est toujours égal à 4

let temps = setInterval(()=>{
    nombres.timer()
}, 1000)

module.exports = {liste, resulat, temps};