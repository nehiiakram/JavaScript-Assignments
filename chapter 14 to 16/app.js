            // Chapter 14 to 16 //
//   Qno : 1. Declare an empty array using JS literal notation to store student names in future.    

// var studentName = [];

// Qno : 2. Declare an empty array using JS object notation to store student names in future.

// var studentNames = new Array();

// Qno: 3 Declare and initialize a string array?

//  var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Qno : 4 Declare and initialize a Number array?

 // var numbers = [ 1, 2, ,3 ,4 ,5 ,6];

// Qno : 5 Declare and initialize a Boolean array?

// var Boolean = [ true, false];

// Qno : 6 Declare and initialize a mixed array?

// var mixedArray = ["Neha", 6, true];

// Qno : 7 Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
//     document.write("<h2>Qualifications in Pakistan:</h2>");
//     document.write("1) " + qualifications[0] + "<br>");
//     document.write("2) " + qualifications[1] + "<br>");
//     document.write("3) " + qualifications[2] + "<br>");
//     document.write("4) " + qualifications[3] + "<br>");
//     document.write("5) " + qualifications[4] + "<br>");
//     document.write("6) " + qualifications[5] + "<br>");
//     document.write("7) " + qualifications[6] + "<br>");
//     document.write("8) " + qualifications[7] + "<br>");

//  Qno : 8. Write a program to store 3 student names in an array.Take another array to store score of 
// these three students. Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentNames = ["Urooba", "Hamza", "Ayan"];
//     var studentScores = [400, 350, 480];
//     var totalMarks = 500;
//     document.write(studentNames[0] + " scored " + studentScores[0] + 
//                    " out of " + totalMarks + " (" + (studentScores[0] / totalMarks * 100) + "%)<br>");

//     document.write(studentNames[1] + " scored " + studentScores[1] + 
//                    " out of " + totalMarks + " (" + (studentScores[1] / totalMarks * 100) + "%)<br>");

//     document.write(studentNames[2] + " scored " + studentScores[2] + 
//                    " out of " + totalMarks + " (" + (studentScores[2] / totalMarks * 100) + "%)<br>");

// Qno : 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["Red", "Green", "Blue", "Yellow"];
//     document.write("Initial colors: " + colors + "<br><br>");

    // a. Add color to the beginning
    // var colorAtStart = prompt("Enter a color to add at the beginning:");
    // colors.unshift(colorAtStart);
    // document.write("After adding at beginning: " + colors + "<br><br>");

    // b. Add color to the end
    // var colorAtEnd = prompt("Enter a color to add at the end:");
    // colors.push(colorAtEnd);
    // document.write("After adding at end: " + colors + "<br><br>");

    // c. Add two colors to the beginning
    // colors.unshift("Purple", "Orange");
    // document.write("After adding two colors at beginning: " + colors + "<br><br>");

    // d. Delete first color
    // colors.shift();
    // document.write("After deleting first color: " + colors + "<br><br>");

    // e. Delete last color
    // colors.pop();
    // document.write("After deleting last color: " + colors + "<br><br>");

    // f. Add color at specific index
    // var indexToAdd = +prompt("Enter the index where you want to add a color:");
    // var colorToAdd = prompt("Enter the color name to add:");
    // colors.splice(indexToAdd, 0, colorToAdd);
    // document.write("After adding at index " + indexToAdd + ": " + colors + "<br><br>");

    // g. Delete colors from specific index
    // var indexToDelete = +prompt("Enter the index from where you want to delete color(s):");
    // var numToDelete = +prompt("Enter how many colors you want to delete:");
    // colors.splice(indexToDelete, numToDelete);
    // document.write("After deleting " + numToDelete + " color(s) from index " + indexToDelete + ": " + colors + "<br><br>");

//  Qno : 10. Write a program to store student scores in an array & sort the array in ascending order
//   using Array’s sort method.    

// var scores = [320, 230, 480, 120];
// document.write("Scores of Students: " + scores + "<br>");
// scores.sort(function(a, b) {
//     return a - b;
// });
// document.write("Ordered Scores of Students: " + scores);

// Qno : 11. Write a program to initialize an array with city names. Copy 3 array elements from
//  cities array to selectedCities array.

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4);
// document.write("Cities list: " + cities + "<br>");
// document.write("Selected cities list: " + selectedCities);

// Qno : 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// var singleString = arr.join("");
// document.write(singleString);

// Qno : 13. Create a new array. Store values one by one in such a way that you can access the 
// values in the order in which they were stored. (FIFO-First In First Out)

// var queue = [];
// queue.push("First");
// queue.push("Second");
// queue.push("Third");
// document.write("Queue: " + queue + "<br>");
// document.write("Removed: " + queue.shift() + "<br>");
// document.write("Removed: " + queue.shift() + "<br>");
// document.write("Removed: " + queue.shift() + "<br>");

// Qno : 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// var plates = [];

// plates.push("Plate 1");
// plates.push("Plate 2");
// plates.push("Plate 3");

// document.write("Plates in stack: " + plates + "<br><br>");
// document.write("Using Plate: " + plates.pop() + "<br>");
// document.write("Using Plate: " + plates.pop() + "<br>");
// document.write("Using Plate: " + plates.pop() + "<br>");

// Qno : 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) 
// in an array.Display the following dropdown/select menu in your browser using document.write() method:

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//     document.write("<select>");
//     document.write("<option>" + phoneManufacturers[0] + "</option>");
//     document.write("<option>" + phoneManufacturers[1] + "</option>");
//     document.write("<option>" + phoneManufacturers[2] + "</option>");
//     document.write("<option>" + phoneManufacturers[3] + "</option>");
//     document.write("<option>" + phoneManufacturers[4] + "</option>");
//     document.write("<option>" + phoneManufacturers[5] + "</option>");
//     document.write("</select>");