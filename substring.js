const myword = "sunny";

//version 1 
if (myword.indexOf('sun') !== -1) {
	console.log('Yes');
}

//ES6 Version
if (myword.includes('sun')) {
	console.log('Yes');
}