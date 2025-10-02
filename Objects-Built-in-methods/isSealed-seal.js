var emp = {
    id   : 1001,
    name  :"Nitin Chauhan",
    dsg   : "Trainer",
    salary: 18900,
    city  : "Faridabad",
    state : "Haryana"
}
Object.seal(emp)
console.log(Object.isSealed(emp))
emp.email = "vishankChauhan@gmail.com"
emp.city = "Noida"
delete emp.state
console.log(emp)