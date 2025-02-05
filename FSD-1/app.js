//console.log(10);

var a = 10;
a = "Hi"; //?  re-initialization
console.log(a);

var b = 1000;
var b = 2000; //? re-declaration
console.log(b);

let c = 1000;
c = 5000; //?  re-initialization
console.log(c);

//let d = 1000;
//let d = 2000; //? re-declaration not possible.
console.log(b);

const user = 3000;
user = 3000;
console.log(user);

let person = {
  name: "John",
  age: 30,
};

function greet(name) {
  return `Hello, ${name}`;
}

let map = new Map();
map.set("key", "value");

let str3 = `template literals`;
console.log(str3);
console.log(typeof str3);

let num1 = 10;
console.log(num1, typeof num1);
qa;
let num2 = 10.3456789;
console.log(num2, typeof num2);

let bool1 = true;
console.log(bool1, typeof bool1);

let bool2 = false;
console.log(bool2, typeof bool2);

let a;
console.log(a, typeof a);

let a = null;
console.log(a);
console.log(typeof null);

console.log(2n, typeof 2n);
