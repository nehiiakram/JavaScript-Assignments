                // Chapter 1 //

// Qno: 1. Write a script to greet your website visitor using JS alert box.

alert("Welcome");



// Qno: 2. Write a script to display following message on your web page:

alert("Error!  Please enter a valid password.");



// Qno: 3. Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS Land... \n Happy Coding!");



// Qno: 4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialogs.");



// Qno: 5. Generate the following message through browser’s developer console:

// console

// Qno: 6 6. Make use of alerts in your new/existing HTML & CSS project.


// Qno: 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

                  // Chapter 2 //

// Qno: 1 Declare a variable called username.
var username;

// Qno: 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Neha Akram";

// Qno: 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
a: var message;
b: message = "Hello World";
c: alert(message);

// Qno: 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Neha Akram";
var age = 20;
var grade = "A+";
var course = "JavaScript";
var institute = "Saylani Mass IT Training";

alert("Name: " + studentName);
alert("Age: " + age);
alert("Grade: " + grade);
alert("Course: " + course);
alert("Institute: " + institute);

// Qno: 5. Write a script to display the following alert using one JS variable:
var message = "Pizza\nPizz\nPiz\nPi\nP";
alert(message);

// Qno: 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
var Email = "nehakhan29934@gmail.com";
alert(Email);

// Qno: 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am reading a book called " + book);

// Qno: 8. "Write a script to display this in browser through JS"
// Answer!! Html Page

// Qno:9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
//Answer Html page

        //  Chapter 3 //

// Qno : 1. Declare a variable called age & assign to it your age. Show  your age in an alert box.
var age = 20;
alert("I am " + age + " years old");

// Qno: 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
// Skip THis Question

// Qno: 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2005; // Apna birth year likho
document.write("My birth year is " + birthYear);

// Qno: 4. A visitor visits an online clothing store www.xyzClothing.com .
//  Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");

                 // Chapter 4 //
//   Qno: 1. Declare 3 variables in one statement.
var name , age , city;  

// Qno: 2. Declare 5 legal & 5 illegal variable names.
 //Legal  names                           illegal  names
// userName                                   1name  
// _age                                       user name
// $amount                                    var
// total5                                     if 
// myVar                                    function

// Qno: 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
document.write("<h1>Rules for naming JS variables</h1>");

  document.write("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>.<br>");
  document.write("For example: <code>$my_1stVariable</code></p>");

  document.write("<p>Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>.<br>");
  document.write("For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>");

  document.write("<p>Variable names are case <b>sensitive</b>.</p>");

  document.write("<p>Variable names should not be JS <b>keywords</b>.</p>");

                        // Chapter 5 //
// Qno: 1. Write a program that take two numbers & add them in anew variable.
//  Show the result in your browser.                     
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("Addition of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Qno: 2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 = 20;
var num2 = 6;
    // Subtraction
    var subtract = num1 - num2;
    document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");
var num1 = 2;
var num2 = 6;
    // Multiplication
    var multiply = num1 * num2;
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");
var num1 = 3;
var num2 = 6;
    // Division
    var division = num1 / num2;
    document.write("Division of " + num1 + " by " + num2 + " is " + division + "<br>");
var num1 = 10;
var num2 = 2
    // Modulus
    var modulus = num1 % num2;
    document.write("Modulus of " + num1 + " % " + num2 + " is " + modulus + "<br>");

//  Qn: Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value                      
//  after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

document.write("<h2>Math Expressions</h2>");

var number;
document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder);

// Qno: 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 movie tickets is " + totalCost + " PKR");

// Qno: 5. Write a script to display multiplication table of any number in your browser. E.g
var number = 5; // yeh wo number hai jiska table print karna hai

document.write("<h3>Multiplication Table of " + number + "</h3>");

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// Qno: 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// Qno: 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.
//  Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Step a-e: Variables
var item1_price = 650;
var item2_price = 100;
var item1_qty = 3;
var item2_qty = 7;
var shipping_charges = 100;
// Total cost calculation
var total_cost = (item1_price * item1_qty) + (item2_price * item2_qty) + shipping_charges;
// Receipt show karna
document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + item1_price + "<br>");
document.write("Quantity of item 1 is " + item1_qty + "<br>");
document.write("Price of item 2 is " + item2_price + "<br>");
document.write("Quantity of item 2 is " + item2_qty + "<br>");
document.write("Shipping Charges: " + shipping_charges + "<br><br>");
document.write("Total cost of your order is " + total_cost);

// Qno: 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser

  // a. Total marks aur obtained marks store karo
  var totalMarks = 500;
  var obtainedMarks = 410;

  // b. Percentage calculate karo
  var percentage = (obtainedMarks / totalMarks) * 100;

  // c. Result browser pe show karo
  document.write("<h2>Marks Sheet</h2>");
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "%");

//   Qno: 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
//   script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Currency values
var totalPKR = (10 * 104.80) + (25 * 28);
// Show result in browser
document.write("<h2>Currency Conversion</h2>");
document.write("Total in Pakistani Rupees: " + totalPKR);

// Qno: 10.Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 10; // aap koi bhi number rakh sakte ho
var result = ((number + 5) * 10) / 2;

document.write("<h2>Arithmetic Operation Result</h2>");
document.write("Initial Number: " + number + "<br>");
document.write("Final Result: " + result);

// Qno: 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: 
// “They are either NN or NN years old”.
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>The Age Calculator</h2>");
document.write("They are either " + age2 + " or " + age1 + " years old.");

Qno: 