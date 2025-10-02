// var day = Number(prompt("Enter the Day Number :"))
// switch(day){
//     case 1:
//         document.writeln("Monday")
//         break

//             case 2:
//         document.writeln("Tuesday")
//         break
//             case 3:
//         document.writeln("Wednesday")
//         break
//             case 4:
//         document.writeln("Thursday")
//         break
//             case 5:
//         document.writeln("Friday")
//         break
//             case 6:
//         document.writeln("Saturday")
//         break
//             case 7:
//         document.writeln("Sunday")
//         break

//         default:
//             document.writeln('Invalid choice')

// }


//WAP to print number of days in a month when user enter month number .
// var month = Number(prompt("Enter the Number: "))
// switch(month){
//     case 1:
//         document.writeln("January")
//         break

//         case 2:
//         document.writeln("February")
//         break
//         case 3:
//         document.writeln("March")
//         break
//         case 4:
//         document.writeln("April")
//         break
//         case 5:
//         document.writeln("May")
//         break
//         case 6:
//         document.writeln("June")
//         break
//         case 7:
//         document.writeln("July")
//         break
//         case 8:
//         document.writeln("August")
//         break
//         case 9:
//         document.writeln("September")
//         break
//         case 10:
//         document.writeln("October")
//         break
//         case 11:
//         document.writeln("November")
//         break
//         case 12:
//         document.writeln("December")
//         break
//         default:
//             document.writeln("Invalid Choice")
// }

//WAP To make a simple Calculator
var a = Number(prompt("Enter the first number:"))
var b = Number(prompt("Enter the second number:"))
var op = prompt("Press + for the Addition\n Press - for the Substraction\n Press * for the multiplication\n Press / for the division\n Press % for the Remainder\n Press ** for Power")

switch (op) {
    case '+':
        alert(`${a}+${b} =${a + b}`)
        break

        case '-':
        alert(`${a}-${b} =${a - b}`)
        break
        case '*':
        alert(`${a}*${b} =${a * b}`)
        break
        case '/':
        alert(`${a}/${b} =${a / b}`)
        break
        case '%':
        alert(`${a}%${b} =${a % b}`)
        break
        case '**':
        alert(`${a}**${b} =${a ** b}`)
        break
        default:
            alert("Invalid Choice")
}
