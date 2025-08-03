function checkRecipeForm() {
  // Get references to all input fields and the error display container
  const email = document.getElementById("user-email");
  const name = document.getElementById("user-name");
  const title = document.getElementById("recipe-title");
  const time = document.getElementById("estimated-time");
  const cost = document.getElementById("estimated-cost");
  const image = document.getElementById("recipe-image");
  const ingredients = document.getElementById("ingredients");
  const instructions = document.getElementById("instructions");
  const formErrors = document.getElementById("form-errors");

  // Make the error message section visible and remove error styles from all fields
  formErrors.classList.remove("hide");
  [email, name, title, time, cost, image, ingredients, instructions]
    .forEach(input => input.classList.remove("error"));

  let errors = []; // Array to collect error messages

  // Validate email format
  if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/)) {
    errors.push("Invalid or missing email address.");
    email.classList.add("error");
  }

  // Validate name length
  if (name.value.trim().length < 2) {
    errors.push("Please enter your name.");
    name.classList.add("error");
  }

  // Validate recipe title length
  if (title.value.trim().length < 2) {
    errors.push("Recipe title is required.");
    title.classList.add("error");
  }

  // Validate estimated time format (e.g., "30 mins" or "2 hours")
  if (!time.value.match(/^\d+\s*(mins?|hours?)$/)) {
    errors.push("Enter estimated time like '30 mins' or '2 hours'.");
    time.classList.add("error");
  }

  // Validate cost format (must include $ and optional cents)
  if (!cost.value.match(/^\$\d+(\.\d{2})?$/)) {
    errors.push("Enter estimated cost like '$10.00'.");
    cost.classList.add("error");
  }

  // Check if an image file is selected
  if (image.files.length === 0) {
    errors.push("Please upload an image.");
    image.classList.add("error");
  }

  // Check if at least one ingredient is provided
  if (ingredients.value.trim().length < 1) {
    errors.push("Add at least one ingredient.");
    ingredients.classList.add("error");
  }

  // Check if instructions are provided
  if (instructions.value.trim().length < 1) {
    errors.push("Add step-by-step instructions.");
    instructions.classList.add("error");
  }

  // Display errors if present, else hide the error container
  if (errors.length > 0) {
    formErrors.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
    return false;
  } else {
    formErrors.classList.add("hide");
    formErrors.innerHTML = "";
    return true;
  }
}

// Attach click event listener to the submit button to run validation before submission
document.querySelector(".submit-button").addEventListener("click", function(event) {
  if (!checkRecipeForm()) {
    // Prevent form submission if validation fails
    event.preventDefault();
  }
});