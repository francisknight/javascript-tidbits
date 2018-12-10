// Object Literal
let person = {
	firstName: 'Francis',
	lastName: 'Knight',
	age: '24',
	
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
}

console.log(person.fullName());
