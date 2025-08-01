document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".planner-form input[type='text']");
    const resetButton = document.querySelector("input[type='reset']");
    const randomButton = document.getElementById("random-fill");
    const form = document.querySelector(".planner-form");
  
    // Random meal options
    const randomMeals = {
      breakfast: ["Oatmeal", "Pancakes", "Smoothie", "Avocado Toast", "Egg Muffins"],
      lunch: ["Chicken Salad", "Grilled Cheese", "Burrito Bowl", "Pasta Salad", "Soup & Bread"],
      dinner: ["Spaghetti", "Stir Fry", "Curry", "Tacos", "Baked Salmon"]
    };
  
    // Load saved values from localStorage
    inputs.forEach(input => {
      const savedValue = localStorage.getItem(input.name);
      if (savedValue) input.value = savedValue;
  
      input.addEventListener("input", () => {
        localStorage.setItem(input.name, input.value);
      });
    });
  
    // Clear confirmation and clear localStorage
    resetButton.addEventListener("click", (e) => {
      if (!confirm("Clear all meal plans?")) {
        e.preventDefault();
      } else {
        localStorage.clear();
      }
    });
  
    // Random fill meals
    randomButton.addEventListener("click", () => {
      inputs.forEach(input => {
        if (input.placeholder.toLowerCase().includes("breakfast")) {
          input.value = randomMeals.breakfast[Math.floor(Math.random() * randomMeals.breakfast.length)];
        } else if (input.placeholder.toLowerCase().includes("lunch")) {
          input.value = randomMeals.lunch[Math.floor(Math.random() * randomMeals.lunch.length)];
        } else {
          input.value = randomMeals.dinner[Math.floor(Math.random() * randomMeals.dinner.length)];
        }
        localStorage.setItem(input.name, input.value);
      });
    });
  
    // Format and email plan
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      let message = "Weekly Meal Plan:\n\n";
  
      days.forEach(day => {
        message += `${day}\n`;
        ["breakfast", "lunch", "dinner"].forEach(meal => {
          const input = document.querySelector(`[name='${day.toLowerCase()}-${meal}']`);
          message += `  ${meal.charAt(0).toUpperCase() + meal.slice(1)}: ${input.value || "—"}\n`;
        });
        message += "\n";
      });
  
      const email = "you@example.com"; // Change to your email
      window.location.href = `mailto:${email}?subject=Meal Plan&body=${encodeURIComponent(message)}`;
    });
  });
  