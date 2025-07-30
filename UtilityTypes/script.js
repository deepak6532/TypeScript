var userSignup = {
    name: "deepak",
    phone: 9376072346,
    email: "deepak@gmail.com",
    password: "deepak12",
    address: "jaipur"
};
console.log("User Data ", userSignup);
// Pick<Type, Keys>   :- it is use to access the  type if we need to  in other type we can not redclare the other type
// . jin jin type ki need h unko le skte using pick
var userLogin = {
    email: "deepak@gmail.com",
    password: "deepak12"
};
// Omit<Type, Keys> => Constructs a type by picking all properties from Type and then removing Keys
// jo type nhi chaiye unko remove kr deta h ye or baki sabhi type use kr skte ho 
var userLogin2 = {
    email: "deepak@gmail.com",
    password: "deepak12"
};
var changePassword = {
    password: "we can not chnage the password "
};
console.log("change password ", changePassword);
