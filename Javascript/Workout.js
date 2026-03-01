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