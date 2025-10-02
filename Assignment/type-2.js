// Function with return value without parameter
// 5.WAp to check whether  a number  is prime or not.

// var flag = 0
// var num = 7
// function prime() {
//     var i = 1

//     while (i <= num / 2) {
//         if (num % i == 0) {
//             flag = true
//             break
//         }
//     }
//     return num

// }
// if (flag == false && num >= 2)
//     console.log(`${num} is prime`)
// else
//     console.log(`${num} is not prime`)
// prime()


// 6.Wap to calculate sum of even and odd digits of a specific number.
// var num = 407857
// var evensum = 0
// var oddsum = 0
// function sum() {
//     while (num !== 0) {
//         let r = num % 10
//         if (r % 2 == 0) {
//             evensum = evensum + r
//         }
//         else {
//             oddsum = oddsum + r
//         }
//         num = parseInt(num / 10)
//     }
//     return evensum, oddsum;
// }
// sum()
// console.log(`sum of even digits= ${evensum}, sum of odd digits=${oddsum}`)

// function test() {
//     var s = sum()
//     console.log(`sum= ${s}`)
// }
// test()


// 7.WAP to count even and odd digits in a number .

// var num = 1589564
// var evencount = 0
// var oddcount = 0
// function sum() {
//     while (num !== 0) {
//         let r = num % 10
//         if (r % 2 == 0) {
//             evencount++
//         }
//         else {
//             oddcount++
//         }
//         num = parseInt(num / 10)
//     }
//     return evencount, oddcount
// }
// sum()

// console.log(`sum of even digits= ${evencount}, sum of odd digits=${oddcount}`)

// 8.WAP to reverse a number.

// var num = 12376
// var rev = 0
// function reverse() {

//     while (num !== 0) {
//         let r = num % 10
//         rev = rev * 10 + r
//         num = parseInt(num / 10) 
//     }
//     return rev
// }
// function test() {
//     var r = reverse()
//         console.log(`Reverse of number = ${r}`)   
// }
// test()

