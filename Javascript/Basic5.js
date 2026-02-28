//Create a generic class Person, then create a class Student that extends Person.
class Person{
    constructor(name){
        this.name = name
    }
}
class Student extends Person{

    constructor(name,marks){
        super(name)
        this.marks = marks
    }
    getResults(){
        return this.name+" - "+this.marks

    }
}
let student1 = new Student ("Arthi",80)
let student2 = new Student ("Aadhira",100)
console.log(student1.getResults())
console.log(student2.getResults())