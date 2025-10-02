//WAP to chaeck whether a number a number is perfect number or not

var num = Number(prompt("Enter the Number "))
var sum = 0
for (var i = 1; i <= num / 2; i++) {
    if (num % i == 0)
        sum = sum + i
}
if (sum == num)
    document.writeln(`${num} is perfect number`)
else
    document.writeln(`${num} is not perfect number`)