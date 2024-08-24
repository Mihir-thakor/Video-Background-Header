let side_bar = document.querySelectorAll('.ri-more-2-fill');
let side_menu = document.querySelector('.side_bar');
let close_bar = document.querySelector('.close_side_bar');
let overlay = document.querySelector('.overlay');

side_bar.forEach(sideBarItem => {
    sideBarItem.addEventListener('click', () => {
        side_menu.classList.toggle('show_side_bar');
        overlay.classList.toggle('show_overlay');
    });
});

close_bar.addEventListener('click', () => {
    side_menu.classList.toggle('show_side_bar');
    overlay.classList.toggle('show_overlay');
});

let nav_bar = document.querySelector('.bars .ri-menu-2-line');
let nav_menu = document.querySelector('ul');
let closeLink = document.querySelectorAll('ul li');

nav_bar.addEventListener('click', () => {
    nav_menu.classList.toggle('show_nav');
});

closeLink.forEach(closeItem => {
    closeItem.addEventListener('click', () => {
        nav_menu.classList.toggle('show_nav');
    });
});