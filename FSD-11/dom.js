// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

// let ele = document.getElementById("test");
// // ele.innerText= "<h1>Header</h1>"
// ele.innerHTML = "<h1>Header</h1>"
// console.log(ele);

//!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array
// //! and store it inisde one more new array(pure array).
// //? syntax :- [...variable];
// let x = [...ele];
// // console.log(x , Array.isArray(x));
// x.map(element=>{
//     // console.log(element);
//     element.style.backgroundColor="orange"
// })

//!

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//!

// let ele = document.getElementsByName("formData");
// // console.log(ele , Array.isArray(ele));
// [...ele].map(inp=>{
//     console.log(inp.value);
// })

//!
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);

// let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
// btn.addEventListener("click",()=>{
//     // console.log("button clicked");
//     // alert("hi")
//     document.body.style.backgroundColor="tomato"
// })

// let btn = document.querySelector("#btn");
// btn.addEventListener("dblclick",()=>{
//     console.log("double clicked");
// })

// let divBlock = document.getElementById("divBlock");
// divBlock.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow"
//     divBlock.style.backgroundColor="blue"
// })

// divBlock.addEventListener("mouseleave",()=>{
//     document.body.style.backgroundColor="orange"
//     divBlock.style.backgroundColor="aqua"
// })

let inp = document.getElementById("inp");
inp.addEventListener("keydown", () => {
  console.log("keydown");
});

inp.addEventListener("keyup", () => {
  console.log("keyup");
});
