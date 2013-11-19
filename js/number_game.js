// Generate the numbers on the page
	
	for(var i=0;i<=9;i++) {
    	
    	
    	// Put each number in a span so we can color it later
		$('#number').append('<span class="number" id="'+i+'">'+i+'</span>');
	}
	
	// get rabdom number array
	var random_number_array = new Array;
	    random_number_array[0] = Math.floor((Math.random()*9)+1);
		for (var j=1;j<5;j++){
			random_number_array[j] = Math.floor((Math.random()*9)+0);
		}
		
	console.log("Computer's number:" + random_number_array);

	var score=100;
	$('.score').html(score);

	var trial_times=0;


	$('input[name=guess]').bind("enterkey",function(eve){
		$('#guess').trigger("click");
		$('#guess_practice').trigger("click");
	});

	$('input[name=guess]').keyup(function(e){
		if(e.keyCode == 13){
			$(this).trigger("enterkey");
		}
		var value = $(this).val();
		var how_many_digits = value.length;
		if (how_many_digits >5) {
			$('#error').html('5 digits only');
		}	else {
				$('#error').html('');
			}
	});
	
	// Play! 
	$('#guess_match').click(function() {
		
		// What guess did the player make?
		var guess = $('input[name=guess]').val();
		
		// Break their word into an array; each letter is an element in the array
		guess_array = guess.split('');

		if (!(guess_array.length ==5)){
			alert('5-digit numbers, please!');
			return 1;
		}

		if (guess_array[0]==0) {
			alert('The first digit cannot be 0!');
			return 1;
		}
		//console.log("Picked number:" + guess_array);//
		// Tabla rasa
		var digit_match_count = position_match_count = 0;
				
		// Loop through the numbers in their guess
		for(i in random_number_array) {
			
			for(j=0;j<5;j++){
				if (random_number_array[i]==guess_array[j])
					{if (i==j) {
						position_match_count++;
					}
					var i_match = 1;	
				}
				
			}
			if (i_match){
				digit_match_count++;
				i_match=0;
			}
		}
		
		// If match_count was 0 you should grey out all the
		// letters in the alphabet because it means none of them match
		if(digit_match_count == 0) {
			for(i in guess_array) {
				var number = guess_array[i];
				$('#' + number).css('color','#eee');
			}
		}
		
		// Print out their guess and how many letters matched
		$('#guesses').prepend(guess + ' : ' + digit_match_count + ' digits match' + '; ' + position_match_count + ' positions match<br>');
		
		trial_times++;
		if (trial_times>3){
			score -=5;
			$('.score').html(score);
		}		
		// If their match count equals the the length of the computer's word, Winner! 
		if(digit_match_count == 5) {
			if (score>=80){
				$("#results").html('Smart guy! You are a beast! What about playing <a href="/match_version.php">one more time</a>?');
			}
			else if (score>=60 && score<80){
				$("#results").html('Great! you are right! Do you want to get a higher score on <a href="/match_version.php">another try</a>?'); 
			}
			else {
				$("#results").html('Cool! you are right! But the score could be better.. <a href="/match_version.php">Try it again</a>!');
			};
			$("#guess").attr("disabled", "disabled");
			$("#hint1").attr("disabled", "disabled");
			$("#hint2").attr("disabled", "disabled");
		}

	});	
	

	$('#guess_practice').click(function() {
		
		// What guess did the player make?
		var guess = $('input[name=guess]').val();
		
		// Break their word into an array; each letter is an element in the array
		guess_array = guess.split('');

		if (!(guess_array.length ==5)){
			alert('5-digit numbers, please!');
			return 1;
		}

		if (guess_array[0]==0) {
			alert('The first digit cannot be 0!');
			return 1;
		}
		//console.log("Picked number:" + guess_array);//
		// Tabla rasa
		
		var position_match_count = 0;
		var result_array = new Array;
		
		// Loop through the numbers in their guess
		for(i in guess_array) {			
			if (guess_array[i]==random_number_array[i]){
				result_array[i]='T';
				position_match_count++;
			}
			else { result_array[i]='F';
			}			
		}
		
		// If match_count was 0 you should grey out all the
		// letters in the alphabet because it means none of them match
		
		
		// Print out their guess and how many letters matched
		
		for(i=4;i>=0;i--){
			$('#guesses').prepend(' ' + result_array[i]);
		}
		$('#guesses').prepend(guess + ' -> ');
		$('#guesses').prepend('<br>');
		
		// If their match count equals the the length of the computer's word, Winner! 
		if(position_match_count == 5) {
			$("#results").html('Cool! you are right! What about trying <a href="/match_version.php">our match version</a>!');
		
			$("#guess_easy").attr("disabled", "disabled");
			$("#hint1").attr("disabled", "disabled");
			$("#hint2").attr("disabled", "disabled");
		}

	});	
	//hint1 
		
	$('#hint1').one('click',function(){
		var same_digit_times = same_i_times = 0;
		for (i=0;i<4;i++){
			for (j=i;j<5;j++){
				if (random_number_array[i] == random_number_array[j]) {
				same_i_times++;
				}
			}
			if (same_i_times > same_digit_times){
				same_digit_times = same_i_times
			}
			same_i_times = 0;
		}
		if (same_digit_times == 1){
		$("#result_hint1").html('There is no digit with the same number!');	
		}
		else { $("#result_hint1").html('There are ' +  same_digit_times  + ' digits with the same number!');
		}
		$('#hint1').css('color','#bbaaaa');
		score -=10;
		$('.score').html(score);
	});


	//hint2
	$('#hint2').one('click',function(){
		var digit = $('select[name=digit]').val();

		$("#result_hint2").html('The number is ' + random_number_array[digit]);
		$('#hint2').css('color','#bbaaaa');
		score -=15;
		$('.score').html(score);
	});

	