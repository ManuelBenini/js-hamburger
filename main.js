
const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerIcon = document.querySelector('.fas.fa-bars');

const closeIcon = document.querySelector('.close');

hamburgerIcon.addEventListener('click', function(){
  hamburgerMenu.classList.add('active');
});

closeIcon.addEventListener('click', function(){
  hamburgerMenu.classList.remove('active');
});