<!DOCTYPE html>
<html>
	<head>

		<title>Word Game</title>
		<link rel="stylesheet" href="/css/main.css" type="text/css">
		
	</head>

	<body>
		
		<h1>Word Game</h1>
		The computer has chosen a random 5 letter noun.<br>
		Try and guess what that word is in as few guesses as possible.<br>
		For every guess you make, the computer will tell you how many letters in your word match the computer's word.<br>
		The order of the letters is irrelevant.<br>
		
		<br>
		Take a guess:<input type='text' name='guess' onkeypress="if (isNaN( String.fromCharCode(event.keyCode) )) return false;" maxlength ="8"/>
		<button id='guess'>Submit</button>
		<div id='error'></div>
		
		<div id='results'></div>
		
		<div id='number'></div>

		Scratchpad:<br>
		<textarea></textarea><br>

		
		<div class = 'hint1'> Show me how many digits with the same number?
			<button id='hint1'> Hint1 </button><br>
			<div id='result_hint1'></div>
		</div>

		<div class = 'hint2'>Which digit do you want to know? 
			<select name='digit'> 
				<option value='0'>First</option>
				<option value='1'>Second</option>
				<option value='2'>Third</option>
				<option value='3'>Fourth</option>
				<option value='4'>Fifth</option>
			</select>
			<button id='hint2'> Hint2 </button><br>
			<div id='result_hint2'></div>
		</div>
		
		
		<div id='guesses'></div>

		<div class='score'><div>
			
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script src="/js/number game.js"></script>

	</body>
</html>