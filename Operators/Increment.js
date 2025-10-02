var a = 10
var b = a++
var c = ++a
var d = a--
var e = --a
--a
a--
console.log(a, b, c, d, e)

var a = 10
var b = a++ - ++a - a-- - --a
console.log(a, b)
