
var wins = 0;
var lossesTot = 0;
var guessesLeft = 9;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = lossesTot;
document.getElementById("guesses").innerHTML = guessesLeft;


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
  };
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = lossesTot;
  document.getElementById("guesses").innerHTML = guessesLeft;
}






//compare the two letters and update scorboard. up to 9 times per letter. if yes then wins go up and guesses left resets