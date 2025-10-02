function sumDigit(num) {
    let sum =0
    while(num!=0) {
        let r = num% 10
        sum = sum+r
        num=parseInt(num/10)
    }
    return sum
}
console.log(`Sumof digit of 12345 = ${sumDigit(12345)}`)
console.log(`Sumof digit of 376654 = ${sumDigit(376654)}`)
console.log(`Sumof digit of 34564 = ${sumDigit(34564)}`)
console.log(`Sumof digit of 67855 = ${sumDigit(67855)}`)
console.log(`Sumof digit of 1866678 = ${sumDigit(1866678)}`)