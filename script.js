/* Import some variable */
const menu_burger_button = document.getElementsByClassName('menu-burger')[0];
const nav_ul = document.getElementsByClassName('nav-ul')[0];
const header = document.getElementsByClassName('header')[0];

/* When burger menu is clicked */
menu_burger_button.addEventListener('click', () => {
    if(nav_ul.classList.contains('active')){
        nav_ul.classList.remove('active');
        header.classList.remove('active');
    } else {
        nav_ul.classList.add('active');
        header.classList.add('active');
    }
});
