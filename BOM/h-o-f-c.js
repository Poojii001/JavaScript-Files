//here find() findLast()  

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 22, 44, 55, 6, 3, 44, 33, 343, 3, 66, 77, 54, 78, 9, 90, 5]
function check(item) {
    let flag = false
    for (let i = 2; i <= item ** 0.5; i++) {
        if (item % i == 0) {
            flag = true
            break
        }
    }
    return flag == false && item >= 2 ? true : false
}
function myFind(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        if (fun(arr[i]))
            return arr[i]
    }
    return undefined
}
function myFindLast(arr, fun) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (fun(arr[i]))
            return arr[i]
    }
    return undefined
}
function myFindIndex(arr, fun) {
    for (let i = 0; i <= arr.length; i++) {
        if (fun(arr[i]))
            return i
    }
    return -1
}
function myFindLastIndex(arr, fun) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (fun(arr[i]))
            return i
    }
    return -1
}
function myMap(arr, fun) {
    let output = []
    for (let item of arr) {
        output.push(fun(item))
    }
    return output
}
function myFilter(arr, fun) {
    let output = []
    for (let item of arr) {
        if (fun(item))
            output.push(item)
    }
    return output
}
console.log("find",a.find(check));
console.log("myfind",myFind(a, check));

console.log(a.findLast(check));
console.log(myFindLast(a, check));

console.log(a.findIndex(check));
console.log(myFindIndex(a, check));

console.log(a.findLastIndex(check));
console.log(myFindLastIndex(a, check));

console.log(a.map(check));
console.log(myMap(a, check));

console.log(a.filter(check));
console.log(myFilter(a, check));
