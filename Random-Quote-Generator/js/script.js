//Array of Objects with the properties of Quote, Source, and Title
var quoteList = [
  {
    quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
    source: "Muhammad Ali",
    title: "American Boxer"
  },
  {
    quote: "Look deep into nature, and then you will understand everything better.",
    source: "Albert Einstein",
    title: "German Physicist"
  },
  {
    quote: "We know what we are, but know not what we may be.",
    source: "William Shakespeare",
    title: "English Playwright"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", 
    source: "Buddha",
    title: "Founder of Buddhism"
  },
  {
    quote: "Success consists of going from failure to failure without loss of enthusiasm.",
    source: "Winston Churchill",
    title: "British Statesman"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain",
    title: "American Novelist"
  },
  {
    quote: "An eye for an eye only ends up making the whole world blind.",
    source: "Mahatma Gandhi",
    title: "Indian Spiritual Leader"
  }
];

var randomNumber;
var message = '';
var newQuote = '';
var source = '';
var title = '';

//Generates a random number
function getRandomNumber (x, y) {
  return Math.floor(Math.random() * x ) + y;
}

//Generates random number as index
//gets quote then returns to function
function getRandomQuote (quote) {
  randomNumber = getRandomNumber(quoteList.length, 0);
  var quote = quoteList[randomNumber].quote;
  return quote;
}

//Prints the Quote and respective Source
function printQuote (message) {
  quote = getRandomQuote();
  message += '<p class="quote">' + quote + '</p>';
  source = quoteList[randomNumber].source;
  title = quoteList[randomNumber].title;
  message += '<p class="source">' + source + ", " + '<i>' + "<strong>" + title + "</strong>" + '</i>' + '</p>';
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = message;
}

function changeColor () {
  var r = getRandomNumber(255, 1);
  var g = getRandomNumber(255, 1);
  var b = getRandomNumber(255, 1);
  var a = getRandomNumber(1, 1);
  var fontColor = getRandomNumber(2, 1);
  if (fontColor === 1) {
    fontColor = "white";
  } else {
    fontColor = "black";
  }
  //changes font to black/white
  document.getElementById("body").style.color = fontColor;
  //changes background color
  document.getElementById("body").style.background = "linear-gradient(90deg, rgba(" + r + ", " + g + ", " + b + ", " + a + ") 20%, transparent 20%), linear-gradient(90deg, rgba(" + g + ", " + b + ", " + r + ", " + a + ") 40%, transparent 40%), linear-gradient(90deg, rgba(" + b + ", " + g + ", " + r + ", " + a + ") 60%, transparent 60%), linear-gradient(90deg, rgba(" + g + ", " + r + ", " + b + ", " + a + ") 80%, transparent 80%), linear-gradient(270deg, rgba(" + r + ", " + b + ", " + g + ", " + a + ") 20%, transparent 20%)";
  //changes button color
  document.getElementById("loadQuote").style.background = "rgba(" + g + ", " + b + ", " + r + ", " + a + ")";
}


function executeChange () {
  changeColor();
  printQuote(message);
}

//Calls executeChange function
document.getElementById("loadQuote").onclick = executeChange;

