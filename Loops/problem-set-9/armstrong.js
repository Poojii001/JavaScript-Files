var count = 0
for (var i = 0; i <= 100000; i++) {
    let d = 0
    let num = i
    while (num != 0) {
        d++
        num = parseInt(num / 10)
    }
    num = i
    let sum = 0
    while (num != 0) {
        let r = num % 10
        sum = sum + r ** d
        num = parseInt(num / 10)
    }
    if (sum == i){
        count++
    document.writeln(`${i}<br>`)
    }
}
document.writeln(`Total Armstrong Number= ${count}`)
