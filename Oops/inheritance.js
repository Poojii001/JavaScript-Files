// class Test{
//     show1(){
//         console.log("In show1() of test class")
//     }
//     display(){        //Overridden Method
//         console.log("In display() of test class")
//     }
// }

// class Child extends Test {
//     show2(){
//         console.log("In show2  of child class")
//     }
//     display(){
//         console.log("In display() of child class")
//     }
// }
// var obj = new Child()
// obj.show1()
// obj.show2()
// obj.display()


//Accessing the overridden methods
// class Test{
//     display(){
//         console.log("In display() of test class")
//     }
// }
// class Child extends Test {
//     display() {
//         super.display()   //Accessing overridden
//         console.log("In display() of child class")
//     }
// }
// var obj = new Child()
// obj.display()


// constructor in parent class
// class Test {
//     constructor() {
//         console.log("Constructing class test")
//     }
//     show() {
//         console.log("In show() of test class ")
//     }
// }
// class Child extends Test {
//     display() {
//         console.log("In display() of child class")
//     }
// }
// var obj = new Child()
// obj.show()
// obj.display()



// constructor in child class

class Test{
    show(){
        console.log("In show of test class")
    }
}

class Child extends Test{
    constructor(){
        super()
        console.log("Constructing the child class ")
    }
    display() {
        console.log("In display() of child class")
    }
}
var obj = new Child()
obj.show()
obj.display()