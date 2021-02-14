// Interactive JS 

let button =document.getElementById(`button`);

function buttonClick(e)
{
    document.getElementById(`header-title`).innerHTML = `Change`;
    document.querySelector(`#main`).style.backgroundColor = `#f6b352`;

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
}

button.addEventListener(`click`, buttonClick);
