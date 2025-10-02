class Parent{
    constructor(){
        this.a = [10,20,30,40,50,60,60,70,80,90,100]
    }
}
class Child1 extends Parent{
    display(){
        console.log(this.a)
    }
}
class Child2 extends Child1{
    reverse() {
        this.a.reverse()
    }
}
var obj = new Child2()
console.log("Original Array is :")
obj.display()

obj.reverse()
console.log("Reversed Array is :")
obj.display()