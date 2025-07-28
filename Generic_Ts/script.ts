

//IM. GENERICS IN TYPESCRIPT :-

// Generics in typScript allow you to create reusable components or functions that can work with multiple data types (maintaining type safety).

// Example :-


    // THIS IS WITHOUT GENERICS  METHOD

function fruits(name:string | number):string|number{
    return name
}

fruits("apple")
fruits(10)


    // USE  GENERICS METHOD 

function fruits2<T>(name:T):T{
    return  name
}

let onlyFruit = fruits2("mango")
let onlyNumber  = fruits2(10)
let onlyBool = fruits2(true)
let onlyOther = fruits2("orange")

// NOTE:- if use use any data type in function to set the 'any' data type in all variable in function call 


// use with array
function userData<T>(data:T[]):T{

    return data[3]
}

let userCollection = userData(['ankit','yash',"jay",10])

console.log(userCollection)



// Exaple 2: 

function studentData<T>(data:T):T {

    return data
}


let studentName =  studentData("yash")
let studentAge =   studentData(20)
let studentDomain = studentData("Mern Stack")
let studentPosition = studentData("Intern")

console.log(`student name is ${studentName} , student age is  ${studentAge}, student domain is ${studentDomain}`);





// Example:3 Array example

function employeeData<T>(empData:T):T{

    console.log(`Employee name is ${empData[0]}`)
    
    return empData
}

let data  =  employeeData(['deepak',20,"jaipur"])

console.log(`Employee data is ${data}`)