                   // Chapter 12 to 13 //
// Qno: 1. Write a program that takes a character (number or string) in a variable 
// & checks whether the given input is a number, 
// uppercase letter or lower case letter.
//  (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).                   

        // let char = prompt("Enter a character (letter or number):");
        // let ascii = char.charCodeAt(0);

        // if (ascii >= 48 && ascii <= 57) {
        //     alert("The input is a Number.");
        // }
        // else if (ascii >= 65 && ascii <= 90) {
        //     alert("The input is an Uppercase Letter.");
        // }
        // else if (ascii >= 97 && ascii <= 122) {
        //     alert("The input is a Lowercase Letter.");
        // }
        // else {
        //     alert("The input is not a number or letter.");
        // }

//   Qno : 2. Write a JavaScript program that accept two integers and display the larger. 
//   Also show if the two integers are equal.      

// let num1 = parseInt(prompt("Enter first integer:"));
//         let num2 = parseInt(prompt("Enter second integer:"));

//         if (num1 > num2) {
//             alert(num1 + " is larger.");
//         } 
//         else if (num2 > num1) {
//             alert(num2 + " is larger.");
//         } 
//         else {
//             alert("Both numbers are equal.");
//         }

//  Qno: 3. Write a program that takes input a number from user & state whether 
// the number is positive, negative or zero.

// let number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//     alert("The number is Positive.");
// }
// else if (number < 0) {
//     alert("The number is Negative.");
// }
// else {
//     alert("The number is Zero.");
// }

// Qno : 4. Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise

// let char = prompt("Enter a single character:");
// if (char.length === 1) {
//     let lowerChar = char.toLowerCase(); // letter ko lowercase me convert karo

//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' ||
//          lowerChar === 'u') {
//         alert(true);
//     } else {
//         alert(false);
//     }
// } else {
//     alert("Please enter only one character!");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let correctPassword = "$123456"; 

// let userPassword = prompt("Enter your password:"); 

// if (!userPassword) { 
//     alert("Please enter your password");
// } 
// else if (userPassword === correctPassword) { 
//     alert("Correct! The password you entered matches the original password");
// } 
// else { 
//     alert("Incorrect password");
// }

// Qno: 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// Qno : 7. Write a program that takes time as input from user in 24hours clock format
//  like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7PM):");

// if (time >= 0 && time < 1200) {
//     alert("Good Morning!");
// } 
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } 
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// } 
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// } 
// else {
//     alert("Invalid time format! Please enter between 0000 and 2359.");
// }

