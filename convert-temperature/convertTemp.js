let convertTemp = {
	converToF(celsius) {
		let fahrenheit;
		fahrenheit = celsius * (9 / 5) + 32;
		// Math.round() rounds to 1 decimal place & return value 
		return console.log(Math.round(fahrenheit * 10) / 10 + ' °F'); 
	},
	converToC(fahrenheit) {
		let celsius;
		celsius = (5 / 9) * (fahrenheit - 32);
		return console.log(Math.round(celsius * 10) / 10 + ' °C');
	}
}

convertTemp.converToF(0) // 32
convertTemp.converToF(20); // 68
convertTemp.converToC(0) // -17.8;
convertTemp.converToC(50); // 10