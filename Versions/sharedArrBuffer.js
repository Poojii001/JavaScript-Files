async function * test(){
    setTimeout(() => {
        console.log("Hello world1")
    },1000)
    yield 1 
    setTimeout(() => {
        console.log("Hello world2")
    },3000)
    yield 2
    setTimeout(() => {
        console.log("Hello world3")
    },4000)
    yield 3
    setTimeout(() => {
        console.log("Hello world4")
    },5000)
    yield 4
    setTimeout(() => {
        console.log("Hello world5")
    },6000)
    yield 5
}
async function sample(){
    for await(let i of test()){
        console.log(i)
    }
}
sample()