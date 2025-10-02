var emp = {
    id   : 1001,
    name  :"Nitin Chauhan",
    dsg   : "Trainer",
    salary: 18900,
    city  : "Faridabad",
    state : "Haryana"
}

console.log(Object.getOwnPropertyDescriptor(emp,"id"))
console.log(Object.getOwnPropertyDescriptor(emp,"name"))
console.log(Object.getOwnPropertyDescriptor(emp,"dsg"))
console.log(Object.getOwnPropertyDescriptor(emp,"salary"))