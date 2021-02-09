// Examine the document object
// console.dir(document);


// Selector 

// Get element by id and modify it 
let headertitle = document.getElementById('header-title');
console.log(headertitle);
headertitle.textContent = 'Hello';
headertitle.innerText = 'Goodbye';