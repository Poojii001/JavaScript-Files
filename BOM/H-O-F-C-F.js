function test(fun){
    console.log("In higher order test function")
    fun()
    console.log("Back to the higher order function")
}
function sample(){
    console.log("In callback function sample")
}
test(sample)