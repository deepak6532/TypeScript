var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student() {
        console.log("Default constructor in student class");
    }
    student.prototype.showData = function () {
        console.log("student name is ".concat(this.name, " and Course is ").concat(this.course));
    };
    return student;
}());
var obj = new student();
obj.name = "yash";
obj.course = "Mern Stack";
obj.showData();
// Constructor
var name2 = "Global name";
var student2 = /** @class */ (function () {
    function student2(name, email) {
        this.name = "jay";
        this.name = name,
            this.email = email;
    }
    // if you access the global variable to use without this
    student2.prototype.greet = function () {
        return "Hello ".concat(this.name);
    };
    return student2;
}());
var obj2 = new student2("Deepak", "deepak@gmail.com");
console.log(obj2.greet());
// extends  method in class 
/*
Classes may extend from a base class. A derived class has all the properties and methods of
its base class, and can also define additional members
 
Example:-
*/
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving alone! ");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function () {
        console.log("Woof!");
    };
    return Dog;
}(Animal));
var objDog = new Dog();
objDog.move(); // access property of base class
objDog.woof();
