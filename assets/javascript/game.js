//Global variables
	var currentWord = document.getElementById('current-word');
	var scoreboard = document.getElementById('scoreboard');
	var guessRemaining = document.getElementById('guess-remaining');
	var alreadyGuessedDiv = document.getElementById('already-guessed');
	var tvShows = ['RUGRATS', 'FULL/HOUSE', 'SAVED/BY/THE/BELL', 'DAWSONS/CREEK', 'FAMILY/MATTERS', 'THE/REAL/WORLD', 'ARTHUR', 'FRIENDS', 'DEXTERS/LABORATORY', 'SEINFELD', 'POWERPUFF/GIRLS', 'FRASIER', 'CATDOG', 'SABRINA/THE/TEENAGE/WITCH', 'ALL/THAT', 'THIRD/ROCK/FROM/THE/SUN', 'SIMPSONS', 'CHEERS', 'HEY/ARNOLD', 'KEENAN/AND/KEL', 'THE/WONDER/YEARS', 'HOME/IMPROVEMENT', 'EVERYBODY/LOVES/RAYMOND', 'BOY/MEETS/WORLD', 'FRESH/PRINCE'];
	var randomWord = ''
	var hiddenWord = ''
	var dashes = [];
	var wins = 0;
	var numGuess = ''
	var letters = [];
	var checkLetters = ''

//Randomly selects word, breaks into individual characters
	function getWord() {
		randomWord = tvShows[Math.floor(Math.random()*tvShows.length)];
		hiddenWord = randomWord.split('');
		return hiddenWord;
	}

//Restarts Game
	function restartGame() {
		//gets random word
		getWord();
		//resets letters guessed and dashes from last game
		letters.length = 0;
		dashes.length = 0;
		//sets number of guesses remaining to 10
		numGuess = 10;
		//prints dashes in place of letters
		for (var i = 0; i<hiddenWord.length; i++){
			if(hiddenWord[i] === '/') {
				dashes.push('/');
			} else {
				dashes.push('_ ');
			}
		};
		//prints stats to screen
		currentWord.innerHTML = 'Current Word: ' + dashes.join(' ');
		scoreboard.innerHTML = 'Wins: ' + wins;
		guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess;
		alreadyGuessedDiv.innerHTML = 'Letters Already Guessed:';
	};

//To start game 1st time
	restartGame();

//Compares user input to letters in word
	function compareWord() {
		console.log(hiddenWord);
		for (var j = 0; j<hiddenWord.length; j++) {
			if (hiddenWord[j] === userGuess) {
				dashes[j] = userGuess
				currentWord.innerHTML = 'Current Word: ' + dashes.join(' ');
			}
		}
	};

//Stores letters already guessed in array, only takes unique inputs
	function lettersAlreadyGuessed() {
		var duplicate = letters.includes(userGuess);
		if (duplicate == false) {
			letters.push(userGuess);
			alreadyGuessedDiv.innerHTML = 'Letters Already Guessed: ' + letters.join(', ');
		} else {
			alert('You already guessed that letter!');
		};

		//only decrements guesses if letter is unique and not in word
		var duplicate2 = hiddenWord.includes(userGuess);
		if (duplicate2 == false && duplicate == false){
			numGuess--;
		}
		guessRemaining.innerHTML = 'Number of Guesses Remaining: ' + numGuess;
	};

//Runs program when user presses a key
	document.onkeyup = function(event) {
		userGuess = String.fromCharCode(event.keyCode).toUpperCase();
		compareWord();
		lettersAlreadyGuessed();

		//Ends game
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
