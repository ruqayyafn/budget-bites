
// element that displays the quote of the day
const quoteEl = document.getElementById("quote-of-the-day");

// arr of motivational and fun quotes
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

// returns a random quote from the array
function getRandomQuote(currentQuote) {
  let newQuote;
  do {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    newQuote = quotes[randomIndex];
  } while (newQuote === currentQuote); // Avoid repeat quote
  return newQuote;
}

// sets a random quote on page load
function setInitialQuote() {
  if (quoteEl) {
    quoteEl.textContent = getRandomQuote();
  }
}

// handles new quote button click
function handleNewQuoteClick() {
  const newQuote = getRandomQuote(quoteEl.textContent);
  quoteEl.textContent = newQuote;
}

// initialize quote on page load
setInitialQuote();

// add click event listener for "New Quote" button
const quoteButton = document.getElementById("new-quote-btn");
quoteButton?.addEventListener("click", handleNewQuoteClick);

//reacton button

const reactionButtons = document.querySelectorAll(".small-button");
const reactionResponse = document.getElementById("reaction-response");

// handling reaction button clicks using event.target
function handleReactionClick(event) {
  const clickedButton = event.target;
  const reactionType = clickedButton.dataset.reaction;

  let message = "";

  if (reactionType === "inspired") {
    message = `We love that you're feeling inspired! <a href="recipe-gallery.html">Try a new recipe today!</a>`;
  } else if (reactionType === "ideas") {
    message = `Check out our <a href="tips.html">Tips page</a> for fresh ideas and tricks!`;
  } else if (reactionType === "love") {
    message = `Aww, we love you too! Thanks for visiting! ❤️`;
  }
  else{
    message = "";
  }

  reactionResponse.innerHTML = message;
}

// attatch click listeners to each button
reactionButtons.forEach(button => {
  button.addEventListener("click", handleReactionClick);
});
