//New math methods
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

//New Number Methods 
console.log(Number.isInteger(25**0.5))
console.log(Number.isInteger(50**0.5))

console.log(99**7,Number.isSafeInteger(99**7))
console.log(99**8,Number.isSafeInteger(99**8))

console.log(isFinite(10/2))
console.log(isFinite(10/0))

console.log(isNaN(15*"Hello world"))
console.log(isNaN(15*"10"))