function add() {
    var a = 10
    var b = 20
    var sum = a + b
    return sum
}
function test() {
    var s = add()
    console.log(`sum= ${s}`)
    // console.log(`sum=${add()}`)
}
test()