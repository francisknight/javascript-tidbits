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
let apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
	return 'An apple is the color '+this.color+' and is the shape ' 
		+this.shape;
}

console.log(apple.describe());

// Constructor Pattern -- With Method
function Fruit(name, color, shape){
	this.name = name;
	this.color = color;
	this.shape = shape;
	
	this.describe = function(){
		return 'A ' +this.name+' is the color '
		+this.color+' and is the shape '+this.shape;
	}
}

let apple = new Fruit('apple', 'red', 'round');

