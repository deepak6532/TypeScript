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
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin" ? "".concat(name, " is allow to edit this website ") :
        "".concat(name, " is not allowed to edit this website ");
};
var UserOneLogin = {
    name: "Deepak",
    email: "deepak@gmail.com",
    password: "deepak12",
    role: Roles.admin
};
var UserSecondLogin = {
    name: "yash",
    email: "yash@gmail.com",
    password: "yash12",
    role: Roles.user
};
// console.log(isAdmin(UserOneLogin))
// console.log(isAdmin(UserSecondLogin))
// Example:2
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var isStudent = function (student) {
    var name = student.name, gender = student.gender;
    return gender === "male" ? "".concat(name, " allowed to college tour ") :
        "".concat(name, " not allowed to college tour");
};
var studentOne = {
    name: "Rohit",
    age: 20,
    email: "rohit@gmail.com",
    password: 1234,
    gender: Gender.male
};
var studentSecond = {
    name: "mahak",
    age: 19,
    email: "mahak@gmail.com",
    password: "mahak123",
    gender: Gender.female
};
console.log(isStudent(studentOne));
console.log(isStudent(studentSecond));
