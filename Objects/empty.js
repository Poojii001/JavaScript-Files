// var emp = {}
// emp.id = 1001
// emp.name = "Nitin Chauhan"
// emp['dsg'] = "Trainer"
// emp["salary"] = 122229
// emp[`city`]  = "Noida"
// emp.state = "UP"
// console.log(emp)


// new object()

// var emp = Object()
// emp.id = 1001
// emp.name = "Nitin Chauhan"
// emp['dsg'] = "Trainer"
// emp["salary"] = 122229
// emp[`city`]  = "Noida"
// emp.state = "UP"
// console.log(emp)

// Accessing object values with help of keys

// console.log(emp.id)
// console.log(emp['name'])
// console.log(emp["dsg"])
// console.log(emp[`salary`])
// console.log(emp.city)
// console.log(emp.state)


// Accessing object values through loop 
// for(let key in emp) {
//     console.log(`${key} : ${emp[key]}`)
// }

// adding an item to existing object

// emp.email = "VishankChauhan@gmail.com"
// emp['phone'] = "7839701770"
// emp["Subject"] = "Mern Stack"
// emp[`active`] = true
// console.log(emp)

// delate object item
// delete emp.dsg
// delete emp['salary']
// delete emp["city"]
// delete emp[`state`]
// console.log(emp)


// nesting of an object 

var emp = {
    id: 1001,
    name: "Nitin",
    dsg: "Trainer",
    salary: 12278,
    address: {
        addressLine1: {
            buildingNumber: 185,
            floor: "2nd"
        },
        addressLine2: {
            locality: "village ABC",
            nearBy: "Water plant",
        },
        addressLine3: {
            pin: 121233,
            city: "XYZ",
            state : "ABCXYZ"
        }
    }
}
console.log(emp)
console.log(emp.address)
console.log(emp.address.addressLine3)
console.log(emp.address.addressLine3.city)