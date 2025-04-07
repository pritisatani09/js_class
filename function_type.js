//********************************************** 1.switch program
// TNRN
// function add1(){
//     let a=15,b=25;
//     console.log("Sum of A and B is ",a+b);
// }

// // TNRS 
// function add2(){
//     let a=15,b=35;
//     let x;
//     x = a + b;
//     return x;
// }

// // TSRN 
// function add3(a,b){
//     let total;

//     total = a+b;
//     console.log(total);
// }


// // TSRS 
// function add4(a,b){
// let total=a+b;
// return total;
// }

// choice = prompt("Enter your Choice:");

// switch(choice){
// case "1":
//     add1();
//     break;
// case "2":
//     console.log(add2());
//     break;
// case "3":
//     add3(10,20);
//     break;
// case "4":
//     console.log(add4(15,20));
//     break;
// default:
//     console.log("Invalid choice");

// }


//**********************************************2.recursion function
// function test(n) {
//     console.log(" inside function:", n);
//     if (n < 5) {
//         n++;
//         test(n);
//     }
//     console.log(" outside function:", n);
// }

// test(1);

//factorial number
// function factorial(n) {
//     if (n == 1) {
//         return 1;
//         }
//         else {
//             return n * factorial(n - 1);
//             }
//             }
//             console.log(factorial(5));

//fibonnaci series
// function fiboSeries(n) {
//     let a = 1, b = 1, next;
//     console.log("Fibonacci Series up to " + n + " terms:");
//     for (let i = 1; i < n; i++) {
//         console.log(a);
//         next = a + b;
//         a = b;
//         b = next;
//     }
// }
// fiboSeries(10);

// function fibonacci(n) {

//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
    
// }

// console.log("Fibonacci sequence:");
// n=10;
// for (let i = 1; i < n; i++) {
//     console.log(fibonacci(i));
// }



            