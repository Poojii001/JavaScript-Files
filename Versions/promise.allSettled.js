var p1 = new Promise((res,rej)=> {
    setTimeout(()=> {
        res("Promise1 is resolved")
        rej("Promise1 is rejected")
    },2000)
})
var p2 = new Promise((res,rej)=> {
    setTimeout(()=> {
        res("Promise2 is resolved")
        rej("Promise2 is rejected")
    },4000)
})
var p3 = new Promise((res,rej)=> {
    setTimeout(()=> {
        res("Promise3 is resolved")
        rej("Promise3 is rejected")
    },6000)

Promise.allSettled([p1,p2,p3])
    .then((value))
    console.log(value)
})