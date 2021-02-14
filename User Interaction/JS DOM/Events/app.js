// Interactive JS 

// let button =document.getElementById(`button`);

// function buttonClick(e)
// {
//     document.getElementById(`header-title`).innerHTML = `Change`;
//     document.querySelector(`#main`).style.backgroundColor = `#f6b352`;

//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e.type);

//     let output = document.querySelector(`#output`);
//     output.innerHTML = `
//         <h3> ${e.target.id} </h3>
//     `;

//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// button.addEventListener(`click`, buttonClick);

// let button = document.getElementById(`button`); 
// let box = document.getElementById(`box`);

let itemInput = document.querySelector(`input[type="text"]`);
let form = document.querySelector(`form`);

function runEvent (e)
{
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);

    // document.getElementById(`output`).innerHTML = `<h3> ${e.target.value} </h3>`;
}

//button.addEventListener(`click`, runEvent);
// button.addEventListener(`mouseup`, runEvent);
// button.addEventListener(`mousedown`, runEvent);

// box.addEventListener(`mouseover`, runEvent); // target parent
// box.addEventListener(`mouseEnter`, runEvent); // target child element 
// box.addEventListener(`mouseleave`, runEvent);

itemInput.addEventListener(`keydown`, runEvent);
form.addEventListener(`submit`, runEvent);
