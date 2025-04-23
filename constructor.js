//default 
// class Test{
//     constructor(){
//         console.log("default constructor is called......")
//     }

//     sayHello(){
//         console.log("say hello method called...")
//     }
// }
// let obj = new Test();
// obj.sayHello();


// parameterized
class Test{
    constructor(name,age){
        console.log("default constructor is called......",name,age)
        this.name = name;
        this.age = age;
    }

    sayHello(a){
        // console.log("say hello method called...",this.age,this.name)
        console.log("say hello method called...",a)

    }
}
let obj = new Test("rohit",25);
obj.sayHello("jolly");

