//!Assignement
// let bgColor = document.querySelectorAll(".bgColor");
// console.log(bgColor);
// [...bgColor].map((element) => {
//   //console.log(element);
//   element.addEventListener("mouseover", () => {
//     console.log(element.innerText);
//     element.style.backgroundColor = element.innerText;
//   });
// });
// //!image
// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// // ele.setAttribute("id", "demo");
// ele.id = "demo";

// // ele.removeAttribute("id");
// //console.log(ele);

// let image = document.createElement("img");
// image.src = "https://fileinfo.com/img/ss/xl/jpg_44-2.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image);

//!form to localdatabase.

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log(event);
  //console.log("form submitted");
  let uname = username.value;
  let uemail = mail.value;
  let upass = psw.value;
  let userDetails = {
    uname,
    uemail,
    upass,
  };
  console.log(userDetails);
  localStorage.setItem("userData", JSON.stringify(userDetails));
});
