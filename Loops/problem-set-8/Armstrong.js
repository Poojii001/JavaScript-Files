var num= Number (prompt("Enter the Number::"))
var n = num
let sum = 0
while(num != 0){
    let digit = num % 10
    sum = sum+digit*digit*digit
    num = parseInt(num/10)
}
if(sum==n)
    document.writeln(`The number is Armstrong ${sum}`)

else
    document.writeln(`The number is not  a Armstrong ${sum}`)
