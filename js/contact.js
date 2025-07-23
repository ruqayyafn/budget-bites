function checkForm() {
   const fullName = document.getElementById("full-name");
   const email = document.getElementById("email-addr");
   const message = document.getElementById("message");
   const formErrors = document.getElementById("form-errors");

   formErrors.classList.remove("hide");
   [fullName, email, message].forEach(input => input.classList.remove("error"));

   let errors = [];

   if (fullName.value.trim().length < 1) {
      errors.push("Missing full name.");
      fullName.classList.add("error");
   }

   if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)) {
      errors.push("Invalid or missing email address.");
      email.classList.add("error");
   }

   if (message.value.trim().length < 1) {
      errors.push("Missing message.");
      message.classList.add("error");
   }

   console.log("checkForm called, errors:", errors.length);
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

console.log("contact.js loaded and running!");