var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 18900,
    city: "Faridabad",
    state: "Haryana"
}

Object.defineProperties(emp, {
    "email": {
        value: "vishankChauhan@gmail.com",
        writable: false,
        configurable: false,
        enumerable: true
    },
    "phone": {
        value: "987384046",
        writable: false,
        configurable: true,
        enumerable: true
    },
})
console.log(emp)