//!

// let vd = document.createElement("video123");
// vd.setAttribute("src", "./video.mp4");
// vd.setAttribute("controls", "controls");
// console.log(vd);

// document.body.appendChild(vd);

//!

// let h1 = document.createElement("h1");
// h1.innerText = "MRU Batch JS session";
// console.log(h1);
// h1.removeAttribute("id");
// document.body.appendChild(h1);

//!

// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border = "2px solid red";
// mainEle.style.width = "550px";
// mainEle.style.height = "550px";

// console.log(mainEle);

// let topEle = document.createElement("div");
// mainEle.setAttribute("id", "topBlock");
// //console.log(topEle);

// let image = document.createElement("img");
// image.src =
//   "https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.style.width = "550px";

// let bottomEle = document.createElement("div");
// mainEle.setAttribute("class", "bottomEle");
// //console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "Cat";
// h1.style.textAlign = "center";

// let btn = document.createElement("button");
// btn.innerText = "View More";
// btn.style.border = "none";
// btn.style.padding = "20px";
// btn.style.backgroundColor = "dodgerblue";
// btn.style.color = "white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.append(topEle);
// mainEle.append(bottomEle);
// document.body.appendChild(mainEle);

//!
let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let check = document.getElementById("check");

let show = document.getElementById("show");

let gender = document.getElementsByName("gender");

//!hiding and showing the password values

check.addEventListener("click", (event) => {
  //console.log(event.target.checked);
  if (event.target.checked == true) {
    password.setAttribute("type", "text");
    show.innerText = "hide password";
  } else {
    password.setAttribute("type", "password");
    show.innerText = "show password";
  }
});

//console.log(gender);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let un = username.value;
  let up = password.value;
  let gen;

  for (let i = 0; i <= gender.length - 1; i++) {
    //console.log(gender[i].checked);
    if (gender[i].checked) {
      gen = gender[i].value;
    }
  }
  //console.log(un, up, gen);
  let userDetails = {
    username: un,
    password: up,
    gender: gen,
  };
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
  console.log(userDetails);
});
