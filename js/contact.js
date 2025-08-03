function checkForm() {
   const name = document.getElementById("name");
   const email = document.getElementById("email-addr");
   const message = document.getElementById("message");
   const formErrors = document.getElementById("form-errors");

   formErrors.classList.remove("hide");
   [name, email, message].forEach(input => input.classList.remove("error"));

   let errors = [];

   if (name.value.trim().length < 1) {
      errors.push("Please enter your name.");
      name.classList.add("error");
   }

   if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)) {
      errors.push("Invalid or missing email address.");
      email.classList.add("error");
   }

   if (message.value.trim().length < 1) {
      errors.push("Missing message.");
      message.classList.add("error");
   }

   if (errors.length > 0) {
      formErrors.classList.remove("hide");
      formErrors.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
      return false;
   } else {
      formErrors.classList.add("hide");
      formErrors.innerHTML = "";
      return true;
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   if (!checkForm()) {
      event.preventDefault();
   }
});
