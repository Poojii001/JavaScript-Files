// var a = [[10,20,30],40,[50,60,70],[80,90,100]]
// console.log(a.flat(1))
// console.log(a.flat(1).map(x=>x*5))



// var a = [[[10,20,30],40,[50,60,70],[80,90,100]]]
// console.log(a.flat(2))
// console.log(a.flat(2).map(x=>x*5))



var a = [[[[10,20,30],40,[50,60,70],[80,90,100]]]]
console.log(a.flat(3))
console.log(a.flat(3).map(x=>x*5))



var a = [[[[[[[[[[[[[[[[[[[[[[10,20,30],40,[50,60,70],[80,90,100]]]]]]]]]]]]]]]]]]]]]]
console.log(a.flat(Infinity))
console.log(a.flat(Infinity).map(x=>x*5))


