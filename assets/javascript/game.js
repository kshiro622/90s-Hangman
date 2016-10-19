//Array of possible word choices
	var cartoons = ['RUGRATS', 'ARTHUR', 'HEY ARNOLD', 'DOUG', 'WILD THORNBERRYS', 'POWERPUFF GIRLS', 'RECESS', 'PINKY AND THE BRAIN', 'CATDOG', 'DARKWING DUCK', 'ED EDD AND EDDY', 'JOHNNY BRAVO', 'GOOF TROOP'];

//generate hangman word
	
	var hangmanWord = cartoons[Math.floor(Math.random()*cartoons.length)];

//global variables
	var currentWord = document.getElementById('current-word');
	var scoreboard = document.getElementById('scoreboard');
	var guessRemaining = document.getElementById('guess-remaining');
	var numGuess = 12;
	var alreadyGuessedDiv = document.getElementById('already-guessed');
	var letters = [];

//replace hangman word with dashes
	for (var i = 0; i < hangmanWord.length; i++) {
		var insertDashes = hangmanWord.replace(/[A-Z]/g, ' _ ');
		currentWord.innerHTML = 'Current Word: ' + insertDashes;
	};

//take user guess and stores in userGuess
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//compare user guess to characters in hangman word string
		for (var i = 0; i < hangmanWord.length; i++) {
			if (userGuess === hangmanWord[i]) {
				var matchingLetter = hangmanWord.replace(hangmanWord[i], userGuess);
				currentWord.innerHTML = 'Current Word: ' + matchingLetter;
			}
		};

// display user guess under "Letters Already Guessed" and subtract 1 from guesses remaining
		var total = letters.push(userGuess);
		guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess--;
		alreadyGuessedDiv.innerHTML = 'Letters Already Guessed: ' + letters;
	};




