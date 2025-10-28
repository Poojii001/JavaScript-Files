//optional chaining  
var emp = {
    id       : 1001,
    name     : "Pooja",
    dsg      : "Student",
    salary   : 189000,
    active   : false,
}
console.log(`
    Employee ID           : ${emp.id?? "N/A"}
    Employee Name         : ${emp.name?? "N/A"}
    Employee Designation  : ${emp.dsg?? "N/A"}
    Employee Salary       : ${emp.salary?? "N/A"}
    Employee Active       : ${emp.active?? "N/A"}
    Employee City         : ${emp.city?? "N/A"}
    Employee State        : ${emp.state?? "N/A"}
    Employee Pin          : ${emp.address?.pin?? "N/A"}
    `)