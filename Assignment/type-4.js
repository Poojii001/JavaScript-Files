// Function with return value with parameter

// //13. Write to print all perfect numbers(6 ,28, 496,8128)
// function Perfect(start, end) {
//     console.log(`Total Perfect Number from ${start} to ${end} numbers are:`)

//     var num = 6
//     for (let num = start; num <= end; num++) {
//         var sum = 0;
//         for (let i = 1; i < num; i++) {
//             if (num % i === 0) {
//                 sum += i;
//             }
//         }

//         if (sum === num) {
//             console.log(num);
//         }
//     }
//     return num
// }
// Perfect(1, 100)


//14. WAP to print and count all palindrome number in a range.
// function Palindrome(start, end) {
//     var count = 0
//     for (let i = start; i <= end; i++) {
//         let rev = 0
//         let num = i
//         while (num != 0) {
//             let r = num % 10
//             rev = rev * 10 + r
//             num = parseInt(num / 10)
//         }
//         if (rev === i) {
//             count++
//             console.log(`${i}`)
//         }
//     }
//     return count
// }
// function test() {
//     var a = 100
//     var b = 150
//     var p = Palindrome(a, b)
//     console.log(`Total Palindrome Number from ${a} to${b} = ${p}`)
// }
// test()

// 15. Wap to print and count all armstrong numbers.
// function Armstrong(x, y) {
//     var count = 0
//     var sum = 0
//     for (var i = x; i <= y; i++) {
//         let d = 0
//         let num = i
//         while (num != 0) {
//             d++
//             num = parseInt(num / 10)
//         }
//         num = i
//         let sum = 0
//         while (num != 0) {
//             let r = num % 10
//             sum = sum + r ** d
//             num = parseInt(num / 10)
//         }
//         if (sum == i) {
//             count++
//             console.log(`${i}`)
//         }
//     }
//     return count
// }
// function test() {
//     var a = 100
//     var b = 1000
//     var g = Armstrong(a, b)
//     console.log(`Total Armstrong Number from ${a} to ${b} = ${g}`)
// }
// test()

//16. WAP to print all magical numbers.
// function magical(num) {
//     var n=num
//     var sum = 0
//     while(num!=0){
//         let r=num%10
//         sum =sum+r
//         num=parseInt(num/10)
//     }
//     let rev=0
//     num =sum
//     while(num!=0){
//         let r=num%10
//         rev =rev*10+r
//         num=parseInt(num/10)
//     }
//     if(sum*rev==n)
//         console.log(`${n} is a magical number`)
//     else
//         dconsole.log(`${n} is not a magical number`)
// }
// magical(1458)
    

//17. Wap to print and count prime numbers in a range.
function Prime(start,end) {
    for (let i = start; i <= end; i++) {
        var count = 0
        var flag = false
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = true
                break
            }
            
        }
        if (flag === false && i >= 2){
            count++
            console.log(`${i} is a prime number`)
        }
    }
    return count
}
function test(){
    var a = 20
    var b =50
    var p = Prime(a,b)
    
    console.log(` Total number of prime number from ${a} to ${b} = ${p}`)
}
test()

