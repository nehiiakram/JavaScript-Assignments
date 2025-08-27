//  Chapter 17 to 20 

//  Qno: 1. Declare and initialize an empty multidimensional array. (Array of arrays)
// let multiArray = [ [], [], [] ];

//  Qno: 2 Declare and initialize a multidimensional array representing the following matrix:
// let  matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];

// Qno: 3 Write a program to print numeric counting from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//  Qno: 4. Write a program to print multiplication table of any number using for loop. Table number & length
//  should be taken as an input from user.
// let num = parseInt(prompt("Enter a number for table: "));
// let length = parseInt(prompt("Enter the length of table: "));
// for (let i = 1; i <= length; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// Qno: 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// let fruits = ["apple", "banana", "mango", "orange" , "strawberry"]
// for (let i = 0; i <= fruits.length; i++){
//     console.log(fruits[i]);
// }

// Qno: 6. smjhao or solve kro   Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// (a) Counting
// document.write("<b>Counting:</b><br>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// (b) Reverse counting
// document.write("<b>Reverse counting:</b><br>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// (c) Even numbers
// document.write("<b>Even:</b><br>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// (d) Odd numbers
// document.write("<b>Odd:</b><br>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// (e) Series with k
// document.write("<b>Series:</b><br>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

// Qno: 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user 
// whether the given item is found in the list or not. Example:
// var arr= ["cake", "apple pie", "cookie", "chips", "patties"]
// var userItem =prompt("What do you wat to order?");
// flag = false 
// for(var i = 0; i<arr.length; i++){
//     if(arr[i] === userItem){
//         console.log("Yes This Item is available");
//         flag = true
//         break;
//     }
// }
// if(flag === false){
//     console.log("Oh Sorry This Item is not Available");
// }

// Qno: 8. Write a program to identify the largest number in the given array.
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("Largest number is: " + largest);

// Qno: 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("Smallest number is: " + smallest);

// Qno: 10. Write a program to print multiples of 5 ranging 1 to 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) { 
//         console.log(i);
//     }
// }

