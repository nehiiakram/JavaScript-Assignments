// Chapter 35 to 38 //

// 1. Write a function that displays current date & time in your browser.

// function showDateTime() {
//     var now = new Date();
//     document.write("<h2>Current Date & Time: " + now + "</h2>");
// }
// showDateTime();


// 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     document.write("<h2>Welcome, " + fullName + "!</h2>");
// }
// greetUser("Neha", "Khan");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// var number1 = +prompt("Enter first number:");
// var number2 = +prompt("Enter second number:");

// var sum = addNumbers(number1, number2);

// document.write("<h2>The sum of " + number1 + " and " + number2 + " is: " + sum + "</h2>");


// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
//  Return and show the desired result in your browser.

// function calculator(num1, num2, operator) {
//     var result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } 
//     else if (operator === "-") {
//         result = num1 - num2;
//     } 
//     else if (operator === "*") {
//         result = num1 * num2;
//     } 
//     else if (operator === "/") {
//         result = num1 / num2;
//     } 
//     else if (operator === "%") {
//         result = num1 % num2;
//     } 
//     else {
//         result = "Invalid Operator!";
//     }

//     return result;
// }

// var number1 = +prompt("Enter first number:");
// var number2 = +prompt("Enter second number:");
// var op = prompt("Enter operator (+, -, *, /, %):");

// var output = calculator(number1, number2, op);

// // Show result in browser
// document.write("<h2>Result: " + output + "</h2>");

// 5. Write a function that squares its argument.

// function square(num) {
//     return num * num;
// }
// var number = +prompt("Enter a number:");
// var result = square(number);
// document.write("<h2>The square of " + number + " is: " + result + "</h2>");

// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }
//     return result;
// }
// var number = +prompt("Enter a number to find its factorial:");
// var fact = factorial(number);

// document.write("<h2>The factorial of " + number + " is: " + fact + "</h2>");

// 7. Write a function that take start and end number as inputs & display counting in your browser.

// function showCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// var startNum = +prompt("Enter the start number:");
// var endNum = +prompt("Enter the end number:");

// showCounting(startNum, endNum);

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2


// function calculateHypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }

//     var hypotenuse = Math.sqrt(square(base) + square(perpendicular));
    
//     return hypotenuse;
// }

// var base = +prompt("Enter the base of triangle:");
// var perpendicular = +prompt("Enter the perpendicular of triangle:");

// var result = calculateHypotenuse(base, perpendicular);
// document.write("The Hypotenuse is: " + result);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function calculateArea(width, height) {
//     return width * height;
// }

// let area1 = calculateArea(5, 10);
// console.log("Area (with values): " + area1);

// let w = 7;
// let h = 3;
// let area2 = calculateArea(w, h);
// console.log("Area (with variables): " + area2);


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     var reversed = str.split("").reverse().join("");
//     if (str === reversed) {
//         document.write(str + " is a palindrome!");
//     } else {
//         document.write(str + " is NOT a palindrome!");
//     }
// }
// var word = prompt("Enter a word to check if it's palindrome:");
// isPalindrome(word);


