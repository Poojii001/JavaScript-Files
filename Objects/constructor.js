var Employee = function(id, name, dsg, salary, city, state){
    this.id   =  id
    this.name = name
    this.dsg  = dsg
    this.city = city
    this.state = state
    this.cmp = "Ducat"
}
var emp1 = new Employee(1001,"Sumit","Trainer",76800,"Noida","UP") 
var emp2 = new Employee(1002,"Nitin","Trainer",189000,"Faridabad","Haryana") 
var emp3 = new Employee(1003,"Pooja","Trainer",76580,"Kanpur","UP")
console.log(emp1) 
console.log(emp2) 
console.log(emp3) 