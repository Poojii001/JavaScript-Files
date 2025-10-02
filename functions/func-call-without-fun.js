function fun1(){
    console.log("In fun1 function")
    fun2()
    console.log("Back to fun1 function")
}
function fun2(){
    console.log("In fun2 function")
    fun3()
    console.log("Back to fun2 function")
}
function fun3(){
    console.log("In fun3 function")
}
console.log("In main global scope")
fun1()
console.log("Back to main global scope")