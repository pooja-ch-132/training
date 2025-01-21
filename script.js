document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert(`Logged in with Username: ${username}`);
      // Proceed with form submission or AJAX request
    } else {
      alert("Please fill in all fields");
    }
  });
