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

let button = document.getElementById(`button`); 
let box = document.getElementById(`box`);

function runEvent (e)
{
    console.log(`EVENT TYPE: ${e.type}`);
}

//button.addEventListener(`click`, runEvent);
// button.addEventListener(`mouseup`, runEvent);
// button.addEventListener(`mousedown`, runEvent);

box.addEventListener(`mouseover`, runEvent);
