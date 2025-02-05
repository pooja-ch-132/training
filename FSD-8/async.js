// console.log(10);
// console.log(20);
// setTimeout(() => {
//   console.lOg(30);
// }, 5000);
//setInterval(() => {
//document.writeln("MRU");
//   console.l0g(30);
// }, 1500);
// console.log(40);
// console.log(50);

//! promise

let p1 = new Promise((resolve, reject) => {});
console.log(p1);
//!fullfilled state
let p2 = new Promise((resolve, reject) => {
  resolve("success");
});
console.log(p2);
//!rejected state
// let p3 = new Promise((resolve, reject) => {
//   reject("success");
// });
// console.log(p3);
