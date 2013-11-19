<!DOCTYPE html>
<html>
	<head>

		<title>Guess my number_match</title>
		<link rel="stylesheet" href="/css/main.css" type="text/css">
		<style>
			textarea {
				font-size:1.2em;
				width:10em;
				height:3.5em;
			}	
		</style>
		
	</head>

	<body>
		
		<h1>Guess my number</h1>
		
		<div id="change_version">Still need <a href="/practice_version.php">practice</a>? </div>
		<h2> (Match Version) </h2>
		
		<div id="features">
			<h4> Features: </h4>
			<ul>
				<li>Score mode -- A possible highest score: "100"</li>
				<li>Show how many digits and positions the guess matches the answer</li>
				<li>Five pointes deducted for every additional try after first five guesses</li>
				<li>Two additional hints available</li>
			</ul>
		</div>

		<div id='results'></div>
		<div id="take_guess">
			Pick a number <br>between 10000 and 99999: <br>
			<input type='text' name='guess' onkeypress="if (isNaN( String.fromCharCode(event.keyCode) )) return false;" maxlength ="8"/>
			<button id='guess_match'>Guess</button>
			<div id='error'></div>
			<p> Scratchpad:<br>
				<textarea></textarea><br>
			</p>
			
		</div>


		<div id='history'>
			Your past guesses: <br>
			<div id='guesses'></div>
		</div>
		
		<p id='hint'>Hints (avaiable for one time only)</p> 
		<div class='hint'>
			<div class = 'hint1'> Hint 1 (10 points deducted): <br>How many digits with the same number? <br>
				<button id='hint1'> Submit </button><br>
				<div id='result_hint1'></div><br>
			</div>

			<div class = 'hint2'> Hint 2 (15 points deducted): <br> Which digit do you want to know?
				<select name='digit'> 
					<option value='0'>First</option>
					<option value='1'>Second</option>
					<option value='2'>Third</option>
					<option value='3'>Fourth</option>
					<option value='4'>Fifth</option>
				</select> <br>
				<button id='hint2'> Submit </button><br>
				<div id='result_hint2'></div>
			</div>
		</div>

		<div>
			Your current score
			<span class='score'></span>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script src="/js/number_game.js"></script>

	</body>
</html>