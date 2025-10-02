//WAP to calculate sum of even and odd digits of a specific number.

var num = Number(prompt("Enter the number : "))
var given = num
var evensum = 0
var oddsum = 0
while(num !==0 ){
       let r = num % 10
       if(r % 2 == 0){
              evensum = evensum + r
       }
       else{
              oddsum = oddsum + r
       }
       num= parseInt(num/10)
}
document.writeln(`<br> The given number is: ${given}`)
document.writeln(`<br> The sum of even digits in the given number is: ${evensum}`)
document.writeln(`<br> The sum of odd digits in the given number is: ${oddsum}`)