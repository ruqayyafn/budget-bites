// object to store all the quotes, authors and additional details
const tipsOfTheDayQuotes = {
  "Add salt to your cutting board when mincing garlic": {
    "Gordan Ramsay":
    "Since salt is abrasive, by adding salt to your cutting board before mincing garlic, it allows you to get a finer chop on the garlic. Additionally, salt will keep the garlic from sticking to your knife. Avoid buying a garlic press and try this tip instead!"
  },
  "I use so many anchovies at home. Comical amounts. They have the magical effect of giving simple, quickly cooked meals so much oomph. I love to overload them in most things, but if you’re unsure, just get a small jar and melt them into olive oil and garlic over low heat, then wilt in some greens and season with a dash of red wine vinegar. It’s the perfect side dish, or magnificent tossed with spaghetti. When I’m tired I’ll just eat them on buttered baguettes with a squeeze of lemon. Heaven.": {
    "Claire Livia Lassam":
    "Anchovies dissolve easily into oil and add a rich, umami depth to dishes without tasting overtly fishy. This makes them an excellent flavor booster in pasta, sauces, or sautéed greens. They're also a quick pantry hack for meals that feel chef-level without the effort."
  },
  "You don’t need much to make a difference in a dish—it adds a depth of flavour to most things you make at home. You don’t want to use enough that someone can say, ‘Hey there is fish sauce in there,’ but you want them to feel like something is missing if it isn’t there": {
    "Clark Deutscher":
    "Fish sauce is a stealthy flavor enhancer. Use just a splash in soups, stir-fries, dressings, or braises to deepen complexity. When balanced properly, it blends in seamlessly, making dishes taste fuller without anyone detecting its presence."
  },
  "I’m a fan of using commercial restaurant storage containers at home, like Cambro.": {
    "Chanthy Yen":
    "Cambro containers are durable, stackable, and space-efficient—perfect for batch cooking or meal prep. They're designed to withstand heavy use and keep food fresher longer. Switching from random bowls to standardized containers can tidy up your fridge fast."
  },
  "Mason jars! Just try not to have too many different shapes, otherwise you’ll go crazy stacking and storing everything.": {
    "Phong Vo":
    "Mason jars are great for storage, pickling, overnight oats, or even salad dressings. Choosing uniform sizes helps with space management and stackability, preventing your cupboards or fridge from becoming a disorganized Tetris game."
  },
  "If your avocados are perfectly ripe and you’re not going to eat them anytime soon, then you can freeze them to prevent over-ripening.": {
    "Phong Vo":
    "To freeze ripe avocados, remove the skin and pit, mash or slice them, and store in an airtight container or freezer bag. Add a little lemon or lime juice to prevent browning. Great for smoothies, spreads, or guacamole later on."
  },
  "I will chop a whole bunch of garlic in a food processor at the beginning of the month, place it in a Ziploc and section out little squares before placing in the freezer. I break off a piece or two of frozen garlic when I need it.": {
    "Lawren Moneta":
    "Batch-prepping garlic this way saves tons of time on weeknight meals. Freezing it in pre-portioned squares means you always have some ready without peeling or mincing. Just toss a frozen piece into your pan or pot and you're good to go."
  },
  "After washing and peeling purple beets, you can use the scraps to colour your pickled vegetables by adding some into your pickling jars.": {
    "Alex Kim":
    "Beet scraps naturally dye pickling brine a vibrant pink without altering the flavor too much. It’s a fun way to add visual flair to onions, radishes, or cauliflower—and makes your jars stand out on a shelf or dinner table."
  },
  "Take trim from fish or meat to make croquettes or meatballs.": {
    "Ben Berwick":
    "Scraps and trimmings from cuts of meat or fish are often overlooked but perfect for grinding or mincing into croquettes, dumplings, or meatballs. It’s a sustainable, zero-waste way to stretch your ingredients and maximize flavor."
  },
  "I make croutons with stale bread, and use coffee grounds as plant fertilizer.": {
    "Dawn Doucette":
    "Instead of tossing leftover bread or used coffee grounds, repurpose them. Cube stale bread, toss with oil and seasoning, and bake for homemade croutons. Coffee grounds enrich soil with nitrogen—great for acid-loving plants like tomatoes or hydrangeas."
  }
};

// object to store the image src and alt
const imageSrcAndAlt = {
    "images/mincing-garlic.jpg":"mincing garlic",
    "images/anchovies.jpg":"dried anchovies",
    "images/fish-sauce.jpg":"fish sauce",
    "images/cambro-containers.jpg":"cambro containers",
    "images/mason-jars.jpg":"mason jars",
    "images/avocados.jpg":"avocados",
    "images/food-processing-garlic.jpg":"food processing garlic",
    "images/purple-beets.jpg":"purple beets",
    "images/croquettes.jpg":"croquettes",
    "images/croutons.jpg":"croutons",
}

// object mapping image source names to their reference URLs
const imageReferences = {
    "The Mediterranean Dish":"https://www.themediterraneandish.com/how-to-mince-garlic/",
    "Carving a Journey":"https://www.carvingajourney.com/dried-anchovies-in-korean-cooking-myeolchi/",
    "martha stewart":"https://www.marthastewart.com/what-is-fish-sauce-11766616",
    "Sam Tell":"https://www.samtell.com/blog/meet-the-cambro-camsquares-freshpro-smart-kitchen-storage-solutions",
    "Simply Canning":"https://www.simplycanning.com/ball-canning-jars/",
    "Simply Recipies":"https://www.simplyrecipes.com/how-to-store-avocados-hass-expert-11740403",
    "KitchenAid":"https://www.kitchenaid.com/pinch-of-help/countertop-appliances/how-to-mince-garlic.html",
    "Healthline":"https://www.healthline.com/nutrition/benefits-of-beets",
    "Gastro Portugal":"https://gastroportugal.com/beef-croquettes/",
    "Two Peas and their Pod":"https://www.twopeasandtheirpod.com/homemade-croutons/",
}

// function to update the "Tip of the Day" content on the page
function updateTipOfTheDay() {
  // selects the container where the content will be added
  const container = document.querySelector(".tip-of-the-day-content");

  // gets the existing elements
  let quote = document.getElementById("tip-of-the-day-quote");
  let author = document.getElementById("tip-of-the-day-author");
  let details = document.getElementById("tip-of-the-day-details");
  let image = document.getElementById("tip-of-the-day-img");

  const imageReference = document.getElementById("tip-of-the-day-image-reference");

  // if any of the main elements don't exist yet, create and append them
  if (!quote || !author || !details || !image) {
    // clear the container
    container.innerHTML = "";

    // creates two divs, one for the text and one for the image
    const textContainer = document.createElement("div");
    const imageContainer = document.createElement("div");

    // creates and appends the elements 
    quote = document.createElement("q");
    quote.id = "tip-of-the-day-quote";
    quote.tabIndex = 2;

    author = document.createElement("p");
    author.id = "tip-of-the-day-author";

    details = document.createElement("p");
    details.id = "tip-of-the-day-details";
    details.tabIndex = 3;

    image = document.createElement("img");
    image.id = "tip-of-the-day-img";

    textContainer.appendChild(quote);
    textContainer.appendChild(author);
    textContainer.appendChild(details);
    imageContainer.appendChild(image);

    container.appendChild(textContainer);
    container.appendChild(imageContainer);
  }

  // get all quote keys (tip titles/quotes)
  const tipsKeys = Object.keys(tipsOfTheDayQuotes);
  let randomIndex = 0;
  let newQuote = "";

  // pick a new random quote, avoiding repetition of the current one
  do {
    randomIndex = Math.floor(Math.random() * tipsKeys.length);
    newQuote = tipsKeys[randomIndex];
  } while (newQuote === quote.textContent);

  // get the corresponding author and details
  const newAuthor = Object.keys(tipsOfTheDayQuotes[newQuote])[0];
  const newDetails = tipsOfTheDayQuotes[newQuote][newAuthor];

  // update text content in the DOM
  quote.textContent = newQuote;
  author.textContent = "- " + newAuthor;
  details.textContent = newDetails;

  // update the image src and alt attributes
  const imgKeys = Object.keys(imageSrcAndAlt);
  const imgSrc = imgKeys[randomIndex];
  image.setAttribute("src", imgSrc);
  image.setAttribute("alt", imageSrcAndAlt[imgSrc] || "Tip image");

  // update the source reference text and URL
  const refKeys = Object.keys(imageReferences);
  const refText = refKeys[randomIndex];
  imageReference.textContent = refText;
  imageReference.setAttribute("href", imageReferences[refText]);
}

// waits until DOM is ready before manipulating elements
document.addEventListener("DOMContentLoaded", function() {
  const tipsButton = document.getElementById("tips-button");

  // updates the "Tip of the Day" content when the page reloads
  updateTipOfTheDay();

  if (tipsButton) {
    // generates a new tip when the button is double clicked 
    tipsButton.addEventListener("dblclick", function() {
      updateTipOfTheDay();
    });
  }
});
