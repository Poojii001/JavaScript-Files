var emp = {
    id   : 1001,
    name  :"Nitin Chauhan",
    dsg   : "Trainer",
    salary: 18900,
    city  : "Faridabad",
    state : "Haryana"
}

// var obj = {
//     cmp : "Ducat"
// }
// Object.setPrototypeOf(emp,obj)
// console.log(emp)



//12.  Object.getPrototypeOf(emp)

// console.log(Object.getPrototypeOf(emp))


// 13. Object.is =compare

console.log(Object.is(emp.id,"1001"))
console.log(Object.is(emp.id,1001))