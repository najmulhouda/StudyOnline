let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navber');

menu.onClick =  () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}