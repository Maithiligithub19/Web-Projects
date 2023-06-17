function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = false;

    // Clear previous error messages
    document.getElementById("first-name-error").innerHTML = "";
    document.getElementById("last-name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";

    // Validate first name
    if (firstName === "") {
      document.getElementById("first-name-error").innerHTML = "First name is required";
      error = true;
    }

    // Validate last name
    if (lastName === "") {
      document.getElementById("last-name-error").innerHTML = "Last name is required";
      error = true;
    }

    // Validate email
    if (email === "") {
      document.getElementById("email-error").innerHTML = "Email is required";
      error = true;
    }

    // Validate password
    if (password === "") {
      document.getElementById("password-error").innerHTML = "Password is required";
      error = true;
    }

    // If there are any errors, prevent form submission
    if (error) {
      return false;
    }
  }