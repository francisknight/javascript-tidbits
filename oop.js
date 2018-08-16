//Add a Method to an Object
let dice = {
	roll: () => {
		let side = 6;
		let randomNumber = Math.floor(Math.random() * side) + 1;
		console.log(randomNumber);
	}
}

dice.roll();
