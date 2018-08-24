//Add a Method to an Object
let dice = {
	sides: 10,
	roll: () => {
		let randomNumber = Math.floor(Math.random() * this.sides) + 1;
		console.log(randomNumber);
	}
}

dice.roll();
