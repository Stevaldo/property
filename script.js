const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menu-toggle ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
})
