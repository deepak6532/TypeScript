//IM. GENERICS IN TYPESCRIPT :-
// Generics in typScript allow you to create reusable components or functions that can work with multiple data types (maintaining type safety).
// Example :-
// THIS IS WITHOUT GENERICS  METHOD
function fruits(name) {
    return name;
}
fruits("apple");
fruits(10);
// USE  GENERICS METHOD 
function fruits2(name) {
    return name;
}
var onlyFruit = fruits2("mango");
var onlyNumber = fruits2(10);
var onlyBool = fruits2(true);
var onlyOther = fruits2("orange");
// NOTE:- if use use any data type in function to set the 'any' data type in all variable in function call 
// use with array
function userData(data) {
    return data[3];
}
var userCollection = userData(['ankit', 'yash', "jay", 10]);
console.log(userCollection);
// Exaple 2: 
function studentData(data) {
    return data;
}
var studentName = studentData("yash");
var studentAge = studentData(20);
var studentDomain = studentData("Mern Stack");
var studentPosition = studentData("Intern");
console.log("student name is ".concat(studentName, " , student age is  ").concat(studentAge, ", student domain is ").concat(studentDomain));
// Example:3 Array example
function employeeData(empData) {
    console.log("Employee name is ".concat(empData[0]));
    return empData;
}
var data = employeeData(['deepak', 20, "jaipur"]);
console.log("Employee data is ".concat(data));
