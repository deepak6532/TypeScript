// TypeScript - Abstract Class

/*

Define an abstract class in Typescript using the abstract keyword. Abstract classes are
mainly for inheritance where other classes may derive from them. We cannot create an instance(object) 
of an abstract class.

*/

abstract class Animal {

    constructor( public name:string)
    { }

    abstract makeSound():void;

    move(){
        console.log(`${this.name} is moving`)
    }
}



class Dog extends Animal{

    makeSound(){
        console.log(`${this.name} syas:woof!`);
    }
}


class Cat extends Animal{

    makeSound()
    {
        console.log(`${this.name} says: meow!`);
    }
}


const dog  = new Dog('Buddy');

dog.move()
dog.makeSound();



const cat = new Cat('whiskers')
cat.move()
cat.makeSound();