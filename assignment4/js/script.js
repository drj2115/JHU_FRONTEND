/*
Notes:
two ways to define function:
    1) function a(x, y) { return x > y; }
    2) var a = function(x, y) { return x > y; }
types:
    Boolean - true/false
    Undefined - lack of definition
    Null - lack of value
    Number - 64-bit floating point numeric type
    String - sequence of chars
    Symbol - ?
    Object - name value pairs
equality:
    == performs type conversion, then compares (e.g., '4' == 4 returns true)
    === compares without type conversion (e.g., '4' === 4 returns false)
*/

var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined");
}
if (x == null) {
    console.log("x is null");
}

x = new Object();
x.name = "hello, sir";
console.log(x);
console.log(x.name);

function a(x) {
    x.name = "Dallas";
    return;
}
function b(x) {
    x = {
        "lastname": "Jones"
    };
    return;
}
var y = {
    "name": "Kyle"
};
console.log(y); // returns kyle
a(y);
console.log(y); // returns dallas
b(y);
console.log(y); // should be unchanged

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();