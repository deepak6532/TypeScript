interface signupdetail {
    name:string,
    phone:number,
    email:string,
    password:string,
    address:string
}



const userSignup:signupdetail = {

      name : "deepak",
      phone:9376072346,
      email:"deepak@gmail.com",
      password:"deepak12",
      address:"jaipur"

}

console.log("User Data ",userSignup)


    // Pick<Type, Keys>   :- it is use to access the  type if we need to  in other type we can not redclare the other type
                // . jin jin type ki need h unko le skte using pick


const userLogin:Pick<signupdetail,"email" | "password"> ={

    email:"deepak@gmail.com",
    password:"deepak12"
     

}



// Omit<Type, Keys> => Constructs a type by picking all properties from Type and then removing Keys
                        // jo type nhi chaiye unko remove kr deta h ye or baki sabhi type use kr skte ho 

const userLogin2:Omit<signupdetail,"name"|"phone" | "address"> = {

    email:"deepak@gmail.com",
    password:"deepak12"
}


// Utility Type 3 => readonly

// Readonly<Type> := Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

        // . readonly is use to use only read we can not change and update the property 


interface validpassword {
    password:string,    
}
const changePassword: Readonly<validpassword> = {

  password: "deepak1234"
};


// changePassword.password = "ankit"
console.log("change password ",changePassword)