
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



// // diffrence:-    type use = (= sign ) and interface use object 
//     // we can not define type same name but object create same name we can merge both in memory


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

// function fruits<T>(name:T):T{
//     return  name
// }

// let onlyFruit = fruits("mango")
// let onlyNumber  = fruits(10)
// let onlyBool = fruits(true)
// let onlyOther = fruits("orange")

// // NOTE:- if use use any data type in function to set the 'any' data type in all variable in function call 


// // use with array
// function userData<T>(data:T[]):T{

//     return data[3]
// }

// let userCollection = userData(['ankit','yash',"jay",10])

// console.log(userCollection)



// typeof operator 

let a = "hello"
let type  = typeof a;

console.log(a)
console.log(type)


let x:unknown = "hello"

console.log(x)
x  = 10 
console.log("Type of unkonwn a",typeof x)



let arr =  ["ankit",'aman',"yash",20]
console.log(arr)
console.log("type of arr",typeof arr)


let arr2 = [
    {name:"deepak",age:20},
    {name:"aadi",age:21}
]

console.log(arr2)
console.log("Type of arr2:",typeof arr2)


// void data type

function demo():void{

    let a:string = "ankit"
    console.log(a)
    // return a  we can not return value because data type void define 
}

demo()


// never data type 
/*
    The never type represents a wide range of type of values that never occur. This means that 
    it could be the return type of a function that never returns a particular value. 

*/
function infiniteLoop(): never{
    while(true){
        console.log('GeekforGeeks');
    }
}
// infiniteLoop()