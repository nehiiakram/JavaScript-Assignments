//  Chapter 31 to 34 //

// 1. Write a program that displays current date and time in your browser.

// var today = new Date();
// console.log(today);

// 2. Write a program that alerts the current month in words. For example December.

// var currentDate = new Date();
// var monthNumber = currentDate.getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[monthNumber];
// alert("Current month is: " + currentMonth);

// 3. Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun.

// var currentDate = new Date();
// var dayNumber = currentDate.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDay = dayNames[dayNumber];
// alert("Today is: " + currentDay);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var currentDate = new Date();
// var dayNumber = currentDate.getDay();
// if (dayNumber === 0 || dayNumber === 6) {
//     alert("It's Fun day");
// } else {
//     alert("It's a working day");
// }

// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

// var currentDate = new Date();
// var todayDate = currentDate.getDate();
// if (todayDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a 
// variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var now = new Date();
// var milliSince1970 = now.getTime();  
// var minutesSince1970 = milliSince1970 / (1000 * 60);
// console.log("Minutes since midnight, Jan 1, 1970: " + minutesSince1970);

//  7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var now = new Date();
// var hours = now.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

// var laterDate = new Date("December 31, 2020");
// console.log("Later Date is: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past 
// since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var ramadanDate = new Date("June 18, 2015");
// var today = new Date();
// var diff = today.getTime() - ramadanDate.getTime();
// var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// console.log((daysPassed + " days have passed since 1st Ramadan, 2015"));

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the beginning of 2015 


// var referenceDate = new Date();
// var start2015 = new Date("Jan 1, 2015");
// var diff = referenceDate.getTime() - start2015.getTime();
// var seconds = Math.floor(diff / 1000);
// document.write("Seconds elapsed between " + start2015 + " and " + referenceDate + " are: " + seconds);

// 11. Create a Date object for the current date and time.
//  Extract the hours, reset the date object an hour ahead and finally display 
//  the date object in your browser.

// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// var currentHours = currentDate.getHours();
// document.write("Current Hours: " + currentHours + "<br>");
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date (1 hour ahead): " + currentDate);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 
// 100 years back?

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back was: " + currentDate);


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = prompt("Enter your name:");
// var months = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
// var currentMonth = months[new Date().getMonth()];
// var numberOfUnits = 410;   // Example value
// var chargesPerUnit = 16;   // Example value


// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var latePaymentSurcharge = 350.00; // fixed
// var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
// document.write("<p><b>Month:</b> " + currentMonth + "</p>");
// document.write("<p><b>Number of units:</b> " + numberOfUnits + "</p>");
// document.write("<p><b>Charges per unit:</b> " + chargesPerUnit + "</p>");
// document.write("<p><b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + "</p>");
// document.write("<p><b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + "</p>");

