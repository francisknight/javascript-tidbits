// Interactive JS 

let button =document.getElementById(`button`);

function buttonClick()
{
    document.getElementById(`header-title`).innerHTML = `Change`;
}

button.addEventListener(`click`, buttonClick);
