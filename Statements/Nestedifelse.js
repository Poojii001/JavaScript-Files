// var a = Number(prompt("Enter the first number"))
// var b = Number(prompt("Enter the second number"))
// var c = Number(prompt("Enter the third number"))

// if (a < b) {
//     if (a < c)
//         document.writeln(`${a} is smallest`)
//     else
//         document.writeln(`${c} is smallest`)
// }
// else {
//     if (b < c)
//         document.writeln(`${b} is smallest`)
// }

//WAP to check whether a year is a leap year or not
// var year = Number(prompt("Enter the year"))
// if (year % 4 == 0 && year % 100 !== 0 && year % 400 == 0) {
//     document.writeln(`${year} is leap year`)

// }
// else{
//     document.writeln(`${year} is not leap year`)
// }


//WAP to check whether an entered number is divisible by 2 and 3 or not.
var num = Number(prompt("Enter the first number"))
// var num2 = Number(prompt("Enter the Second number"))

if(num%2==0){
    if(num%3==0)
        document.writeln(`${num} is divible 2 and 3`)
    else
        document.writeln(`${num} is not divisible by 3`)
}
else{
    document.writeln(`${num} is not divisible by 2 and 3`)
}