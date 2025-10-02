// function test(fun) {
//     console.log("In higher order function test")
//     fun()
//     fun()
//     fun()
//     console.log("Back to higher order function test")
// }
//     function callback() {
//         console.log("In callback function")
//     }
//     test(callback)
// ----------------------------------------------------------------------------------------------------------------

function test(fun){
    console.log("In higher order function test")
    fun()
    fun()
    fun()
    console.log("Back to the higher order function test")
}
// test (function callback(){
//     console.log("In callback fun")
// })

// test(function() {
//     console.log("In callback fun")
// })

test( ()=>console.log("In callback function"))