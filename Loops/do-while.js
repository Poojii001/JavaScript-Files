//Simple calculator
do {
    var a = Number(prompt("Enter the first number:"))
    var b = Number(prompt("Enter the second number:"))
    var ch = Number(prompt("Press + for Addition \n Press - for Substraction \n Press * for multiplication \n Press / for division \n Press % for modulas \n Press ** for power"))
    switch (ch) {
        case "+":
            alert(`${a} + ${b}=${a + b}`)
            break

        case "-":
            alert(`${a} - ${b}=${a - b}`)
            break
        case "*":
            alert(`${a} * ${b}=${a * b}`)
            break
        case "/":
            alert(`${a} / ${b}=${a / b}`)
            break

        case "%":
            alert(`${a} % ${b}=${a % b}`)
            break
        case "**":
            alert(`${a} ** ${b}=${a ** b}`)
            break
        default:
            alert(`Invalid choice`)

    }
    ch = prompt("Press n to exit /Press any key to continue")
}
