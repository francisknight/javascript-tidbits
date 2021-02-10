console.log(`testing...`);

// Traversing the dom
let itemList = document.querySelector(`#items`);

 // parentNode Method
//  console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor = `#f4f4f4`;
//  console.log(itemList.parentNode.parentNode);
//  console.log(itemList.parentNode.parentNode.parentNode);

 // ParentElement
//  itemList.parentElement.style.backgroundColor = `#f4f4f4`;
//  console.log(itemList.parentElement.parentElement);
//  console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);
//console.log(itemList.children);
// itemList.children[1].style.backgroundColor = `yellow`;
// itemList.firstElementChild.textContent = `Hello`;
// itemList.lastElementChild.textContent = `Bye`;

// CreateElement

// Create a div 
let newDiv = document.createElement(`div`);
// Add class
newDiv.className = `hello`;
// Add id
newDiv.id = `hello1`;
// Add attr
newDiv.setAttribute(`title`,`Hello Div`);
// Create text node
let NewDivTex = document.createTextNode(`Hello World`);
// Add text to div
newDiv.appendChild(NewDivTex);

let container = document.querySelector(`header .container`);
let h1 = document.querySelector(`header h1`);

container.insertBefore(newDiv, h1);

newDiv.style.fontSize =`30px`;

console.log(newDiv);

