// Interactive JS 

let button =document.getElementById(`button`);

function buttonClick()
{
    document.getElementById(`header-title`).innerHTML = `Change`;
    document.querySelector(`#main`).style.backgroundColor = `#f6b352`;
}

button.addEventListener(`click`, buttonClick);
