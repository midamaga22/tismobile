const menuHamIcon = document.querySelector('.menu');
const ulmenu = document.querySelector('.ul-menu');

menuHamIcon.addEventListener('click', toggleulmenu);

function toggleulmenu() {
    ulmenu.classList.toggle('inactive');  
}