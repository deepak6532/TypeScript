/*

Learn what TypeScript is and how to get started.
Work with simple types (string, number, boolean).
Use special types (any, void, never, undefined, null).
Create and work with arrays and tuples.
Define object types and enums.
Use type aliases(user define type) and interfaces.
Work with union types and functions.
Understand type casting and classes
Use basic generics and utility types



*/




//Topic 1: Types

// Basic types  => Number ,String ,Boolean,Arrays,Tuples,Any,Unknown,Never,Void,Enum

    // any,unknown are both the same we store unknown value which is number ,string ,boolean 
    // never we can not return and can not execute the after never code 
    // Enum is use to group the value eg:
                                    // enum gender ={
                                    //      male="male",
                                    //      female="female",
                                    //}


// Examples:-

// let a:Number = 10;

// let first_name:String = "hey";

// let confirm_Variable:boolean = true

// let arr: Number[] = [1,2,3,4,5]                              // array define
// let arr2: String[] = ["abc","pqr","mno","xyz"]             //array define


// let arr1:number[] = [1,2,3,4,5,6]

// console.log(arr1)

// console.log("type ",typeof(arr1))



// let arr2:string[] = ["ram","shyam","krishna"]

// console.log(arr2)
// console.log("Type arr2",typeof(arr2))






// Topic 2 : type inference 


// Dynamically assign the type of a variable 

// let a;

// let b=12;
// let c ="c"
// let d = true




// Topic 3 : union and intersection types


    // union=> |
// let variable: string  | number;                 //ya to string ya fir number 

// variable = "deepak"

// variable = 12

//         // variable.   show the mathod if varibal string to  show string method


    // intersection type 


type  City = {
    name:string,
    population:number
}

type Planet = {
    name:string,
    cities:number
}


type CitiesPlanet = City & Planet;

let value: CitiesPlanet = {
    name:"Jaipur",
    population:500000,
    cities:12

}


console.log("next part ")

// NOTE : (Run File AutoMatically to convert automatic .ts to .js using "tsc --watch" )



// CREATE A CUSTOM TYPE USER ITSELF


type Name = String;
let a:Name; 



// Example custom type

type UserType = {

    name:string,
    email:string,
    username:string,
    age:number

}



let newuser :UserType = {
    name:"Ankit",
    email:"ankit@gmail.com",
    username:"ankit12",
    age:20
}  

// 1:28 interfaces




    // intersection &

// type  City = {
//     name:string,
//     population:number
// }

// type Planet = {
//     name:string,
//     cities:number
// }


// type CitiesPlanet = City & Planet;

// let value: CitiesPlanet = {
//     name:"Jaipur",
//     population:500000,
//     cities:12

// }


// console.log("value",value)


// // interface



// interface Users {
//     name:string,
//     age:number,
//     city:string
// }

// function getuser(user:Users)
// {
//     user.name="ankit"
    
// }



// // diffrence type use = and interface use object 
//     // we can not define type same name but object create same name we can merge both in memory
// example:-

// interface Human{
//     name:string
// }

// interface Human{
//     age:number
// }

// // we can merge both human
// function gethuman(human:Human)
// {
//     human.name ="Deepak"
//     human.age = 20
// }





// // USE 'extend' METHOD => Access the property of other interface example-

// interface Food{
//     name:String,
//     price:number
// }


// interface MethaFood extends Food{
//     // we access the property of Food interface 

//     foodtype:string
// }


// function getfood(food:MethaFood)
// {
//     food.name = "Laddu"

// }

// // 1:55 class






// //IM. GENERICS IN TYPESCRIPT :-

// // Generics in typScript allow you to create reusable components or functions that can work with multiple data types (maintaining type safety).

// // Example :-


    // THIS IS WITHOUT GENERICS  METHOD

// function fruits(name:string|number):string|number{
//     return name
// }

// fruits("apple")
// fruits(10)


    // USE  GENERICS METHOD 

function fruits<T>(name:T):T{
    return  name
}

let onlyFruit = fruits("mango")
let onlyNumber  = fruits(10)
let onlyBool = fruits(true)
let onlyOther = fruits("orange")

// NOTE:- if use use any data type in function to set the 'any' data type in all variable in function call 


// use with array
function userData<T>(data:T[]):T{

    return data[3]
}

let userCollection = userData(['ankit','yash',"jay",10])

console.log(userCollection)
