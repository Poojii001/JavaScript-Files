var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// console.log(`Deleted Array Elements = ${a.splice(3, 5)}`)
// console.log(a)

// console.log(`Deleted Array Elements = ${a.splice(3, 0, 33, 34, 35, 36,37,38,39)}`)
// console.log(a)


// delete : is a keyword. it delete the items like [10,20,<3 empty items>, 60,70,<1 empty items>,90,100]
delete a[2]
delete a[3]
delete a[4]
delete a[7]
delete a[9]
console.log(a)