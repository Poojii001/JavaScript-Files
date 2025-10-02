//WAP to print all perfect number(6,28,496)

var start = Number(prompt("Enter the start:"))
var end = Number(prompt("Enter the end:"))
document.writeln("Perfect numbers between "+ start + " to "  +  end + " are:");

for (let num = start; num <= end; num++) {
    var sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
       document.writeln(num);
    }
}
