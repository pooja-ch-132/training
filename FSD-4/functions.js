// function addToCart(){
//     alert("Product is added to cart")
// }

// function add(a,b){
//     console.log(a+b);
// }
// add(10 , 40)
// add(30 , 40)
// add(50 , 40)
// add(100 , 40)
// add(13 , 50)

// ! function without parameters
// function demo(){
//     console.log("function without parameters");
// }
// demo();

// ! function with parameters

// function userDetails(name , age , city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("Yeshwant" , 20 , "Hyderbad");

//! anonymus function
// function(){
//     console.log("Anonymus function");
// }
// ();

// ! function  expression
// let x = function(){
//     console.log("function expression is executing");
// };
// x();

// ! IIFE
// (function(){
//     console.log("IIFE");
// })();

//! arrow function
// function demo()
// {
//     console.log("Hello");
// }
// demo();

// let x = ()=>console.log("Arrow function");
// x();

// let x =_=>console.log("Arrow function");
// x();

// let x =a=>console.log(a);
// x(5);

// let x =(a , b)=>console.log(a+b);
// x(5,5);
// let x=_=>{console.log("Hi");
//         console.log("Hello");
//         console.log("Bye");}
//     x();

const exp = function () {
  console.log("Anonymous function with expression");
};
exp();

(function () {
  console.log("IIFE");
})();

const arr = () => console.log("Arrow function");

arr();

const arr2 = (a, b) => {
  console.log(a + b);
};

arr2(5);
let x = (_) => {
  console.log("object");
};
