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

// object Constructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
	return 'An apple is the color '+this.color+' and is the shape ' 
		+this.shape;
}

console.log(apple.describe());
