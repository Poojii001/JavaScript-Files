var num = 500n
var f = 1n
for(let i = num; i>=1; i--){
    f=f*i;
}
console.log(`Factorial of ${num} is = ${f}`)