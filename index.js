const quoteEl = document.getElementById("quote-of-the-day");

// adding an array of quotes that change anytime the page is refreshed 
const quotes = [
  "Cooking at home is an act of love.",
  "A budget meal can still taste like a feast.",
  "Every great chef started with one recipe.",
  "Homemade means heartfelt.",
  "You’re saving money *and* making memories!",
  "You are doing a great job!",
  "You are nourishing your mind!",
  "Budget meals for the win!",
  "Delicious food and memories made!",
  "Smells good already :)",
  "The effort will pay off!",
  "You are the best chef!",
  "Ready to make some mouth watering goodness?",
  "Yummy!",
  "Excited to see what you craft up today!"
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

if (quoteEl) {
  quoteEl.textContent = randomQuote;
}

const quoteButton = document.getElementById("new-quote-btn");

quoteButton.addEventListener("click", () => {
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === quoteEl.textContent); // no repeating the same quote

  quoteEl.textContent = newQuote;
});

//how are you feeling 

const reactionButtons = document.querySelectorAll(".small-button");
const reactionResponse = document.getElementById("reaction-response");

const reactionMessages = {
  inspired: "We love that you're feeling inspired! Try a new recipe today!",
  ideas: "Check out our Tips page for fresh ideas and tricks!",
  love: "Aww, we love you too! ❤️ Thanks for visiting!"
};

reactionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const reactionType = button.dataset.reaction;
    reactionResponse.textContent = reactionMessages[reactionType];
  });
});

