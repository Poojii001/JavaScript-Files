// var a=1
// function test(){
//     console.log("In test function")
//     a++
//     if(a<=5)
//     test()
//     console.log("Back to the test function")
// }
// console.log("In main global scope")
// test()
// console.log("Back to main global scope")

// ------------------------------------------------------------------------------------------------------------------

// function test(a) {
//     console.log("In test function")
//     a++
//     if(a<=5)
//         test(a)
//     console.log("Back to test")
// }
// console.log("In main global")
// test(1)
// console.log("Back to main global scope")



// Recursion
// ==========
// function fact(num) {
//     if (num <= 1)
//         return 1
//     else
//         return num* fact(num-1)
// }
// console.log(fact(4))
// console.log(fact(5))
// console.log(fact(6))
// console.log(fact(7))
// console.log(fact(8))

//Sum of digits
function sumDigit(num) {
    if (num === 0)
        return 0
    else
        return num % 10 + sumDigit(parseInt(num / 10))
}
console.log(sumDigit(2435))
console.log(sumDigit(2438875))
console.log(sumDigit(2980))
console.log(sumDigit(90765))
