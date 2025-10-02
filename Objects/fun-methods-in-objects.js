// var test = {
//     a: 10,
//     b: 20,
//     display1() {
//         console.log(`In display1 function a = ${test.a} and b = ${test.b}`)
//     },

//     display2() {
//         console.log(`In display2 function a = ${this.a} and b = ${this.b}`)
//     },


//     display3: function () {
//         console.log(`In display3 function a = ${test.a} and b = ${test.b}`)
//     },
//     display4: function () {
//         console.log(`In display4 function a = ${this.a} and b = ${this.b}`)
//     },


//     display5: () => 
//         console.log(`In display5 function a = ${test.a} and b = ${test.b}`),

//     display6: () => {
//         console.log(`In display5 function a = ${this.a} and b = ${this.b}`)
//     },
// }
// test.display1()
// test.display2()
// test.display3()
// test.display4()
// test.display5()
// test.display6()



// 2nd type

var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    basicSalary: 877622,
    city: "Faridabad",
    state: "Hariyana",
    calculation() {
        this.ta = this.basicSalary * 10 / 100
        this.da = this.basicSalary * 15 / 100
        this.hra = this.basicSalary * 50 / 100
        this.ma = this.basicSalary * 12 / 100
        this.gross = this.basicSalary + this.ta + this.hra + this.ma
        this.itax = this.gross * 15 / 100
        this.net = this.gross - this.itax
    },
    display() {
        console.log(`
            Employee Id   :  ${this.id}
            Name          :  ${this.name}
            Designation   :  ${this.dsg}
            City          :  ${this.city}
            State         :  ${this.state}
            Basic Salary  :  ${this.basicSalary}
            Ta            :  ${this.ta}
            Da            :  ${this.da}
            Hra           :  ${this.hra}
            Ma            :  ${this.ma}
            Gross         :  ${this.gross}
            Income Tax    :  ${this.itax}
            Net Salary    :  ${this.net}
            `)
    }
}
emp.calculation()
emp.display()