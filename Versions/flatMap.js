var a = [10,20,30,40,50,60,70,80,90,100]
console.log(a.map(x=>x*5))
console.log(a.flatMap(x=>[x*5]))


console.log(a.map(x=>[[x*5]]))
console.log(a.flatMap(x=>[[x*5]]))