/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quotes` array
let quotes = [
 {
  quote: 'When day comes, we step out of the shade aflame and unafraid. The new dawn blooms as we free it. For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.',
  source: 'Amanda Gorman',
  citation: 'Presidential Inaguration Poem',
  year: 2021
 },
 {
  quote: 'History isn\'t a single narrative, but thousands of alternative narratives. Whenever we choose to tell one, we are also choosing to silence others.',
  source: 'Yuval Noah Harari',
  citation: 'Homo Deus',
  year: 2017,
  learnMore: 'Buy the Book',
  link: 'https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/0062464345/ref=sr_1_1?dchild=1&keywords=homo+deus&qid=1616618129&sr=8-1'
 },
 {
  quote: 'Laugh and the world laughs with you; weep and you weep alone.',
  source: 'Ella Wheeler Wilcox'
 },
 {
  quote: 'The ancestor of every action is a thought.',
  source: 'Ralph Waldo Emerson'
 },
 {
  quote: 'This is the best reason to learn history: Not in order to predict the future, but to free yourself of the past and imagine alternative destinies.',
  source: 'Yuval Noah Harari',
  citation: 'Homo Deus',
  year: 2017,
  learnMore: 'Buy the Book',
  link: 'https://www.amazon.com/Homo-Deus-Brief-History-Tomorrow/dp/0062464345/ref=sr_1_1?dchild=1&keywords=homo+deus&qid=1616618129&sr=8-1'
 },
 {
  quote: 'The mind is its own place, and in itself can make a Heav\'n of Hell, a Hell of Heav\'n.',
  source: 'John Milton',
  citation: 'Paradise Lost',
  year: 1663
 },
 {
  quote: 'We know of course, that there is no freedom of speech. But few persons realise that there is no freedom of silence either.',
  source: 'Hu Shi',
  citation: 'After being denounced as a counter-revolutionary by his son in Communist China'
 },
 {
  quote: 'Oh, if there\'s one thing you learn at cookery school, burned crusts and soggy bases happen to the best of us. Roll up your sleeves and start something else I say. No point in moaning over what you can\'t fix!',
  source: 'Mrs. Beamish',
  citation: 'The Ickabog',
  year: 2020,
  learnMore: 'Buy the Book',
  link: 'https://www.amazon.com/Ickabog-J-K-Rowling/dp/1338732870/ref=sr_1_1?dchild=1&keywords=the+ickabog&qid=1616618000&sr=8-1'
 },
 {
  quote: 'Still, it was hard to have parents who lived inside you, when all you really wanted was for them to come back, and hug you.',
  source: 'The Narrator',
  citation: 'The Ickabog',
  year: 2020,
  learnMore: 'Buy the Book',
  link: 'https://www.amazon.com/Ickabog-J-K-Rowling/dp/1338732870/ref=sr_1_1?dchild=1&keywords=the+ickabog&qid=1616618000&sr=8-1'
 },
 {
  quote: 'I do a better business when things are bad. I think the churches find the same thing is true.',
  source: 'Zolar from "Dean of Astrologers"',
  citation: 'The New Yorker',
  year: 1959
 },
 {
  quote: 'And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not Love, I am nothing.',
  source: 'Paul the Apostle',
  citation: '1 Corinthians 13:2'
 },
 {
  quote: 'You\'ve made just enough safe choices to stay alive, but not enough to matter. Is that what you want? You can be more; you want to be more, don\'t you? The window of opportunity is closing. This is your chance.',
  source: 'Joe MacMillan',
  citation: 'Halt and Catch Fire',
  year: 2014,
  learnMore: 'Watch the Trailer',
  link: 'https://www.youtube.com/watch?v=pWrioRji60A'
 },
 {
  quote: 'She was the book thief without the words. Trust me, though, the words were on their way, and when they arrived, Liesel would hold them in her hands like the clouds, and she would wring them out like the rain.',
  source: 'The Narrator',
  citation: 'The Book Thief',
  year: 2005,
  learnMore: 'Buy the Book',
  link: 'https://www.amazon.com/Book-Thief-Markus-Zusak/dp/0375842209/ref=sr_1_1?dchild=1&keywords=the+book+thief&qid=1616617836&sr=8-1'
 }
]

//'currentIndex' will be compared to 'randomIndex' to ensure the same quote isn't repeated twice in a row.
//must be set outside the scope of `getRandomQuote` so it will retain the value of the previously returned index each time `getRandomQuote` is called.
let currentIndex; 
/**
* Selects a random object from the quotes array.
*
* @returns {object} A random object from the quotes array.
*/
const getRandomQuote = function() {
 let randomIndex;
 do {
  //Get a random number between 0 and the number of objects in the quotes array. This needs to happen before comparing the randomIndex to the currentIndex
  randomIndex = Math.floor(Math.random() * quotes.length); 
 } while (randomIndex === currentIndex) //Repeat the loop if randomIndex and currentIndex are the same.
 currentIndex = randomIndex;
 return quotes[randomIndex];
}

/**
* Gets a random number.
*
* @returns {number} A random number between 0 and 250 to be used as part of an RGB color code.
*/
const getRandomColor = function() {
 return Math.floor(Math.random() * 251); //return a random number between 0 and 250
}

/**
* Sets the background-color property of the body element to a random color.
*/
const randomizeBackgroundColor = function() {
 let rgbColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`; //build an rgb color code
 document.querySelector('body').style.backgroundColor = rgbColor; //set the background color of the body to the random rgb color code
}

/**
* Builds an HTML string using a randomly selected quote object and updates the page with the string.
* Uses `randomizeBackgroundColor` to set the background color of the body to a random color.
* Resets the 20 second timer for refreshing the quote.
*/
const printQuote = function() {
 let thisQuote = getRandomQuote(); //get a random quote object from the quotes array
 let pageContent = `
 <p class="quote">${thisQuote.quote}</p>
 <p class="source">${thisQuote.source}
 `; //This is the minimum HTML for each quote.
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
 randomizeBackgroundColor(); //set the background to a random color.
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
autoQuote(); //Start the 20 second timer when page loads.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);