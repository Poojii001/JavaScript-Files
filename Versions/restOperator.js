function test(a, b, c, ...x) {
    console.log(`a = ${a} b = ${b} c = ${c} and Extra = ${x}`)
}
test(10, 20, 30)
test(10, 20, 30, 40)
test(10, 20, 30, 40, 50,60)
test(10, 20, 30, 40, 50, 60)
test(10, 20, 30, 40, 50, 60, 70)
test(10, 20, 30, 40, 50, 60, 60, 70)

