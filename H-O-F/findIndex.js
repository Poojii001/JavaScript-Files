var a = [11, 12, 13, 14, 15, 15, 16, 17, 27, 32, 2, 4, 42, , 4, 5, 23, 2, 8,
    5, 5, 4, 4, 3, 65, 3, 7, 6, 75, 4, 56, 7, 8, 90, 88, 87, 76, 3]

// function check(item) {
//     return item%5==0
// }

function check(item) {
    let flag = false
    for (let i = 2; i <= item ** 0.5; i++) {
        if (item % i == 0)
            flag = true
        break
    }

return flag===false && item >=2 ? true :false
}