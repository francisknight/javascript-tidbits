// Interactive JS 

let button = document.getElementsById(`button`);

function buttonClick()
{
    document.getElementsById(`header-title`).innerHTML = `Change`;
}

button.addEventListener(`click`, buttonClick);
