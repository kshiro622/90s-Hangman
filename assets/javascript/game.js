//global variables
	var currentWord = document.getElementById('current-word');
	var scoreboard = document.getElementById('scoreboard');
	var guessRemaining = document.getElementById('guess-remaining');
	var alreadyGuessedDiv = document.getElementById('already-guessed');
	var tvShows = ['RUGRATS', 'ARTHUR', 'FRIENDS', 'DOUG', 'SEINFELD', 'RECESS', 'FRASIER', 'CATDOG', 'SIMPSONS', 'CHEERS', 'DARIA'];
	var randomWord = ''
	var hiddenWord = ''
	var dashes = [];
	var wins = 0;
	var numGuess = ''
	var letters = [];

	function getWord() {
		randomWord = tvShows[Math.floor(Math.random()*tvShows.length)];
		hiddenWord = randomWord.split('');
		return hiddenWord;
	}

	function restartGame() {
		getWord();
		letters.length = 0;
		dashes.length = 0;
		numGuess = 10;

		for (var i = 0; i<hiddenWord.length; i++){
			dashes.push('_ ');
		};

		currentWord.innerHTML = 'Current Word: ' + dashes.join(' ');
		scoreboard.innerHTML = 'Wins: ' + wins;
		guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess;
		alreadyGuessedDiv.innerHTML = 'Letters Already Guessed:';
	};

	restartGame();

	function compareWord() {
		console.log(hiddenWord);
		for (var j = 0; j<hiddenWord.length; j++) {
			if (hiddenWord[j] === userGuess) {
				dashes[j] = userGuess
				currentWord.innerHTML = 'Current Word: ' + dashes.join(' ');
			}
		}
	};

	function lettersAlreadyGuessed() {
		var duplicate = letters.includes(userGuess);
		if (duplicate === false) {
			letters.push(userGuess);
			guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess--;
			alreadyGuessedDiv.innerHTML = 'Letters Already Guessed: ' + letters.join(', ');
		} else {
			alert('You already guessed that letter!');
		};
	};

	document.onkeyup = function(event) {
		userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		compareWord();
		lettersAlreadyGuessed();
		if (dashes.toString() == hiddenWord.toString()){
			alert('You Won!');
			alert('The word was ' + randomWord);
			wins++;
			restartGame();
		}

		if (numGuess < 0) {
			alert('Try again next time!');
			alert('The word was ' + randomWord);
			restartGame()
		}
	};
