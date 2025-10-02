// 2nd type to create array using empty array
// var a = []
// a[0] = 10
// a[1] = 20
// a[2] = 30
// a[3] = 40
// a.push(50)
// a.push(60, 70, 80, 90, 100)
// console.log(a)

//3rd type: Array Constructor

// var a = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
// console.log(a)

// var a = Array(10, 20)
// var a = Array(10)
// console.log(a)



// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// 4th type array elelments using normal for loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// Accessing array elements using while loop
// let i =0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

// Accessing array elements using do while loop
// let i =0
// do{
//     console.log (a[i])
//     i++
// }while(i<a.length)

// accessing array elements for in loop
// for (let i in a) {
//     console.log(i)
// }

// accessing array elements using for of loop
// for (let i of a) {
//     console.log(i)
// }


// console.log(a)
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join(" ; "))
// console.log(a.join(" | "))
// console.log(a.join(" : "))

var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

console.log(`Deleted Array Element is ${a.shift()}`)
console.log(a)
console.log(`Deleted Array Element is ${a.shift()}`)
console.log(a)
console.log(`Deleted Array Element is ${a.shift()}`)
console.log(a)
console.log(`Deleted Array Element is ${a.shift()}`)
console.log(a)