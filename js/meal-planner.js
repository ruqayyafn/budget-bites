document.addEventListener("DOMContentLoaded", () => {
  // Select all text inputs, reset button, random fill button, and the form itself
  const inputs = document.querySelectorAll(".planner-form input[type='text']");
  const resetButton = document.querySelector("input[type='reset']");
  const randomButton = document.getElementById("random-fill");
  const form = document.querySelector(".planner-form");

  // Preset meal options for random generation
  const randomMeals = {
    breakfast: ["Oatmeal", "Pancakes", "Smoothie", "Avocado Toast", "Egg Muffins"],
    lunch: ["Chicken Salad", "Grilled Cheese", "Burrito Bowl", "Pasta Salad", "Soup & Bread"],
    dinner: ["Spaghetti", "Stir Fry", "Curry", "Tacos", "Baked Salmon"]
  };

  // Load any previously saved meal plans from localStorage into the inputs
  // Each input has a unique name (e.g., "monday-breakfast"), used as the storage key
  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.name);
    if (savedValue) input.value = savedValue; // Restore saved value if it exists

    // Save to localStorage whenever user types in the input
    input.addEventListener("input", () => {
      // Key is the input's name, value is the input's text
      localStorage.setItem(input.name, input.value);
    });
  });

  // Clear meal plan: ask for confirmation, and if confirmed, wipe localStorage
  resetButton.addEventListener("click", (e) => {
    if (!confirm("Clear all meal plans?")) {
      e.preventDefault(); // Stop reset if user cancels
    } else {
      localStorage.clear(); // Removes all saved inputs for all days
    }
  });

  // Fill inputs randomly based on meal type (breakfast, lunch, dinner)
  randomButton.addEventListener("click", () => {
    inputs.forEach(input => {
      // Decide which meal category to pick from based on the placeholder
      if (input.placeholder.toLowerCase().includes("breakfast")) {
        input.value = randomMeals.breakfast[Math.floor(Math.random() * randomMeals.breakfast.length)];
      } else if (input.placeholder.toLowerCase().includes("lunch")) {
        input.value = randomMeals.lunch[Math.floor(Math.random() * randomMeals.lunch.length)];
      } else {
        input.value = randomMeals.dinner[Math.floor(Math.random() * randomMeals.dinner.length)];
      }
      // Save the randomly chosen value to localStorage
      localStorage.setItem(input.name, input.value);
    });
  });

  // When form is submitted, format weekly plan and open email client
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent full page refresh and submission

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let message = "Weekly Meal Plan:\n\n";

    // Build message line by line, combining each day's meals
    days.forEach(day => {
      message += `${day}\n`;
      ["breakfast", "lunch", "dinner"].forEach(meal => {
        const input = document.querySelector(`[name='${day.toLowerCase()}-${meal}']`);
        message += `  ${meal.charAt(0).toUpperCase() + meal.slice(1)}: ${input.value || "—"}\n`;
      });
      message += "\n";
    });

    // Use mailto: to open email client with the message prefilled
    const email = "you@example.com"; // Replace with actual recipient email
    window.location.href = `mailto:${email}?subject=Meal Plan&body=${encodeURIComponent(message)}`;
  });
});