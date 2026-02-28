
module.exports = class Employee
{
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }
    increaseSalary(amount){
        this.salary += amount

    }
    getDetails(){
        return this.name +"-"+this.salary
    }

 }

//  let newsalary = new Employee("Arthi", 5000)
//  newsalary.increaseSalary(5000)
//  console.log(newsalary.getDetails())