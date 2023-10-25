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
// var arr = [5, 6, 8, 9, 1, 2, 35, 9];

// function name() {
//     var sortedArr = arr.slice(); // Create a copy of the original array
//     sortedArr.sort(function(a, b) {
//         return a - b;
//     });
//     return sortedArr;
// }

// var b = name();
// console.log(b);
// task 14
// var arr = [4,2,1,3,4,100]
// var sum =0
// function name  (){
// for (var i = 0 ; i<arr.length;i++){
// sum += arr[i]

// }

// }
// name()
// console.log(sum)
// task 15
// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param()); 
// task 16
// var a = parseFloat(prompt("Enter the base"));
// var b = parseFloat(prompt("Enter the exponent"));
// var p = 1;

// function name() {
//     if (b === 0) {
//         return 1; // Any number to the power of 0 is 1.
//     } else {
//         for (var i = 1; i <= b; i++) {
//             p *= a;
//         }
//         return p;
//     }
// }

// var result = name();

// if (a === 0 && b === 0) {
//     console.log(`${a} ^ ${b} = 1`);
// } else {
//     console.log(`${a} ^ ${b} = ${result}`);
// }
// task 17 
// var input = prompt("Write dice").toUpperCase()
// function name (){
// if (input !== "dice".toUpperCase() || input === null ){
//     alert("Write dice or dont press okay without writing 'dice' ")
// }
// else{
//     var a =  Math.round(Math.random() * 6)
//     console.log(a)
// }
// }
// name()
// task 18 

// var a = prompt("Write numbers")
// function name (a){
//     // -1 bcz string ka index =0 sa shroo hota
// for (var i = a.length-1 ; i>=0 ; i--){
//     console.log(a[i])
// }
// }
// name(a)
// task 19
// var b = prompt("Enter a string");
// function
// var concat = "";

// if (b !== null && b !== "") {
//     for (var i = b.length - 1; i >= 0; i--) {
//         concat += b[i];
//     }

//     if (b === concat) {
//         alert("Palindrome");
//     } else {
//         alert("Not a palindrome");
//     }
// } else {
//     alert("Please enter a valid string");
// }
// function Palindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase for a case-insensitive check.
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     const reversedStr = str.split('').reverse().join('');

//     return str === reversedStr;
// }

// const inputString = prompt("Enter a string");

// if (inputString) {
//     if (Palindrome(inputString)) {
//         alert(`${inputString} is a palindrome.`);
//     } else {
//         alert(`${inputString} is not a palindrome.`);
//     }
// } else {
//     alert("You didn't enter a valid string.");
// }
//   task 20
    

// var input = prompt("Write string")
// function name (){
// var firstAlpha =input[0].toUpperCase()
//     var otherwords = input.slice(1)
//     // console.log(j)
//     console.log(firstAlpha+otherwords)
// }

// name()

// // Define a function called capitalizeFirstLetterOfEachWord that takes a string (str) as an argument.
// function capitalizeFirstLetterOfEachWord(str) {
//     // Split the input string into an array of words using the space character as a delimiter and store it in the 'words' variable.
//     const words = str.split(' ');
//     console.log(words)

//     // Loop through each word in the 'words' array.
//     for (let i = 0; i < words.length; i++) {
//         // For each word, capitalize the first letter by using the .charAt(0) method to access the first character,
//         // convert it to uppercase with .toUpperCase(), and then append the rest of the word using .slice(1).
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     // Join the modified 'words' array back into a single string with spaces between the words and return it.
//     return words.join(' ');
// }

// // Use the prompt function to get a string from the user, and store it in the 'inputString' variable.
// const inputString = prompt("Enter a string");

// // Check if the user didn't cancel the prompt (i.e., inputString is not null or empty).
// if (inputString) {
//     // Call the capitalizeFirstLetterOfEachWord function with the 'inputString' and store the result in 'capitalizedString'.
//     const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);

//     // Display the 'capitalizedString' using an alert dialog.
//     alert(capitalizedString);
// } else {
//     // If the user canceled the prompt or provided an empty string, display an alert indicating that a valid string wasn't entered.
//     alert("You didn't enter a valid string.");
// }

// // task 21
// 21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial' 
// EXPECTED OUTPUT : 'Development'

// var get = document.querySelector(".guess");

// function findLongestWord(str) {
//     var strToArray = str.split(' ');
//     var longestWord = "";

//     for (var i = 0; i < strToArray.length; i++) {
//         var currentWord = strToArray[i];
        
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//     }

//     return longestWord;
// }

// var str = prompt("Write any paragraph you want, and I will find the longest word.");
// var result = findLongestWord(str);
// get.innerHTML = `Result: ${result}`;        

// task 22

// function name(str){
    //     var a = 0
    // var str = "allah is beautiful ok"
    // var arr = ["a","e","i","o","u"]
    // for (var i = 0 ;i<str.length;i++){



    // for (var j = 0 ; j < arr.length ;j++ ){
    //     if (str[i].includes(arr[j])){
    //     a+=1
    // }
    // }
    // }

    // console.log(a)
//     var a = 0;
// var str = "allah is beautiful ok";
// var arr = ["a", "e", "i", "o", "u"];

// for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (str[i]===(arr[j])) {
//             a += 1;
//         }
//     }
// }

// console.log(a);
// }

// var l = name(str)   
//  console.log(l)


// 
// function name(str){
// var j = typeof str 
// return j
// } 
// var l = name("")
// console.log(l)

// 

