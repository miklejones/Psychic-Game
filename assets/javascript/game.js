//Determine Computer letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Creating variables to hold the number of wins, losses and guesses
var wins = 0;
var lossesTot = 0;
var guessesLeft = 9;

//Creating an empty array for the guessed letters
var guessed = [];

//Randomly shooses a choice from the option alphabet string
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//This function is run whenver the user presses a key.
document.onkeyup = function (event) {

    //Determines the key, puts it in lowercase and assigns to userGuess
    var userGuess = event.key.toLowerCase();

    var alphaCheck = alphabet.includes(userGuess);

    //This logic determines the out come of the round (win/loss/tie), and increments the approptiate number
    if (userGuess === getRandomLetter) {
        wins++;
        guessesLeft = 9;
        getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessed = [];
        document.getElementById("guessedLetters").innerHTML = guessed;
    } else {
        guessesLeft--;

        //add letter to guessed array
        guessed.push(event.key);
    };

    //This logic determines what to do if the person runs out of turns
    if (guessesLeft < 1) {
        lossesTot++;
        getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessesLeft = 9;
        guessed = [];
        document.getElementById("guessedLetters").innerHTML = guessed;
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("lossesTot").innerHTML = lossesTot;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guessedLetters").innerHTML = guessed;
}






//compare the two letters and update scorboard. up to 9 times per letter. if yes then wins go up and guesses left resets