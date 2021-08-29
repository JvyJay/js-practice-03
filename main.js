let currQuote = document.querySelector(".inner");
let currAuthor = document.querySelector(".author");
const button = document.querySelector("button");

const quotes = [
  { quote: `"When you can’t change the direction of the wind — adjust your sails."`, author: `H. Jackson Brown Jr` },
  { quote: `"Great things are not done by impulse, but a series of small things brought together."`, author: `Vincent Van Gogh` },
  { quote: `"There is no weapon more deadly than the will."`, author: `Bruce Lee` },
  { quote: `"Being the richest man in the cemetery doesn’t matter to me… Going to bed at night saying we’ve done something wonderful… that’s what matters to me."`, author: `Steve Jobs` }]

  const getRandomQuote = (arr) => {
    var index = Math.floor(Math.random() * quotes.length);
    for (let i = 0; i < arr.length; i++) {
      var randomQuote = arr[index];
    }
    return randomQuote;
    }


  button.addEventListener("click", (e) => {
      let result = getRandomQuote(quotes)
      currQuote.textContent = result.quote;
      currAuthor.textContent = result.author;
  }
)
