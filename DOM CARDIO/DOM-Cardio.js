// Make a div
let myDiv = document.createElement(`div`);

// add a class of wrapper to it
myDiv.className = `wrapper`;

// put it into the body

let body = document.querySelector(`body`);
body.appendChild(myDiv);

// make an unordered list
let myList = document.createElement(`ul`);

// add three list items with the words "one, two three" in them
let listItemOne = document.createElement(`li`);
listItemOne.innerText = `One`;

let listItemTwo = document.createElement(`li`);
listItemTwo.innerText = `Two`;

let listItemThree = document.createElement(`li`);
listItemThree.innerText = `Three`;

// put that list into the above wrapper
myList.appendChild(listItemOne);
myList.appendChild(listItemTwo);
myList.appendChild(listItemThree);
const wrapper = document.querySelector(`.wrapper`);
wrapper.appendChild(myList);

// create an image
let image = document.createElement(`img`)

// set the source to an image
image.src = `https://bit.ly/3aisaBR`;

// set the width to 250
image.width = `250`;

// add a class of cute
image.className = `cute`;

// add an alt of Cute Puppy
image.alt = `Cute Puppy`;

// Append that image to the wrapper
wrapper.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of 
let pDiv = document.createElement(`div`);
let paragraphOne = document.createElement(`p`);
paragraphOne.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, itaque.`;

let paragraphTwo = document.createElement(`p`);
paragraphTwo.innerText = `Lorem ipsum dolor sit amet consectetur.`;

pDiv.append(paragraphOne, paragraphTwo);

// put this div before the unordered list from above
wrapper.insertBefore(pDiv, myList);

// add a class to the second paragraph called warning
paragraphTwo.classList.add(`warning`);
// remove the first paragraph
paragraphOne.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {

    let playerDiv = document.createElement(`div`);
    playerDiv.classList.add(`playerCard`);

    let h2 = document.createElement(`h2`);
    h2.innerText = `NAME - AGE`;

    let playerParagraph = document.createElement(`p`);
    playerParagraph.innerText = `They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!`;

    let deleteButton = document.createElement(`input`);
    deleteButton.type = `submit`;
    deleteButton.value = `Delete`;
    deleteButton.classList.add(`delete`);

    playerDiv.append(h2, playerParagraph, deleteButton);

    return playerDiv;
}

// make a new div with a class of cards
let cardsDiv = document.createElement(`div`);
cardsDiv.classList.add(`cards`);

// Have that function make 4 cards
// append those cards to the div
for (let i = 0; i < 4; ++i) {
    cardsDiv.appendChild(generatePlayerCard(`Asher`, 5, 5));
}

// put the div into the DOM just before the wrapper element
body.insertBefore(cardsDiv, wrapper);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const allButtons = document.querySelectorAll(`.delete`);
console.log(allButtons);

// make out delete function
function deleteButton(event) {
    const clickButton = event.currentTarget;
    clickButton.parentElement.remove();
}
// loop over them and attach a listener
allButtons.forEach(button => button.addEventListener('click', deleteButton));
