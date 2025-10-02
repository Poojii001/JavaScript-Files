var start = Number(prompt("Enter the start number"))
var end = Number(prompt("End:"))
for (let i = start; i <= end; i++) {
    var flag = false
    var count = 0
    for (var j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            flag = true
            break
        }

    }
    if (flag === false && i >= 2){
        count++
    document.writeln(`${i} is a prime number<br>`)
    }
    else
    document.writeln(`${i} is not a prime number`)

}
document.writeln(`<br>Total number of prime number between ${start} and ${end} = ${count}`)
