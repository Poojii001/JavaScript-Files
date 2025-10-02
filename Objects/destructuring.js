var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 189000,
    city: "Noida",
    state: "UP"
}

// console.log(`
//              Employee Id   :    ${emp.id}
//              Name          :    ${emp.name}
//              Designation   :    ${emp.dsg}
//              salary        :    ${emp.salary}
//              city          :    ${emp.city}
//              state         :    ${emp.state}
//     `)

// destructure of objects

var { id, name, dsg, salary, city, state } = emp
console.log(`
             Employee Id   :    ${id}
             Name          :    ${name}
             Designation   :    ${dsg}
             salary        :    ${salary}
             city          :    ${city}
             state         :    ${state}
    `)