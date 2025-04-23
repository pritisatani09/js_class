// let data = {}
// console.log(data)

// let data = new Object()

let data = {
    names:"riya",
    Age:"25",
    indian:"yes",
    email:"xyzzzzz",
    sayHello:function(){
        console.log("hello.........");
    }

}
data.sayHello()
console.log(data)


//access method
// console.log(data.email);
// console.log(data['Age'])

//change property
// data.names="pop";


//add
data['hello']=101;
console.log(data)


//delete
delete data.Age;
console.log(data)



//to check property
console.log(data.hasOwnProperty('hello'));

//TO FIND OBJECT OR KEY
console.log(Object.keys(data));
console.log(Object.values(data));


