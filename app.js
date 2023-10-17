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
// var a = 1
// function name (s){
// for (var i = 1 ;)
// }
// name ()
// task 8
// var a = parseInt(prompt("Write starting number"))
// var b = parseInt(prompt("Write ending number"))
// function name (){
//     for (var i = a ; i <= b ;i++){
//         console.log(i)
//     }
// }
// name()

// task 9
// var a = parseInt(prompt("write base value"))
// var b = parseInt(prompt("write perp value"))

// function outer() {
//     var  h = a + b
//     function inner(){
//      h*=h
//     }
//     inner()
//     return h
// }
// var retrn = outer()
// console.log(retrn)
// task 10
// function name(a, b, c) {
//     var count = arguments.length;
//     console.log(count);
//   }
  
//   name(1, 2, 3);
// function writeArgumentsToBrowser() {
//     // Use the arguments object to access all the arguments
//     for (var i = 0; i < arguments.length; i++) {
//       document.write("Argument " + (i + 1) + ": " + arguments[i] + "<br>");
//     }
//   }
  
//   // Example usage
//   writeArgumentsToBrowser("Hello", 42, true, [1, 2, 3]);
// task 11
// function name(){
//     if (arguments.length === 0){
//         return alert("dal ismai kch")
//     }
//     var big = arguments[0]
// for (var i = 0 ; i<arguments.length;i++){
    
//     if (arguments[i] > big )

//     big = arguments[i]
   
// }
// return big
// }
// var l = name (-20,-5070,700,40,90,9000000)
// console.log(l)

// task 12
//   var h = 2
//     var j = 6

// function name(a,b){
  
// var s = a*b
// return s
// }
// console.log(name(j,h))
// task 13
