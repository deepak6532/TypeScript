/*
Any Data Type:-
        . which allow a variable to hold values of any type
        . if you are not sure about data type of variable you can use any

*/
/*
Unknown Data Type:-
        . The unknown type in Typescript is similar to any ,but it's safer because it force type
           checking before performing  operation on the value


           . variable pr operation perform krne se pehle uska type check krega ki wo string h ya number
             agr wo string h to  string method perform kr skte h agr wo number h to number operation perform kr skte h
           
           
             
 */
/* diffrence Any vs Unknown

 . variable pr operation perform krne se pehle uska type check krega ki wo kis type ka variable h if  string h ya number
agr wo string h to  string method perform kr skte h agr wo number h to numeric  operation perform kr skte h


.  jis type of variable hoga usi type ke operation perform honge jabki any ke andar error show krega
   agr  galat operation perform kr diya to (number pr string method perform show error) to error show krega

*/
// example :any
var value = "ankit";
value = 100;
value = ['ankit'];
value = "aman";
// value =10
console.log(value.toUpperCase());
// example unknown 
// let value2:unknown = "yash  "
// value2 = 10
// value2  = ['yash','singhal']
// value2 ="yash  singhal"
// value2 = 200.20254
// if(typeof(value2) === "string")
// {
//         console.log("value2 is: ",value2.toUpperCase())
// }
// if(typeof(value2) ==='number')
// {
//         console.log("value2 is ",value2.toFixed())
// }
