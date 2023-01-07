const hamburgerButton = document.getElementById('hamburger-btn');
const closeButton = document.getElementById('close-btn');

hamburgerButton.addEventListener('click',toggleNav);
closeButton.addEventListener('click',toggleNav)

function toggleNav(){
    document.getElementsByClassName('nav-menu')[0].classList.toggle('active');
}