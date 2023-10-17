// task 1
// var i = "haseeb"
// var b = i[2]
// console.log(b)
// task 2
// function name (){
//     var newD = new Date ()
//     document.write(newD)
// } 
// name()

// task 3
// function name (){
//     var a = prompt("Write your first name")
//     var b = prompt("Write your last name")
//     var c = document.write(`${ a + b}`)
// }
// name()
// task 4
// var a = +prompt()
// var b = +prompt()
// function name (a,b){
// return a+b
// }
// var z = name(a,b)
// document.write(z)
// task 5
// var a = parseInt(prompt("Enter the first number"));
// var b = prompt("Enter the operator (+, -, x, /)").toLowerCase(); // Convert to lowercase for case-insensitivity
// var c = parseInt(prompt("Enter the second number"));

// function calc(a, b, c) {
//   if (b === "+") {
//     return a + c;
//   } else if (b === "-") {
//     return a - c;
//   } else if (b === "x") {
//     return a * c;
//   } else if (b === "/") {
//     if (c !== 0) {
//       return a / c;
//     } else {
//       alert("Division by zero is not allowed");
//       return undefined; // Return undefined to indicate an error
//     }
//   }
//   // If the operator is not recognized, the function will not return anything.
//   alert("Invalid operator");
//   return undefined;
// }

// var s = calc(a, b, c);

// if (s !== undefined && s !== null) {
//   document.write(`${a} ${b} ${c} = ${s}`);
// } else {
//   alert("Write valid input or operator");
// }
// task 6
// function name (a){
// return a * a
// }
// var s = name(5)
// console.log(s)
// task 7
var a = 1 
function name (b){
for (var i = b ; i >= 1 ; i-- ){
 a *=  i
}
   return a
}
var j = name(4)
console.log(j)