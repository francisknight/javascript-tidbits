// Examine the document object
// console.dir(document);


// Selectors 

// Get element by id and modify it //
let headertitle = document.getElementById('header-title');
let header = document.getElementById('main-header');

console.log(headertitle);
//headertitle.textContent = 'Hello';  // -- doesn't consider styling 
//headertitle.innerText = 'Goodbye';
//headertitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = `solid 3px #000`; //--- modify css

// get element by class name 
// let items = document.getElementsByClassName(`list-group-item`);
// console.log(items);
// items[0].textContent = 'Hello';
// Change background of one item
// items[1].style.backgroundColor = 'yellow'; 
// Change background of all items
// for (let i = 0; i < items.length; ++i)
// {
//     items[i].style.backgroundColor = `#f4f4f4`;
// }

// // get element by tag name 
// let li = document.getElementsByTagName(`li`);
// console.log(li);
// li[0].textContent = 'Hello';
// //Change background of one li
// li[1].style.backgroundColor = 'yellow'; 
// //Change background of all li
// for (let i = 0; i < li.length; ++i)
// {
//     li[i].style.backgroundColor = `#f4f4f4`;
// }