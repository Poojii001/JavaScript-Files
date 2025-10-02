// var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40]
// var b = new Set(a)
// var c = Array.from(b)
// console.log(a)
// console.log(b)
// console.log(c)

// Add item to set

// b.add(110)
// b.add(120)
// b.add(130)
// b.add(140)
// b.add(100)
// b.add(100)
// console.log(b)


// delete item to set 
// b.delete(50)
// b.delete(500)  //Do nothing

// b.delete()     //Do nothing
// console.log(b)

//clear( ) remove all 
// b.clear()
// console.log(b)

// size : return size of Set
// console.log(b.size)

// has()  return true if item exit else false

// console.log(b.has(100))
// console.log(b.has(110))


//keys values and entries

// console.log(b.keys())
// console.log(b.values()) 
// console.log(b.entries())


// set_map : pair of key and value

var emp = new Map([
    ['id', 1001],
    ['name','nitin'],
    ['dsg', 'Trainer'],
    ['salary', 178000],
    ['city', 'Faridabad'],
    ['state', 'Haryana']
])
console.log(emp)

// set -insert an item if already exist then it update
// emp.set("salary" , 200000)
// emp.set("email" , "vishankchauhan@gmail.com")
// console.log(emp)


// delete()

// emp.delete('salary')
// console.log(emp)

// // clear()

// emp.clear()
// console.log(emp)


// // a.size

// console.log(emp.size)

// // has()
// console.log(emp.has("email"))
// console.log(emp.has("name"))



// console.log(emp.keys())
// console.log(emp.values())
// console.log(emp.entries())
