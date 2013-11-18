<!DOCTYPE html>
<html>
	<head>

		<title>Word Game</title>
		<link rel="stylesheet" href="/css/main.css" type="text/css">
		
	</head>

	<body>
		Ready for <a href="/match_version.php">match version</a>? 
		<h1>Word Game</h1>
		The computer has chosen a random 5 letter noun.<br>
		Try and guess what that word is in as few guesses as possible.<br>
		For every guess you make, the computer will tell you how many letters in your word match the computer's word.<br>
		The order of the letters is irrelevant.<br>
		
		<br>
		Take a guess:<input type='text' name='guess' onkeypress="if (isNaN( String.fromCharCode(event.keyCode) )) return false;" maxlength ="8"/>
		<button id='guess_practice'>Submit</button>
		<div id='error'></div>
		
		<div id='results'></div>
		
		

		Scratchpad:<br>
		<textarea></textarea><br>

		
		<div id='guesses'></div>

		
			
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script src="/js/number game.js"></script>

	</body>
</html>