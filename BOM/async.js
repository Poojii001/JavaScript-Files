function fun1() {
    setTimeout(()=>{ 
        console.log("Hello world1")
    },4000)
}
function fun2() {
    setTimeout(()=> {
        console.log("Hello world2")
    },3000)
}
function fun3() {
    setTimeout(()=> {
        console.log("Hello world3")
    },2000)
}
function fun4() {
    setTimeout(()=> {
        console.log("Hello world4")
    },5000)
}
function fun5() {
    setTimeout(()=> { 
        console.log("Hello world5")
    },1000)
}
fun1()
fun2()
fun3()
fun4()
fun5()