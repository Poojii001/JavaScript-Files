class Test{
    constructor (a,b){
        this.a = a
        this.b = b

    }
}
class Child extends Test{
    display(){
        console.log(`In display a = ${this.a} and b = ${this.b}`)
    }
}
var obj = new Child(100,200)
obj.display()