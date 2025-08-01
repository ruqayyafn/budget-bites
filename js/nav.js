document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  header.innerHTML = `
    <button class="hamburger" aria-label="Toggle navigation">☰</button>
    <a href="index.html" class="logo">
      <h1>Budget Bites</h1>
    </a>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="recipe-gallery.html">Recipes</a></li>
            <li><a href="upload.html">Upload</a></li>
            <li><a href="meal-planner.html">Meal Planner</a></li>
            <li><a href="tips.html">Tips</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
  `;

  // Hamburger toggle functionality
  const hamburger = header.querySelector(".hamburger");
  const nav = header.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
