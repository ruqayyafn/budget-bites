// function to validate form inputs before submission
function checkForm() {
   // get references to input fields and the error message container
   const name = document.getElementById("name");
   const email = document.getElementById("email-addr");
   const message = document.getElementById("message");
   const formErrors = document.getElementById("form-errors");

   // make sure the error box is visible in case there are errors
   formErrors.classList.remove("hide");

   // clear previous error styles from inputs
   [name, email, message].forEach(input => input.classList.remove("error"));

   // initialize array to store error messages
   let errors = [];

   // validate name field (must not be empty)
   if (name.value.trim().length < 1) {
      errors.push("Please enter your name.");
      name.classList.add("error"); // Highlight the field
   }

   // validate email with regex (must match basic email format)
   if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)) {
      errors.push("Invalid or missing email address.");
      email.classList.add("error");
   }

   // validate message field (must not be empty)
   if (message.value.trim().length < 1) {
      errors.push("Missing message.");
      message.classList.add("error");
   }

   // if there are validation errors, show them in the error box and prevent submission
   if (errors.length > 0) {
      formErrors.classList.remove("hide");
      formErrors.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
      return false;
   } else {
      // no errors: hide the error box and allow form submission
      formErrors.classList.add("hide");
      formErrors.innerHTML = "";
      return true;
   }
}

// attach event listener to submit button
document.getElementById("submit").addEventListener("click", function(event) {
   // prevent form submission if validation fails
   if (!checkForm()) {
      event.preventDefault();
   }
});

