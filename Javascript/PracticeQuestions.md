1. **Question 1 - Can a Javascript object hold a function as a property? Explain with an example.**
const student = {
    name: "Arthi",
    age: 30,
    mark: 50,
    result() {
        if (this.mark > 35) {
            return "Pass"
        }
        else {
            return "Fail"
        }
    }

}
student.result = student.mark > 35 ? "Pass":"Fail";

console.log(student.result())

2. **Question 2 - What are anonymous functions in Javascript? Define their syntax and implementation.**

An anonymous function is a function without a name. It is usually assigned to a variable or used as a callback. These functions are commonly used in JavaScript for event handling, asynchronous operations, and array methods.

const greet = function () {
    console.log("Hello");
};

greet();

//function () {} → anonymous function

//stored inside variable greet

test("Login test", async ({ page }) => {
    await page.goto("https://example.com");
});

async ({ page }) => {} is an anonymous function.

3. **what is the difference between var, const and let? explain with an example.**

var, let, and const are used to declare variables in JavaScript.
var is globally or function scoped and allows redeclaration.
let is block scoped and allows reassignment but not redeclaration.
const is block scoped and cannot be reassigned after initialization.

Use const by default
Use let when value must change
Avoid var

const titles = await this.productsText.allTextContents();
let count = await this.products.count();

for (let i = 0; i < count; i++) {
  console.log(titles[i]);
}

4. **Where are the push,pop,slice,shift and unshift methods used when accessing array elements?**

push() adds elements to the end of an array, pop() removes the last element, shift() removes the first element, unshift() adds elements to the beginning, and slice() returns a portion of the array without modifying the original array.

**Splice method**
splice() is used to add, remove, or replace elements in an array and it modifies the original array.

const expectedProducts = [
"ZARA COAT 3",
"ADIDAS ORIGINAL",
"IPHONE 13"
];

expectedProducts.splice(1,1);

["ZARA COAT 3", "IPHONE 13"]

5. **Is javascript asynchronous? Prove with example.**

JavaScript is single-threaded and synchronous by default, but it supports asynchronous programming through the event loop using callbacks, promises, and async/await.

6. **What are callback functions in Javascript?**

A function passed into another function to be executed later.

1. Synchronous code
2. Microtasks (Promises)
3. Macrotasks (setTimeout, setInterval)

7. **Why are callbacks important in JavaScript?**

Because JavaScript is asynchronous and callbacks allow code to run after an operation finishes.

8. **What are Promises in Javascript? Explain the difference between callback function and promises with an example.**

Callbacks are functions passed as arguments. They work fine for simple tasks but get messy quickly when chaining multiple actions.

Promises are objects representing future values. They provide a cleaner, flatter syntax (.then().catch()) and make error handling much easier across multiple asynchronous steps.

Callbacks  →  Promises  →  Async/Await
(old)         (improved)    (modern & cleaner)

Earlier JavaScript relied heavily on callbacks for asynchronous operations, but this often caused callback hell and difficult error handling. Modern JavaScript uses Promises and async/await. Async/await is built on top of Promises and makes asynchronous code easier to read and maintain, although JavaScript remains asynchronous internally.

JavaScript itself is asynchronous, so we cannot truly make it synchronous. However, we can write code in a sequential manner using async/await.

9. **Create an Inheritance relationship between a parent and child class invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.**

**Explain how the super and this keywords help achieve the solution.**

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

10. **What is the difference between == and === ?**
console.log(5 == "5") - true
console.log(5 === "5") - false

- Loose Equality - == compares values only after type conversion
- Strict Equality - === compares both value and type without conversion

11. **What is the difference between null and undefined in Javascript?**
undefined means: A variable has been declared but not assigned a value yet.
null means: An intentional empty value assigned by the developer.

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

12. **A classic programming interview question that involves using array methods(filter,map,reduce) and Javascript objects.**
const students = [{

    name: "Arthi",
    score: 12
},
{
    name: "Aadhira",
    score: 45
}, {
    name: "Anand",
    score: 55
},
{
    name: "Mahes",
    score: 36
}]

const passedStudents = students.filter(student => student.score >= 36)
console.log(passedStudents)

const BoldpassedStudents = passedStudents.map(student => ({
    name: student.name.toUpperCase(),
    score: student.score

}))
console.log(BoldpassedStudents)

const totalscores = passedStudents.reduce((totalscore, student) => totalscore + student.score, 0)
console.log(totalscores)
