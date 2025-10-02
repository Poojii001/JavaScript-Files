// unpacking array elements into variables

var emp = [1001,"Pooja","Student",167390,"Faridabad","Hariyana"]

// console.log(`
//     Employee Id       :   ${emp[0]}
//     Name              :   ${emp[1]}
//     Designation       :   ${emp[2]}
//     Salary            :   ${emp[3]}
//     City              :   ${emp[4]}
//     State             :   ${emp[5]}
//     `)

var[id,name,dsg,salary,city,state] = emp
console.log(`
    Employee Id          :   ${id}
    Name                 :   ${name} 
    Designation          :   ${dsg}
    salary               :   ${salary}
    city                 :   ${city}
    state                :   ${state}
    `)