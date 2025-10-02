
var emp = {
    id   : 1001,
    name  :"Nitin Chauhan",
    dsg   : "Trainer",
    salary: 18900,
    city  : "Faridabad",
    state : "Haryana"
}
var emp2 = {}
emp2 = Object.assign(emp,emp2)
console.log(emp2)

var emp2 = Object.create(emp2)
console.log(emp2)
console.log(emp.id)
console.log(emp.name)
console.log(emp.dsg)
