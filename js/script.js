/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//'currentIndex' will be compared to 'randomIndex' to ensure the same quote isn't repeated twice in a row.
//must be set outside the scope of `getRandomQuote` so it will retain the value of the previously returned index each time `getRandomQuote` is called.
let currentIndex; 

/**
* Selects a random object from the quotes array.
*
* @returns {object} A random object from the quotes array.
*/
const getRandomQuote = () => {
 let randomIndex;
 do {
  randomIndex = Math.floor(Math.random() * quotes.length); 
 } while (randomIndex === currentIndex) //Prevent a quote from repeating itself
 currentIndex = randomIndex;
 return quotes[randomIndex];
}

/**
* Builds an HTML string using a randomly selected quote object and updates the page with the string.
* Resets the 20 second timer for refreshing the quote.
*/
const printQuote = () => {
 let thisQuote = getRandomQuote();

 // A quote only requires quote text and a source
 let pageContent = `
 <p class="quote">${thisQuote.quote}</p>
 <p class="source">${thisQuote.source}
 `;

 /*  Use hasOwnProperty() to see if the object contains optional properties. Include said properties in the HTML string if they exist.
  * Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty */
 if (thisQuote.hasOwnProperty('citation')) {
  pageContent += `<span class="citation">${thisQuote.citation}</span>`;
 }

 if (thisQuote.hasOwnProperty('year')) {
  pageContent += `<span class="year">${thisQuote.year}</span>`;
 }

 //the learnMore and link properties are optional properties that will link the user to the source material (i.e. a book, or a trailer) for the quote.
 if (thisQuote.hasOwnProperty('learnMore')) {
  pageContent += `<span class="learnMore"><a href="${thisQuote.link}" target="_blank">${thisQuote.learnMore}</a></span>`;
 }

 pageContent += `</p>`;
 document.getElementById('quote-box').innerHTML = pageContent; //Update the page with new quote content.
 //Reset the 20 second timer
 clearInterval(timerId); 
 timerId = setInterval(printQuote, 20000);
}

let timerId;
/**
* Starts a timer that calls the `printQuote` function every 20 seconds.
*/
function autoQuote() {
 timerId = setInterval(printQuote, 20000);
}

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote();