

// Function without return value without parameter.


//1. WAP to print sum of Number in a range.

// sum = 0
// function range(){
//     var a=1
//     var b=7
// for (var i = a; i <= b; i++) {
//     sum = sum + i 
// }
// console.log(`The sum of number between the range= ${sum}`)
// }
// range()






// //2. WAP to print sum of even and odd Numbers in a specific range.

// function add() {
//     var a = 2
//     var b = 10
//     var evenSum = 0
//     var oddSum = 0

//     for (var i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             evenSum += i
//         }
//         else {
//             oddSum += i
//         }
//     }
//     console.log(`sum of even values= ${evenSum}, sum of odd values=${oddSum}`)
// }
// add()


//3. WAP to print factorial of any specific number .
// function fact() {
//     fact = 1
//     var num = Number(prompt("Enter the number"))
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i
//     }
//     // console.log(`Factorial of specific number =${fact}`)
//     document.writeln(`The factorial of a specific number = ${fact}`)
// }
// fact()


//4. Wap to check whether a number is perfect num or not.

var sum = 0
function perfect() {
    var num = 8
    for (var i = 1; i <= num / 2; i++) {
        if (num % i == 0)
            sum = sum + i
    }
    if (sum == num)
        console.log(`${num} is a perfect number square.`)
    else
        console.log(`${num} is a not perfect number square.`)
}
perfect()