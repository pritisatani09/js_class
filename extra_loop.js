//1.palindrome number or not
// let num = prompt("enter number");
// let original = num;
// let reverse = 0;

// while(num > 0){
//     let rem = num % 10;
//     reverse = (reverse * 10) + rem;
//     num = Math.floor(num / 10)
// }

// if(original == reverse){
//     console.log("number is palindrome number")
// }else{
//     console.log("number is not palindrome number")
// }

// 2.armstrong number or not
// let num = 153;
// let original = num;
// let reverse = 0;

// while(num > 0){
//     let rem = num % 10;
//     reverse = reverse + rem ** 3;
//     num = Math.floor(num / 10)
// }

// if(original == reverse){
//     console.log("number is armstrong number")
// }else{
//     console.log("number is not armstrong number")
// }

// 3.reverse number print 
let num = 123;
let original = num;
let reverse = 0;

while(num > 0){
    let rem = num % 10;
    reverse = (reverse * 10) + rem;
    num = Math.floor(num / 10)
}
    console.log(original);
    console.log(reverse);
    