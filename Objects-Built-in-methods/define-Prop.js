var emp = {
    id   : 1001,
    name  :"Nitin Chauhan",
    dsg   : "Trainer",
    salary: 18900,
    city  : "Faridabad",
    state : "Haryana"
}

Object.defineProperty(emp,"email",{
    value  : "vishankChauhan@gmail.com",
    writable : false,
    configurable : false,
    enumerable   : true
})
console.log(emp)
emp.email = "test"
console.log(emp)