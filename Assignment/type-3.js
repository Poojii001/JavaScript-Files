// // Function without return value with parameter
// 9.WAP to check whether a number is NEON number or not.(1,9)
// var num = 1
// var sum = 0
// let square = num * num
// function NEON(x) {
//     while (square != 0) {
//         let digit = square % 10;
//         sum = sum + digit
//         square = parseInt(square / 10)
//     }
//     if (sum == num)
//         console.log(`The number ${num} is NEON number `)
//     else
//         console.log(`The number ${num} is not a NEON number `)
// }
// NEON(1)
// function test() {
//     var a = 1
//     NEON(a)
// }
// test()



// 10.WAP to check whether a number is Armstrong number or not.(1,153)
// var num= 153
// var n = num
// let sum = 0
// function Armstrong(num) {

//     while(num != 0){
//         let digit = num % 10
//         sum = sum+digit*digit*digit
//         num = parseInt(num/10)
//     }
//     if(sum==n)
//         console.log(`The number is Armstrong ${sum}`)
//     else
//         console.log(`The number is not  a Armstrong ${sum}`)    
// }
// Armstrong(153)



// 11.WAP to check whether a number is Palindrome number or not.

// function Palindrome(x) {
//     let i = x
//     while (i <= x) {
//         let rev = 0
//         let num = i
//         while (num != 0) {
//             let r = num % 10
//             rev = rev * 10 + r
//             num = parseInt(num / 10)
//         }
//         if (rev === i) {
//             console.log(`the number is palindrome=${i}`)
//         }
//         else {
//             console.log(`The number is not palindrome=${i}`)
//         }
//         i++
//     }

// }
// Palindrome(121)



// // 12.WAP to check whether a number is magical number or not.(81,1458)

function Magical(num) {
    var n = num
    var sum = 0
    while (num != 0) {
        let r = num % 10
        sum = sum + r
        num = parseInt(num / 10)
    }
    let rev = 0
    num = sum
    while (num != 0) {
        let r = num % 10
        rev = rev * 10 + r
        num = parseInt(num / 10)
    }
    if (sum * rev === n)
        console.log(`${n} is a magical number`)
    else
        console.log(`${n} is not a magical number`)
}
Magical(1458)
