document.addEventListener("DOMContentLoaded", () => {
  // get the ul element containing the team members
  const teamList = document.getElementById("team-list");

  // get the div where extra info (fun facts) will be shown
  const infoBox = document.getElementById("team-extra-info");

  // define a set of fun facts associated with each team member name
  const funFacts = {
    ruqayya: "Ruqayya loves minimalist web design and drinking chai lattes.",
    muhammed: "Muhammed is great at organizing code and creating recipes (like the ones you see on our page!).",
    justin: "Justin is always working to be helpful, he created the meal planner and recipe upload!",
    brianna: "Brianna is passionate about nutrition and making life easier, she thought of all the tips!."
  };

  // listen for clicks on the team list
  teamList.addEventListener("click", (e) => {
    // find the closest li element that was clicked
    const li = e.target.closest("li");
    if (!li) return; // exit if the click wasn't on or inside an li

    // get the team member's name from the data-name attribute
    const name = li.dataset.name;
    // get the corresponding fun fact
    const fact = funFacts[name];

    // if a fact exists for the clicked name, show it in the info box
    if (fact) {
      infoBox.textContent = fact;
      infoBox.style.border = "1px solid #ccc";
      infoBox.style.padding = "0.5em";
      infoBox.style.marginTop = "1em";
    }
  });
});
