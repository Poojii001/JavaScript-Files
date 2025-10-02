//WAP to check whether anumber is NEON number or not.
var num = Number(prompt("Enter the number :"))
let sum = 0
let square = num * num
while (square != 0) {
    let digit = square % 10;
    sum = sum + digit
    square = parseInt(square / 10)
}
    if (sum == num) 
        document.writeln(`The number ${num} is NEON number `)    
    else
        document.writeln(`The number ${num} is not a NEON number `)
