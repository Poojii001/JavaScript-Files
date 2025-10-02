var Employee = function (id, name, dsg, salary, city, state) {
    this.id = id
    this.name = name
    this.dsg = dsg
    this.salary = salary
    this.city = city
    this.state = state
}
Employee.prototype.cmp = "Ducat"
Employee.prototype.display = function () {
    console.log(`
        Employee Id      :     ${this.id}
        Name             :     ${this.name}
        Designation      :     ${this.dsg}
        Salary           :     ${this.salary}
        city             :     ${this.city}
        State            :     ${this.state}
        company          :     ${this.cmp}
        `)
}
var emp1 = new Employee (1001,"Nitin", "Trainer", 167000, "Faridabad", "Haryana") 
var emp2 = new Employee (1002,"Deepak", "Trainer", 45450, "Lucknow", "UP") 
var emp3 = new Employee (1003,"Sumit", "Trainer", 89790, "Kanpur", "UP") 

emp1.display()
emp2.display()
emp3.display()