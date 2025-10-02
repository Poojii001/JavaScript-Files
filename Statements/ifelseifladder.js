// var a= Number(prompt("Enter the first number :"))
// var b= Number(prompt("Enter the second number :"))
// var c= Number(prompt("Enter the third number :"))
// var d= Number(prompt("Enter the fourth number :"))
// var e= Number(prompt("Enter the fifth number :"))

// if(a>=b && a>=c && a>=d && a>=e){
//     document.writeln(`${a} is greatest`)
// }
// else if(b>=c && b>=d && b>=e){
//     document.writeln(`${b} is greatest`)
// }
// else if(c>=d && c>=e){
//     document.writeln(`${c} is greatest`)
// }
// else if(d>=e){
//     document.writeln(`${d} is greatest`)
// }
// else{
//     document.writeln(`${e} is greatest`)
// }

//WAP  to print number of of days in a month when user enter month number 

// var month=Number(prompt("Enter the number :"))
// if(month == 1 ||month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12 )
//     document.writeln(`The entered month has 31 days`)
// else if(month == 4 ||month == 6 ||month == 9 ||month == 11 )
//     document.writeln(`The entered month has 31 days`)
// else
//     document.writeln(`The entered month has 28 days or 29 days(when it was leap year)`)

//WAP to print day name when user entered day number
// var day = Number(prompt("Enter a day number"))

// if(day == 1)
//     document.writeln(`${day} is Monday`)

// else if(day == 2)
//     document.writeln(`${day} is Tuesday`)
// else if(day == 3)
//     document.writeln(`${day} is WednesdAy`)
// else if(day == 4)
//     document.writeln(`${day} is Thursday`)
// else if(day == 5)
//     document.writeln(`${day} is friday`)
// else if(day == 6)
//     document.writeln(`${day} is Friday`)
// else if(day == 7)
//     document.writeln(`${day} is Sunday`)

//WAP  to make a simple calculator
// var a = Number(prompt("Enter the first number"))
// var b = Number(prompt("Enter the second number"))
// var op = prompt("Press + for Addition\n Press - for Substraction\n Press * for Multiplication\n Press / for Division\n ")

// if (op == '+') {
//     result = a + b
//     alert(`${result} addition of entered number`)
// }
// elseif(op == '-'){
//     result = a - b
//     alert(`${result} sub of entered number`)
// }
// elseif(op == '*'){
//     result = a * b
//     alert(`${result} mul of entered number`)
// }
// elseif(op == '/'){
//         result = a / b
//         alert(`${result} divisible of entered number`)
//      else {
//     alert("Invalid choice")
//     }
// }

//WAP to check whether an entered character is lower case vowel, upper case consonant,digit,space on any special Character

var ch = prompt("Enter the single character")
if(ch.length!=1)
    document.writeln(`${ch} Is Invalid Input.Please Enter Only Single Character`)
else{
    if(ch>='a' && ch<='z'){
        if(ch=='a' || ch == 'e' || ch == 'i' || ch == 'o'|| ch == 'u')
            document.writeln(`${ch} is lowe case vowel`)
        else
            document.writeln(`${ch} is lower case consonant`)
    }
    else if(ch>='A' && ch<= 'Z'){
        if(ch =='A' || ch =='E' || ch =='I' || ch =='O' || ch =='U')
            document.writeln(`${ch} is upper case vowel`)
        else
            document.writeln(`${ch} is upper case consonant `)
    }
    else if(ch>=0 && ch<=9)
        document.writeln(`${ch} is digit`)
    else if(ch == ' ')
        document.writeln(`${ch} is space`)

    else
        document.writeln(`${ch} is special character`)
}


