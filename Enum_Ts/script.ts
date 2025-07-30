
// ENUMS IN TYPESCRIPT

/*
Enums in typescript are commonly used when you want to represent a set of related values
and choose one value from multiple options. enums provide a convenient way to define a set of named values and 
associate them  with specific meaning 
*/


/*

in typescript when enum constants are not explicity assigned numeric values they are automatically assigned
incremental numeric values starting from 0. the default numeric value for the first enum constant is 0 , and 
subsequent enum constants receive values incremented by 1

*/

// example:-

enum Roles{
    user  = "user",
    admin = "admin",
    hr="hr"
}


type LoginDetails = {
    name?:string;
    email:string;
    password:string | number;
    role:Roles
}



const isAdmin = (user:LoginDetails) =>{

    const {name,role} = user

   return  role === "admin" ? `${name} is allow to edit this website `:
    `${name } is not allowed to edit this website `

}


const UserOneLogin:LoginDetails ={
    name:"Deepak",
    email:"deepak@gmail.com",
    password:"deepak12",
    role:Roles.admin
}

const UserSecondLogin:LoginDetails ={
    name:"yash",
    email:"yash@gmail.com", 
    password:"yash12",
    role:Roles.user
}


console.log(isAdmin(UserOneLogin))
console.log(isAdmin(UserSecondLogin))



// Example:2  'gender'

enum Gender{
    male ="male",
    female = "female"
   
}



type studentType ={
    name:string,
    age:number,
    email:string,
    password:string | number,
    gender:Gender
}


const isStudent = (student:studentType) =>{

    const {name,gender} = student

    return gender ==="male" ? `${name} allowed to college tour ` :

    `${name} not allowed to college tour`
}



const studentOne:studentType= {
    name:"Rohit",
    age:20,
    email:"rohit@gmail.com",
    password:1234,
    gender:Gender.male

}


const studentSecond:studentType  ={

    name:"mahak",
    age:19,
    email:"mahak@gmail.com",
    password:"mahak123",
    gender:Gender.female

}

console.log(isStudent(studentOne))

console.log(isStudent(studentSecond))