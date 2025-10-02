//WAP to print sum of even and odd Number in specific range 

var start = Number(prompt("Enter the start number :"))
var end = Number(prompt("Enter the end number :"))


var evenSum = 0
var oddSum = 0
for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        evenSum += i
    }
    else {
        oddSum += i
    }
}
document.writeln(`The sum of even numbers between the given range is : ${evenSum}`)
document.writeln(`The sum of even numbers between the given range is : ${oddSum}`)


