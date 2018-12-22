// Using ES6 .endsWith() method to check if a string ends with the given target 
function confirmEnding (str, ending) {
	if (str.endsWith(ending)) {
		return console.log('Yep ☀');
	}

	return console.log('Nah 🌧');
}

let str = 'here comes the sun';
confirmEnding( str, 'sun'); // Yep ☀️
confirmEnding( str, 'rain'); // Nah 🌧

