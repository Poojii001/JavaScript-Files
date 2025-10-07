// use Strict
// "use strict"
// var a= 10
// console.log(a)

// "use strict"
// var a = 10
// console.log(a)
// delete a
// console.log(a)

// var a= 10
// function outer() {
//     var b = 20
//     function inner(){
//         c = 30
//         console.log(`In inner function a = ${a} b = ${b} and c = ${c}`)
//     }
//     inner()
//     console.log(`In inner function a = ${a} b = ${b} `)
// }
// outer()
// console.log(`In inner function a = ${a}`)


// closure
var a= 10
function outer() {
    var b = 20
    function inner(){
        c = 30
        console.log(`In inner function a = ${a} b = ${b} and c = ${c}`)
    }
    return inner
   
}
var cl =  outer()
cl()
cl()
cl()
cl()
cl()
