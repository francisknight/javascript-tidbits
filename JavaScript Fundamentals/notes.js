// JS OOP
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
console.log(apple.describe());

// ES6 module 
// Modules are use to import files/pices of code into another file

// Named exports (can be more than one)
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5


