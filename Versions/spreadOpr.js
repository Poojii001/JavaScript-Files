function test(a,b,c,d,e,...x){
    console.log(`a=${a} b = ${b} c = ${c} d = ${d} e = ${e} and Extra = ${x}`)
}
var arr = [10,20,30,40,50,60,70]
test(...arr)