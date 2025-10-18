function * test(){
    console.log("Hello world1")
    yield 1
    console.log("Hello world2")
    yield 2
    console.log("Hello world3")
    yield 3
    console.log("Hello world4")
    yield 4
    console.log("Hello world5")
    yield 5
}
for(let i of test()) {
    console.log(i)
}