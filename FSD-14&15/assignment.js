let form = document.querySelector("form");

let uname = document.getElementById("username");
let pwd = document.getElementById("pwd");

let gender = document.getElementsByName("gender");
let pwdCheck = document.getElementById("pwdCheck");
let checkLabel = document.getElementById("checkLabel");
pwdCheck.addEventListener("click", (e) => {
  if (e.target.checked) {
    pwd.setAttribute("type", "text");
    checkLabel.innerText = "Hide password";
  } else {
    pwd.setAttribute("type", "password");
    checkLabel.innerText = "Show password";
  }
});

// console.log(gender);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let un = username.value;
  let up = pwd.value;
  let g;
  for (let i = 0; i <= gender.length - 1; i++) {
    if (gender[i].checked) {
      g = gender[i].value;
    }
  }
  let userDetails = {
    username: un,
    password: up,
    gender: g,
  };

  localStorage.setItem("user details", JSON.stringify(userDetails));
  sessionStorage.setItem("user details", JSON.stringify(userDetails));
  console.log(userDetails);
});
