
//clicking on LUNARIAN launches modal

const launchModal = () => {
    document.getElementById("modal__container").setAttribute("style", "display:block;");
}

const dismissModal = () => {
    document.getElementById("modal__container").setAttribute("style", "display:none;");
}

document.getElementById("lunarian").addEventListener("click", launchModal);
document.getElementById("modal__exit").addEventListener("click", dismissModal);



