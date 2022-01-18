/******************************************
Treehouse FSJS Techdegree:en
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
	{
		quote: "I'm a little pencil in the hand of a writing God, who is sending a love letter to the world.",
		author: "Mother Teresa",
		source:"Quotes.net",
		year: "2022"
	},
	{ 
		quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
		author:"Mother Teresa",
		source: "Quotes.net",
		year: "2022"
	},
	{
		quote: "All the world is a stage and each and every person is a player",
		author:"William Shakespeare",
		source: "Quotes.net",
		year: "2022"
	},
	{ 
		quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control an at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
		author: "Marilyn Monroe",
		source: "Goodreads.com",
		year: "2022"
	},
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
	let quoteIndex = Math.floor(Math.random() * quotes.length);
	return quotes[quoteIndex];
}


/***
 * `printQuote` function
***/
function printQuote(){
	let quoteObj = getRandomQuote();
	let quoteBox = document.getElementById('quote-box');
	quoteBox.innerHTML = `
	<p class="quote">${quoteObj.quote}</p>
	<p class="source">${quoteObj.author}<span class="citation">${quoteObj.source}</span><span class="year">${quoteObj.year}</span>
	</p>
	`;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);