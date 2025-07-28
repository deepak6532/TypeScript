/*
Any Data Type:-
        . which allow a variable to hold values of any type
        . if you are not sure about data type of variable you can use any

*/
/*
Unknown Data Type:-
        .The unknown type in Typescript is similar to any ,but it's safer because it force type checking before perfromin
        operation on the value
 */
// example :any
var value = "ankit";
value = 100;
value = ['ankit'];
value = "aman";
// value =10
console.log(value.toUpperCase());
// example unknown 
var value2 = "yash  ";
value2 = 10;
value2 = ['yash', 'singhal'];
value2 = "yash  singhal";
value2 = 200.20254;
if (typeof (value2) === "string") {
    console.log("value2 is: ", value2.toUpperCase());
}
if (typeof (value2) === 'number') {
    console.log("value2 is ", value2.toFixed());
}
