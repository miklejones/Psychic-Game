
var wins = 0;
var losses = 0;
var guessesLeft = 9;


//Determine Computer letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(getRandomLetter);


//log user guess
document.onkeyup = function (event) {
  var userGuess = event.key.toLowerCase();
  console.log(userGuess);
  if (userGuess === getRandomLetter) {
    wins++;
    guessesLeft = 9;
    getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  } else {
    guessesLeft--;
  }
}

var html =
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + getRandomLetter + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>ties: " + ties + "</p>";

document.querySelector("#psychic").innerHTML = html;




//compare the two letters and update scorboard. up to 9 times per letter. if yes then wins go up and guesses left resets