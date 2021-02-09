// Examine the document object
// console.dir(document);


// Selectors 

// Get element by id and modify it //
// let headertitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');

// console.log(headertitle);
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

// Query Selector -- One item selecting 
// let header = document.querySelector(`#main-header`);
// header.style.borderBottom = `solid 4px #cccc`;

// let input = document.querySelector(`input`);
// input.placeholder = `Hello`; // only select the first input, text box

// let submit = document.querySelector(`input[type ="submit"]`);
// submit.value = `SEND`;

// let items = document.querySelector(`.list-group-item`);
// items.style.color = `red`;

// let lastItem = document.querySelector(`.list-group-item:last-child`);
// lastItem.style.color = `blue`;
// let secondItem = document.querySelector(`.list-group-item:nth-child(2)`);
// secondItem.style.color = `gray`;

