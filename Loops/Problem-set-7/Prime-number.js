//WAP to check whether a number is prime or not


var num = Number(prompt("Enter the Number "))
var flag = 0
for (var i = 1; i <= num / 2; i++) {
    if (num % i == 0){
        flag = true
        break
    }
}
if (flag == false && num>=2)
    document.writeln(`${num} is prime`)
else
    document.writeln(`${num} is not prime`)