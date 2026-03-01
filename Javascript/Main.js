class Gratuate {

    constructor(canditate) {
        this.canditate = canditate
    }
}

class Reports extends Gratuate {

    constructor(canditate, mark) {
        super(canditate)
        this.mark = mark
    }

    getResults() {

        return this.canditate + " - " + this.mark

    }
}

let student1 = new Reports("Arthi", 80)
let student2 = new Reports("Aadhira", 75)
console.log(student1.getResults())
console.log(student2.getResults())