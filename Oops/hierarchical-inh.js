class Parent {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}
class Add extends Parent {
    display() {
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`)
    }
}

class sub extends Parent {
    display() {
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`)
    }
}

class mul extends Parent {
    display() {
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`)
    }
}

class div extends Parent {
    display() {
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`)
    }
}

class mod extends Parent {
    display() {
        console.log(`${this.a} % ${this.b} = ${this.a % this.b}`)
    }
}

class pow extends Parent {
    display() {
        console.log(`${this.a} ** ${this.b} = ${this.a ** this.b}`)
    }
}

var obj1 = new Add(10, 20)
var obj2 = new sub(10, 20)
var obj3 = new mul(10, 20)
var obj4 = new div(10, 20)
var obj5 = new mod(10, 20)
var obj6 = new pow(10, 20000)

obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()