let calculator = {
	sum: 0,
	add: (value) => {
		this.sum = this.sum + value;
	},
	clear: () => {
		this.sum = 0;
	},
	equals: () => {
		console.log(this.sum);
	}
}

calculator.add(8);
calculator.add(9);
calculator.equals();
