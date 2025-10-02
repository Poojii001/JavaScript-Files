// class Test{
//     constructor(){
//         console.log("Constructor class Test ")
//     }
//     show(){
//         console.log("In show() Test class ")
//     }

//      display(){
//         console.log("In display() of Test class")
//     }
// }
// var obj = new Test()
// obj.show()
// obj.display()

// 2.
// class Add {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//         this.sum = a + b
//     }
//     display() {
//         console.log(`${this.a} + ${this.b} = ${this.sum}`)
//     }
// }
// var obj1 = new Add(10, 20)
// var obj2 = new Add(100, 200)
// var obj3 = new Add()

// obj1.display()
// obj2.display()
// obj3.display()


class Add {
    constructor(a=0, b=0) {
        this.a = a
        this.b = b
        this.sum = a + b
    }
    display() {
        console.log(`${this.a} + ${this.b} = ${this.sum}`)
    }
}
var obj1 = new Add(10, 20)
var obj2 = new Add(100, 200)
var obj3 = new Add()

obj1.display()
obj2.display()
obj3.display()
