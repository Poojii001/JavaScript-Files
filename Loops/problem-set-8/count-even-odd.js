var num = Number(prompt("Enter the number : "))
var given = num
var evencount = 0
var oddcount = 0
while (num !== 0) {
    let r = num % 10
    if (r % 2 == 0) {
        evencount++
    }
    else {
        oddcount++
    }
    num = parseInt(num / 10)
}
document.writeln(`<br> The given number is: ${given}`)
document.writeln(`<br> Number of even digits in the given number is: ${evencount}`)
document.writeln(`<br> Number of odd digits in the given number is: ${oddcount}`)