var emp = {
    id :1001,
    name:"Pooja",
    dsg:"student",
    salary:1000,
    city :"Lucknow",
    state :"UP"
}
let{id,name,...x} = emp
console.log(id)
console.log(name)
console.log(x)