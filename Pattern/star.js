// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.writeln("*")
//         // process.stdout.write("*")
//     }
//     // console.log()
//     document.writeln('<br>')
// }
// Output
// *****
// *****
// *****
// *****
// *****

// for(let i = 1; i<=5;i++){
//     for(let j = 1; j<=5; j++){
//         document.writeln(`${j}`)
//         //process.stdout.write(`${j}`)
//     }
//     document.writeln('<br>')
//     // console.log()
// }
//output
// 12345
// 12345
// 12345
// 12345
// 12345

// for(let i = 1; i<=5; i++){
//     for(let j = 1;j<=5; j++){
//         document.writeln(`${i}`)
//         // process.stdout.write(`${i}`)
//     }
//     // console.log()
//     document.writeln('<br>')
// }
// Output
// 11111
// 22222
// 33333
// 44444
// 55555

// for(let i=1; i<=5; i++){
//     for(let j=i;j<=i+4;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }
// output
// 12345
// 23456
// 34567
// 45678
// 56789

// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5;j++){
//         process.stdout.write(`${i%2}`)
//     }
//     console.log()
// }
// output
// 11111
// 00000
// 11111
// 00000
// 11111

// for(let i=1; i<=5; i++){
//     for(let j =1; j<=5; j++){
//         document.writeln(`${String.fromCharCode(j+64)}`)
//     }
//     document.writeln('<br>')

// }
// output
// A B C D E
// A B C D E
// A B C D E
// A B C D E
// A B C D E

// for(let i =1; i<=5;i++){
//     for(let j = 1;j<=5; j++){

//         document.writeln(`${String.fromCharCode(i+64)}`)
//     }
//     document.writeln('<br>')
// }
// A A A A A
// B B B B B
// C C C C C
// D D D D D
// E E E E E

// for(let i = 1; i<=5; i++){
//     for(let j =1; j<=5;j++){

//         process.stdout.write(`${String.fromCharCode(i+j+63)}`)
//     }
//     console.log()
// }
// output
// BCDE
// BCDEF
// CDEFG
// DEFGH
// EFGHI

// for(let i = 1; i<=5; i++){
//     for(j=1;j<=5;j++){

//         process.stdout.write(`${j%2==0?String.fromCharCode(j+64):j}`)
//     }
//     console.log()
// }
// 1B3D5
// 1B3D5
// 1B3D5
// 1B3D5
// 1B3D5

// for(let i=1; i<=5; i++){
//     for(let j = 1; j<=i; j++){

//         process.stdout.write("*")
//     }
//     console.log()
// }
// *
// **
// ***
// ****
// *****

// for(let i = 1; i<=5; i++){
//     for(let j =1; j<=i; j++){

//         process.stdout.write(`${i}`)
//     }
//     console.log()
// }
// output
// 1
// 22
// 333
// 4444
// 55555

// for(let i = 1; i<=5; i++){
//     for(let j=1; j<=i; j++){

//         process.stdout.write(`${i+j-1}`)
//     }
//     console.log()
// }
// output
// 23
// 345
// 4567
// 56789

// for(let i =1; i<=5; i++){
//     for(let j=1; j<=i; j++){

//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }
// output
// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         document.writeln(`${i%2}`)
//     }
//     document.writeln('<br>')
// }

// 1
// 0 0
// 1 1 1
// 0 0 0 0
// 1 1 1 1 1

// for(let i = 1; i<=5; i++){
//     for(let j =1; j<=i; j++){

//         process.stdout.write(`${j%2}`)
//     }
//     console.log()
// }
// 1
// 10
// 101
// 1010
// 10101

// for(let i = 1; i<=5; i++){
//     for(let j =1; j<=i; j++){

//         process.stdout.write(`${(i+j-1)%2}`)
//     }
//     console.log()
// }

// 1
// 01
// 101
// 0101
// 10101


// k=1
// for(let i = 1; i<=5; i++){
//     for(let j =1; j<= i; j++){
//         process.stdout.write(` ${k++} `)
//     }
//     console.log("  ")
// }

// 1  
// 23
// 456
// 78910
// 1112131415

// k=1
// for(let i = 1; i<=5; i++){
//     for(let j =1; j<= i; j++){


//         process.stdout.write(`${k%2}`)
//         k++

//     }
//     console.log()
// }
// 1
// 01
// 010
// 1010
// 10101


// for(let i = 1; i<=5; j++){
//     for(let j = 1; j<=5; j++){

//         process.stdout.write(`${String.fromCharCode(j+64)}`)
//     }
//     console.log()
// }


// for(let i = 1; i<=5; j++){
//     for(let j = 1; j<=i; j++){

//         process.stdout.write(`${String.fromCharCode(i+64)}`)
//     }
//     console.log()
// }

// 28/082025
// *****
// ****
// ***
// **
// *

// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")

//     }
//     console.log()
// }

// *
// **
// ***
// ****
// *****

// for(let i =1;i<=5;i++){
//     for(let j =1;j<=5-i;j++){
//         // document.writeln("&nbsp;&nbsp")
//         process.stdout.write(" ")

//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")

//     }
//      console.log()

// }

//       *
//      * *
//     * * *
//    * * * *
//  * * * *  *

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         // process.stdout.write(" ")
//         document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=1;j<=i;j++){
//         // process.stdout.write(" *")
//         document.writeln("*nbsp")
//     }
//     // console.log()
//     document.writeln("<br>")
// }

//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * * 

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * * 
//     * * * * * * * 
//       * * * * *    
// //      * * *
// //        *
// //    

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }
// for (let i = 4; i >= 1; i--) {
//     for (j = 1; j <= 5 - i; j++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

