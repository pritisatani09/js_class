// single ineritance
// class parent{
//     sayparent(){
//         console.log("parent class called...")
//     }
// }
// class child extends parent{
//     saychild(){
//         console.log("child class called...")
//     }
// }
// let obj = new child()
// obj.sayparent()

// single inheritance with constructor
// class parent{
//     constructor(){
//         console.log("parent constructor.....")
//     }
//     sayparent(){
//         console.log("parent class called...")
//     }
// }
// class child extends parent{
//     constructor(){
//         super()
//             console.log("child constuctor...")
//     }
//     saychild(){
//         console.log("child class called...")
//     }
// }
// let obj = new child()
// obj.sayparent()

// multilevel
// class A{
//     sayA(){
//         console.log("class a called..")
//     }
// }
// class B extends A{
//     sayB(){
//         console.log("clas b called....")
//     }
// }
// class C extends B{
//     sayC(){
//         console.log("class c called...")
//     }
// }
// let obj = new C();
// obj.sayA();
// obj.sayB();
// obj.sayC();


// hirarchical
class ABC{
        sayA(){
            console.log("class a called..")
        }
    }
    class PQR extends ABC{
        sayB(){
            console.log("class b called....")
        }
    }
    class XYZ extends ABC{
        sayC(){
            console.log("class c called...")
        }
    }
let a = new PQR();
a.sayA()
a.sayB()
let b = new XYZ();
b.sayA()
b.sayC()



