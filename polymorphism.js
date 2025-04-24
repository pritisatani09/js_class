class animal{
    barking(){
        console.log("barking method....")
    }
}
class DOG extends animal{
    barking(){
        super.barking()
        console.log("ho hoo hooooooo")
    }
}
class cat extends animal{
    barking(){
        console.log("Meow meooww meeowwwwwwwwwww")
    }
}
let d = new DOG();
d.barking();