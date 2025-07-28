class student{

    name:string;
    course:string;
    email:string;
    password:string;

    constructor()
    {
        console.log("Default constructor in student class")
    }

    showData(){
        console.log(`student name is ${this.name} and Course is ${this.course}` )
        
    }
}

const obj  = new student()

obj.name = "yash";
obj.course = "Mern Stack"

obj.showData()



// Constructor

let  name2:string = "Global name";

class student2{

    name:string = "jay";
    email:string;

    
    constructor(name:string,email:string)
    {
        this.name = name,
        this.email = email
    }

    // if you access the global variable to use without this
    greet(){
        return `Hello ${this.name}`
    }

}

const obj2 =  new student2("Deepak","deepak@gmail.com")

console.log(obj2.greet())




// extends  method in class 

/*
Classes may extend from a base class. A derived class has all the properties and methods of
its base class, and can also define additional members
 
Example:-
*/

class Animal{

    move()
    {
        console.log("Moving alone! ")
    }
}

class Dog extends Animal{

    woof(){
        console.log("Woof!")
    } 
}

const objDog = new Dog()

objDog.move()   // access property of base class
objDog.woof()