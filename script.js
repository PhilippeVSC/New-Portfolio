const menu_burger_button = document.getElementsByClassName('menu-burger')[0];
const nav_ul = document.getElementsByClassName('nav-ul')[0];


menu_burger_button.addEventListener('click', () => {
    if(nav_ul.classList.contains('active')){
        nav_ul.classList.remove('active');
    } else {
        nav_ul.classList.add('active');
    }
});
