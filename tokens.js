//Output Instructions

var a = 10
var b = 20
var sum = a + b
console.log(a, "+", b, "=", sum)
console.log(a + "+" + b + "=" + sum)
console.log(`
    ${a}
    +${b}
    =${sum}`)  //string template literal



//Input Instructions

var a = Number(prompt("Enter the First number :"))
var b = Number(prompt("Enter the Second number :"))

sum = a + b

document.writeln('${a} +${b} =${sum}');