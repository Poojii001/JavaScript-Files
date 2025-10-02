var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    set setSalary(num) {
        this.salary = num
    },
    get display() {
        console.log(`
            Employee Id     :  ${this.id}
            Name            :  ${this.name}
            Designation     :  ${this.dsg}
            Salary          :  ${this.salary}
            `)
    }
}
emp.setSalary = 167899
emp.display