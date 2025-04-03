//1.program to calculate Area of Circle.
// function circle(){
//     let r = 10;
//     let area;
    
//     area = 3.14 * (r ** 2);
//     console.log("Area of circle:",area);
// }
// circle();

//2.program to calculate Area of Square.
// function square(){
//     let a = 3;
//     let area;
//     area = a * a;
//     console.log("area of:",area)
// }
// square();

// 3.program to calculate Area of Rectangle.
// function Rectangle(){
//     let a,w=5,l=4;
//     a = w * l;
//     console.log("area of:",a)
// }
// Rectangle();

//4.program to calculate Area of Triangle.
// function Triangle(){
//     let t;
//     let b = 3,h = 4;

// t = 1/2 * b * h;
// console.log("value of area:",t)
// }
// Triangle();

//5.program to calculate simple intrest
// function intrest(){
//     let p = 50000, r = 2.5 ,n = 3,i;
// i = (p * r  * n)
// console.log(i);
// }
// intrest();

// 6.Enter two value find smallest.
// function minNumber(){
// let x = 5,y = 6;

// if(x < y)
// {
//     console.log("x is smaller number")
// }else{
//     console.log("y is smaller number")
// }
// }
// minNumber();

//7.Enter one value find its positive or negative.
// function number(){
// let x = 5,y = -10,c;

// if(c > 0)
// // if(x > 0),(y > 0)
// {
//     console.log("x is positive number")
// }else{
//     console.log("y is nagative number")
// }
// }
// number();

//8. Enter one value find its divisible by 5 or not. 
// function divisible(){
// let n = 16;

// if(n % 5 == 0){
//     console.log("n is divisible number")
// }else{
//     console.log("n is not divisible number")
// }
// }
// divisible();

//9. Enter one value find its divisible by 5 and 3 or not.
// function divisible (){
// let n = 12;

// if(n % 5 == 0 && n % 3 == 0  ){
//     console.log("n is divisible by 5 number")
// }else{
//     console.log("n is divisible by 3 number")
// }
// }
// divisible();

//10. Enter Students marks wheather pass or not.
// function wheather(){
// let marks = 20 ;
// if (marks >= 40) {
//     console.log(" Student is pass ")
//     }
//     else {
//         console.log(" Student is fail ")
//         }
// }
// wheather();

//11.Enter year find its leap year or not.
// function leap(){
// let year = 2020;
// if (year % 4 == 0) {
//         console.log(" year is leap year ")
//         }
//         else {
//             console.log(" year is not leap year ")
//         }
// }
// leap();

//12. Enter a, b, c find largest among them.
// function largest(){
// let a = 10 ; 
// let b = 20 ;
// let c = 30 ;
// if (a > b && a > c) {
//     console.log(" a is largest ")
//     }
//     else if (b > a && b > c) {
//         console.log(" b is largest ")
//         }
//         else {
//             console.log(" c is largest ")
//         }
// }
// largest();

//3.Print out 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 4. Print out 51 to 99
// for(let i=51; i<=99; i++){
//         console.log(i)
//     }
    
// 5. Enter n and print out 1 to n
// let n;
// n = prompt("Enter a number:")
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 6. Enter n and print out n to 1
// let n;
// n = prompt("Enter a number:")
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// 7. Enter n and print out -n to n
// let n = prompt("Enter a number:")

// for (let i = -n; i <= n; i++) {
//     console.log(i);
// }

// 8. Enter n and print out odd no. up to n
// let n = prompt("Enter a number:")

// for (let i = 1; i <= n; i ++) {
//     if (i % 2 != 0){
//     console.log(i);
// }
// }

// 9. Enter n and print out even no. up to n
// let n = prompt("Enter a number:")

// for (let i = 2; i <= n; i=i+2) {
//     console.log(i);
// }


// 10. Enter n and print out table of n up to n*10
// let n = prompt("Enter a number:"); // Take input from user

// console.log(`Multiplication Table of ${n}:`);

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }


//11.Enter n and print out table of n up to n*5
// let n = prompt("Enter a number:"); // Take input from user

// console.log(`Multiplication Table of ${n}:`);

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }

/************************************* for loop */
//1.Print out 10 to 1
// function number(){
// let i;
// for(i=10;i >= 1; i--){
//     console.log(i);
// }
// }
// number();

//2. Print out 51 to 99
// function number(){
// let i;
// for(i=51;i<=99;i++){
//     console.log(i);
// }
// }
// number();

//3. Enter n and print out 1 to n
// function number(){
// let n,i;
// n = prompt("Enter a number:")
// for(i = 1;i <= n;i++) {
//     console.log(i);
// }
// }
// number();

//4. Enter n and print out n to 1
// function number(){
// let n = prompt("Enter a number:");
// let i;
// for(i = n;i >= 1; i--) {
//     console.log(i);
// }
// }
// number();

// 5. Enter n and print out -n to n
// function number(){
// let n = prompt("Enter a number:")
// let i = -n;
// while(i <= n) {
//  console.log(i);
//     i++
// }
// }
// number();

//6. Enter n and print out odd no. up to n
// function number(){
// let n = prompt("Enter a number:");
// let i = 1;

// while (i <= n) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// }
// number();

//7. Enter n and print out even no. up to n
// function number(){
// let n = prompt("Enter a number:");
// let i = 2;

// while (i <= n) {
//     console.log(i);
//     i += 2;
// }
// }
// number();

//*************************************************************************//

//1. Print out series 1,4,9,16,.....,n
// function print(){
// let n = prompt("enter number of n");
// for(let i= 1; i <= n; i++){
//     console.log(i * i)
// }
// }
// print();

// 2. Print out series 1,4,3,16,5,...,n
// function print(){
// let n = prompt("Enter a number:")
// for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);  
//     } else {
//         console.log(i * i);
//     }
// }
// }
// print();

// 3. Print out series 1,2,4,8,16,...,n
// function print(){
// let n = prompt("Enter a number:")
//     let num = 1;
//     while (num <= n) {
//         console.log(num);
//         num *= 2;
//     }
// }
// print();

// 4. Print out series 1,4,12,32,80,...,n
// function printSeries(n) {
//     let num = 1;
//     let increment = 2;
//     for (let i = 0; i < n; i++) {
//         console.log(num);
//         num = (num * 2) + increment;
//         increment *= 2;
//     }
// }
// printSeries(10);

// 5. Find the sum of numbers from 1 to 100
// function print(){
// let n = prompt("Enter a number:");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("Sum:", sum);
// }
// print();

// 6. Find the factorial of a given number.
// function print(){
// let n = prompt("Enter a number:");
// let fact=1;

// for(let i = n; i >= 1;i-- ){
//     fact = fact * i;
// }
// console.log("fact:", fact)
// }
// print();

// 7. Program to Print Fibonacci Series up to n
// function printFibonacci(n) {
//     let a = 0, b = 1, next;
    
//     for (let i = 0; i < n; i++) {
//         console.log(a);  // Print the current term
//         next = a + b;    // Compute the next term
//         a = b;           // Update a
//         b = next;        // Update b
//     }
// }
// printFibonacci(10);

// 8. Program to Find the Sum of Digits of a Number
// function sumOfDigits(num) {
//     let sum = 0;
//     num = Math.abs(num); // Ensure the number is positive

//     for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//         sum += temp % 10; // Extract last digit and add to sum
//     }

//     return sum;
// }

// // Example usage
// let number = 12345;
// console.log("Sum of digits:", sumOfDigits(number)); 

