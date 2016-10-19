//Array of possible word choices
	var cartoons = ['RUGRATS', 'ARTHUR', 'FRIENDS', 'DOUG', 'SEINFELD', 'RECESS', 'FRASIER', 'CATDOG', 'SIMPSONS', 'CHEERS', 'DARIA'];

//generate hangman word
	
	var hangmanWord = cartoons[Math.floor(Math.random()*cartoons.length)];

//global variables
	var currentWord = document.getElementById('current-word');
	var scoreboard = document.getElementById('scoreboard');
	var guessRemaining = document.getElementById('guess-remaining');
	var numGuess = 12;
	var alreadyGuessedDiv = document.getElementById('already-guessed');
	var letters = [];

//display dashes (same number as letters in word)
	var dashes = '_ '.repeat(hangmanWord.length);
		
	currentWord.innerHTML = 'Current Word: ' + dashes;

//take user guess and stores in userGuess
	document.onkeyup = function(event) {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//displays it in Letters Already Guessed (if not duplicate) and subtracts 1 from guesses remaining
		console.log(userGuess);
		var duplicate = letters.includes(userGuess);
		console.log(duplicate);

		if (duplicate === false) {
			letters.push(userGuess);
			guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess--;
			alreadyGuessedDiv.innerHTML = 'Letters Already Guessed: ' + letters;
		} else {
			alert('You already guessed that letter!');
		};

//compare user guess to characters in hangman word string
		// for (var i = 0; i < hangmanWord.length; i++) {
		// 	if (userGuess === hangmanWord[i]) {
		// 		var matchingLetter = dashes.replace(dashes[i], userGuess);
		// 		currentWord.innerHTML = 'Current Word: ' + matchingLetter;
		// 	}
		// }
	};


	
		





