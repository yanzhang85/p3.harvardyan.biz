// Generate the numbers on the page
	
	for(var i=0;i<=9;i++) {
    	
    	
    	// Put each number in a span so we can color it later
		$('#number').append('<span class="number" id="'+i+'">'+i+'</span>');
	}
	
	// get rabdom number array
	var random_number_array = new Array;
		for (var j=0;j<5;j++){
			random_number_array[j] = Math.floor((Math.random()*9)+0);
		}
		
	console.log("Computer's number:" + random_number_array);

	
	// Play! 
	$('button').click(function() {
		
		// What guess did the player make?
		var guess = $('input[name=guess]').val();

		// Break their word into an array; each letter is an element in the array
		guess_array = guess.split('');

		if (guess_array.length <5){
			alert('5 digits are required!');
			return 1;
		}
		
		//console.log("Picked number:" + guess_array);//
		// Tabla rasa
		var number_match_count = 0;
		var position_match_count = 0;
		
		// Loop through the numbers in their guess
		for(i in random_number_array) {
			
			for(j=0;j<5;j++){
				if (random_number_array[i]==guess_array[j])
					{if (i==j) {
						position_match_count++;
					}
					var number_match = 1;	
				}
				
			}
			if (number_match){
				number_match_count++;
				number_match=0;
			}
		}
		
		// If match_count was 0 you should grey out all the
		// letters in the alphabet because it means none of them match
		if(number_match_count == 0) {
			for(i in guess_array) {
				var number = guess_array[i];
				$('#' + number).css('color','#eee');
			}
		}
		
		// Print out their guess and how many letters matched
		$('#guesses').prepend(guess + ' : ' + number_match_count + ' numbers match' + '; ' + position_match_count + ' positions match<br>');
				
		// If their match count equals the the length of the computer's word, Winner! 
		if(number_match_count == 5) {
			$("#results").html('You guessed the number correctly!');
		}
		
	});