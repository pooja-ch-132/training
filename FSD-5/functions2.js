// ! return keyword
// function demo(a, b) {
//   console.log("Hi");
//   console.log("Good morning!");
//   return a + b; //! explicit return
// console.log("Hi");
// console.log("Bye");
//}
//demo(5, 7);

// let x = demo(5, 5);
// console.log(x);

// let y = (a, b) => a + b; //! implicit return
// let a = y(10, 20);
// console.log(a);

// let z = (a, b) => {
//   return a + b;
// }; //! explicit return
// let b = z(10, 100);
// console.log(b);

//! Higher order function

// function hof(a) {
//   return a;
// }
// let x = hof(function () {
//   return "Hello I am a callback function";
// });
// console.log(x);

// function hof(a) {
//   return a(); //!arguments are called
// }
// let x = hof(function () {
//   return "Hello I am a callback function";
// });
// console.log(x);

// function hof(a) {
//   return a(10, 5);
// }
// let x = hof(function (a, b) {
//   return "Hello I am a callback function";
// });
// console.log(x);

// function parent(callback) {
//   //!Higher Order function
//   return callback;
// }
// let x = parent(add(5, 5));
// console.log(x);

// function add(a, b) {
//   //!callback function
//   return a + b;
// }
// console.log(add(5, 5));

//!closure
// var a = 100;
// let b = "Hi";
// function x() {
//   var user = "Vinay";
//   let company = "Google";
//   const salary = 1234567890;
//   console.log(user);
//   console.log(company);
//   console.log(salary);
//   console.log(a, b);
// }
// x(); //Callback function, without this it will not give output.

var a = 100;
let b = "Hello";
function x() {
  var user = "Vinay";
  let company = "Google";
  const salary = 1234567890;
  console.log(user);
  console.log(company);
  console.log(salary);
  console.log(a, b);
}
x();
