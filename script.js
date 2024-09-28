document.addEventListener("DOMContentLoaded", function () {
  const onlineId = document.getElementById("onlineId");
  const password = document.getElementById("password");
  const login = document.querySelector(".login-btn");


  function checkInputs() {
      if (onlineId.value.trim() !== "" && password.value.trim() !== "") {
          login.classList.add("enabled");
          login.disabled = false;
      } else {
          login.classList.remove("enabled");
          login.disabled = true;
      }
  }

  function toggleFilledClass(input) { // Added function to toggle filled class
      if (input.value.trim() !== "") {
          input.classList.add("filled");
      } else {
          input.classList.remove("filled");
      }
  }

  onlineId.addEventListener("input", function () {
      checkInputs();
      toggleFilledClass(onlineId); // Added call to toggle filled class
  });

  password.addEventListener("input", function () {
      checkInputs();
      toggleFilledClass(password); // Added call to toggle filled class
  });

  document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();

      const inputId = onlineId.value;
      const inputPassword = password.value;
      const rememberMe = document.getElementById("remember").checked;

      console.log("Id: ", inputId);
      console.log("Password:", inputPassword);
      console.log("Remember me:", rememberMe);
  });
});