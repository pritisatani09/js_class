class student{
    name = "riya";
    age = 34;

    display(a){
        console.log("display function called", + a , this.age)
    }
}
let obj = new student();
// console.log(obj);
// console.log(obj.age);
console.log(obj.display(1234));