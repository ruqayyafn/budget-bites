document.addEventListener("DOMContentLoaded", () => {
  const teamList = document.getElementById("team-list");
  const infoBox = document.getElementById("team-extra-info");

  const funFacts = {
    ruqayya: "Ruqayya loves minimalist web design and drinking chai lattes.",
    muhammed: "Muhammed is great at organizing code and creating recipes (like the ones you see on our page!).",
    justin: "Justin is always working to be helpful, he created the meal planner and recipe upload!",
    brianna: "Brianna is passionate about nutrition and making life easier, she thought of all the tips!."
  };

  teamList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const name = li.dataset.name;
    const fact = funFacts[name];

    if (fact) {
      infoBox.textContent = fact;
      infoBox.style.border = "1px solid #ccc";
      infoBox.style.padding = "0.5em";
      infoBox.style.marginTop = "1em";
    }
  });
});
