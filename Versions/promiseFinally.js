var p = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise is resolved")
        rej("Promise is rejected")
    },1000)
})

.then((value)=>{
    console.log(value)
})
.catch((error)=> {
    console.log(error)
})
.finally(()=>{
    console.log("Finally Block is called")
})