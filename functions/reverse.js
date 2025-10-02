function test(num1,num2,num3,fun) {
    console.log(`reverse of ${num1} =${fun(num1)}`)
    console.log(`reverse of ${num2} =${fun(num2)}`)
    console.log(`reverse of ${num3} =${fun(num3)}`)
}
function reverse(num) {
    let rev = 0
    while(num!=0){
        let r = num%10
        rev = rev*10+r
        num = parseInt(num/10)
    }
    return rev
}
test(123,654,897,reverse)