
    var menuBar = document.getElementById('menu-bar');
    var mobNavigation = document.getElementsByClassName('mob-navigation')[0];
    var mobNavigationUl = document.getElementsByClassName('mob-navigation-ul')[0];
    var navbar = document.getElementsByClassName('navbar')[0];

    window.onresize = () => {
        mobNavigation.style.top = navbar.offsetHeight + 'px';
    }
    menuBar.onclick = () => {
        menuBar.classList.toggle('open');
        menuBar.classList.toggle('close');
        mobNavigation.classList.toggle('open');
        mobNavigation.style.top = navbar.offsetHeight + 'px';
        document.body.classList.toggle('stop');
    }




