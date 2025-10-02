var num = Number(prompt("Enter Number"))
fact=1
for(var i=1; i<=num;i++){
    fact =fact*i
}
document.writeln(`The Factorial of ${num} is : ${fact}`)