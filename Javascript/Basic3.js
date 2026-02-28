class Vehicle {
    constructor(brand){
        this.brand = brand
    }

    start(){
        return "Vehicle started"
    }
}

class car extends Vehicle{

    constructor(brand,model){
        super(brand)
        this.model = model
    }

    getDetails(){
    return this.brand+" "+this.model
   }
}

let newcar = new car ("Honda","City")
console.log(newcar.start())
console.log(newcar.getDetails())

