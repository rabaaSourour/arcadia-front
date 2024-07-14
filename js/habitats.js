let animmalsSection = document.querySelector(".animals-section");

let isHow =true;

function showHideAnimals() {
    isShow=!isShow;
    animmalsSection.classList.toggle("hide", isShow);
}