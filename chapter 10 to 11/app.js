           //  Chapter 10 To 11 //
 
//  Qno : 1. Write a program to take “city” name as input from user. 
//  If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”          

// var city = prompt("Enter your city name:");
//   if (city && city.toLowerCase() === "karachi") {
//     document.write("<h2>Welcome to city of lights</h2>");
//   } else {
//     document.write("<h2>Welcome!</h2>");
//   }

//   Qno : 2. Write a program to take “gender” as input from user. If the user is male,
//  give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender (male/female):");

//   // Convert input to lowercase to handle any case
//   if (gender && gender.toLowerCase() === "male") {
//     document.write("<h2>Good Morning Sir.</h2>");
//   } else if (gender && gender.toLowerCase() === "female") {
//     document.write("<h2>Good Morning Ma’am.</h2>");
//   } else {
//     document.write("<h2>Please enter valid gender (male/female).</h2>");
//   }

//   Qno : 3. Write a program to take input color of road traffic signal from the user & 
//   show the message according to this table:

// var color = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

//   Convert to lowercase to avoid case sensitivity
//   if (color && color.toLowerCase() === "red") {
//     document.write("<h2>Must Stop</h2>");
//   } else if (color && color.toLowerCase() === "yellow") {
//     document.write("<h2>Ready to move</h2>");
//   } else if (color && color.toLowerCase() === "green") {
//     document.write("<h2>Move now</h2>");
//   } else {
//     document.write("<h2>Invalid color entered</h2>");
//   }

// Qno : 4. Write a program to take input remaining fuel in car (in litres) from user.
//  If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

//   Check if fuel is less than 0.25
//   if (fuel < 0.25) {
//     document.write("<h2>Please refill the fuel in your car</h2>");
//   } else {
//     document.write("<h2>Your fuel level is okay.</h2>");
//   }

//  Qno : 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

//    Part a
//   var a = 4;
//   if (++a === 5) {
//     alert("Part a: given condition for variable a is true");
//   }

//   Part b
//   var b = 82;
//   if (b++ === 83) {
//     alert("Part b: given condition for variable b is true");
//   }

//    Part c
//   var c = 12;
//   if (c++ === 13) {
//     alert("Part c: condition 1 is true");
//   }
//   if (c === 13) {
//     alert("Part c: condition 2 is true");
//   }
//   if (++c < 14) {
//     alert("Part c: condition 3 is true");
//   }
//   if (c === 14) {
//     alert("Part c: condition 4 is true");
//   }

//    Part d
//   var materialCost = 20000;
//   var laborCost = 2000;
//   var totalCost = materialCost + laborCost;
//   if (totalCost === laborCost + materialCost) {
//     alert("Part d: The cost equals");
//   }

//    Part e
//   if (true) {
//     alert("Part e: True");
//   }
//   if (false) {
//     alert("Part e: False");
//   }

//    Part f
//   if ("car" < "cat") {
//     alert("Part f: car is smaller than cat");
//   }

// Qno : 6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. Take percentage & computer grade 
// as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// var totalMarks = +prompt("Enter total marks for all 3 subjects:");
//   var marks1 = +prompt("Enter marks obtained in Subject 1:");
//   var marks2 = +prompt("Enter marks obtained in Subject 2:");
//   var marks3 = +prompt("Enter marks obtained in Subject 3:");

//   if (isNaN(totalMarks) || isNaN(marks1) || isNaN(marks2) || isNaN(marks3)) {
//     document.write("Please enter valid numeric values for all inputs.");
//   } else {
//     var obtainedMarks = marks1 + marks2 + marks3;
//     var percentage = (obtainedMarks / totalMarks) * 100;

//     var grade = "";
//     var remarks = "";

//     if (percentage >= 80) {
//       grade = "A-one";
//       remarks = "Excellent";
//     } else if (percentage >= 70) {
//       grade = "A";
//       remarks = "Good";
//     } else if (percentage >= 60) {
//       grade = "B";
//       remarks = "You need to improve";
//     } else {
//       grade = "Fail";
//       remarks = "Sorry";
//     }

//     document.write("<h2>Marks Sheet</h2>");
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + obtainedMarks + "<br>");
//     document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//     document.write("Grade: " + grade + "<br>");
//     document.write("Remarks: " + remarks);
//   }

// Qno : 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

//    Step 1: Secret number (between 1 to 10)
//   var secretNumber = 7;   You can change this to any number between 1–10

//   Step 2: Get user's guess
//   var userGuess = +prompt("Guess the secret number (between 1 to 10):");

//   Step 3: Check the guess
//   if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
//   } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Try again!");
//   }

// Qno : 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3.

// var number = +prompt("Enter a number to check if it's divisible by 3:");

//   Step 2: Check karna ke 3 se divisible hai ya nahi
//   if (number % 3 === 0) {
//     alert("Yes! The number is divisible by 3.");
//   } else {
//     alert("No, the number is NOT divisible by 3.");
//   }

// Qno : 9. Write a program that checks whether the given input is an even number or an odd number.
//   var number = +prompt("Enter a number to check if it's even or odd:");
// if (number % 2 === 0) {
//     alert("The number is EVEN.");
//   } else {
//     alert("The number is ODD.");
//   }

// Qno : 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//   var temperature = +prompt("Enter the current temperature:");
//   if (temperature > 40) {
//     alert("It is too hot outside.");
//   } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
//   } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
//   } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
//   } else {
//     alert("It's very cold today.");
//   }

// Qno : 11. Write a program to create a calculator for +,-,*, / & %using if statements.
//  Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//   var num1 = +prompt("Enter first number:");
//   var num2 = +prompt("Enter second number:");
//   var operator = prompt("Enter operation (+, -, *, /, %):");

//   var result;

//   Operations using if statements
//   if (operator === "+") {
//     result = num1 + num2;
//   }
//   else if (operator === "-") {
//     result = num1 - num2;
//   }
//   else if (operator === "*") {
//     result = num1 * num2;
//   }
//   else if (operator === "/") {
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Cannot divide by zero!";
//     }
//   }
//   else if (operator === "%") {
//     if (num2 !== 0) {
//       result = num1 % num2;
//     } else {
//       result = "Cannot find modulus with zero!";
//     }
//   }
//   else {
//     result = "Invalid operator entered.";
//   }

//   Show result
//   document.write("Result: " + result);