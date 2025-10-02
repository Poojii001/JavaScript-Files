//WAP to print and count palindrome number in a range.

var start = Number(prompt("Enter the range\n start from: "))
var end = Number(prompt("To:"))
var count = 0

for (let i = start; i <= end; i++) {
    let rev = 0
    let num = i
    while (num != 0) {
        let r = num % 10
        rev = rev * 10 + r
        num = parseInt(num / 10)
    }
    if (rev === i) {
        count++
        document.writeln(`${i}`)

    }
}

document.writeln(`<br>Total Palindrome Number from ${start} to${end} = ${count}`)