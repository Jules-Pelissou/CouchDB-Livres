class Nbrs {
    #nbrmax
    #listenombre
    #secondes
    constructor(nbrmax) {
        this.#nbrmax = nbrmax
        this.#listenombre = []
        this.#secondes = 30
    }

    get nbrmax() {
        return this.#nbrmax
    }

    get listenombre() {
        return this.#listenombre
    }

    get secondes() {
        return this.#secondes
    }

    creaListe(listenombre, nbrmax) {
        listenombre = [1,2,3,4,2,3]

        // Ne fonctionne pas

        // while (listenombre.length < nbrmax){
        // let randi = Math.floor(Math.random() * 1000)
        // listenombre.push(randi);
        // }
        return listenombre
    }
    calculRep(listenombre) {
        var result = listenombre.reduce(function (acc, current) {
            return acc + current;
        }, 0);
        return result
    }

    timer(){
    this.#secondes--
    return this.#secondes
}
}

// Export de la classe

module.exports.Nbrs = Nbrs