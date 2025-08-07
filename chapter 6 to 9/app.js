              //    Chapter 6  To  9  //
// Qno : 1. Write a program to take a number in a variable, do the required arithmetic to
//  display the following result in your browser:

  var a = 10;
  document.write("Result:<br>");
  document.write("The value of a is: " + a + "<br><br>");
  document.write("------------------------------------------<br><br>");

  document.write("The value of ++a is: " + (++a) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of a++ is: " + (a++) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of --a is: " + (--a) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of a-- is: " + (a--) + "<br>");
  document.write("Now the value of a is: " + a + "<br>");

//   Qno : 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;
  var result = --a - --b + ++b + b--;

  document.write("<strong>Initial values:</strong><br>");
  document.write("a = 2, b = 1<br><br>");

  document.write("<strong>Step-by-step Execution:</strong><br>");
  document.write("--a → a becomes " + a + "<br>");

  // Re-initialize for steps
  a = 2;
  b = 1;

  let step1 = --a; // a becomes 1
  let step2 = --b; // b becomes 0
  let step3 = ++b; // b becomes 1
  let step4 = b--; // returns 1, then b becomes 0

  let finalResult = step1 - step2 + step3 + step4;

  document.write("--a = " + step1 + "<br>");
  document.write("--b = " + step2 + "<br>");
  document.write("++b = " + step3 + "<br>");
  document.write("b-- = " + step4 + "<br><br>");

  document.write("<strong>Calculation:</strong><br>");
  document.write("result = " + step1 + " - " + step2 + " + " + step3 + " + " + step4 + " = " + finalResult + "<br><br>");

  document.write("<strong>Final Values:</strong><br>");
  document.write("a = " + a + "<br>");
  document.write("b = " + b + "<br>");
  document.write("result = " + finalResult + "<br>");

//   Qno : 3. Write a program that takes input a name from user & greet the user.

var userName = prompt("Neha Akram Khan:");

  // Greet the user
  document.write("<h2>Hello, " + userName + "! Welcome to JavaScript 😊</h2>");

//   Qno : 5. Write a program to take input a number from user & display it’s multiplication 
// table on your browser. If user does not enter a new number, multiplication table of 5
// should be displayed by default.

// Take input from user
  var userInput = prompt("Enter a number to display its multiplication table:");

  // Convert to number
  var num = Number(userInput);
  
  document.write("<h2>Multiplication Table of " + num + "</h2>");
  document.write(num + " × 1 = " + (num * 1) + "<br>");
  document.write(num + " × 2 = " + (num * 2) + "<br>");
  document.write(num + " × 3 = " + (num * 3) + "<br>");
  document.write(num + " × 4 = " + (num * 4) + "<br>");
  document.write(num + " × 5 = " + (num * 5) + "<br>");
  document.write(num + " × 6 = " + (num * 6) + "<br>");
  document.write(num + " × 7 = " + (num * 7) + "<br>");
  document.write(num + " × 8 = " + (num * 8) + "<br>");
  document.write(num + " × 9 = " + (num * 9) + "<br>");
  document.write(num + " × 10 = " + (num * 10) + "<br>");

//  Qno : 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and  stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

  // a) Get subject names from user
  var subject1 = prompt("Enter name of first subject:");
  var subject2 = prompt("Enter name of second subject:");
  var subject3 = prompt("Enter name of third subject:");

  // b) Total marks per subject
  var totalMarksPerSubject = 100;

  // c) & d) Get obtained marks
  var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
  var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
  var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

  // e) Calculate totals and percentage
  var totalObtained = obtained1 + obtained2 + obtained3;
  var totalMarks = totalMarksPerSubject * 3;
  var percentage = (totalObtained / totalMarks) * 100;

  // Show result in a table
  document.write("<h2>Result Sheet</h2>");
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th></tr>");
  document.write("</table>");
  document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");