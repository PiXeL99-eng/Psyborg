const hamburger = document.querySelectorAll('.hamburger');
const html = document.getElementsByTagName('html');
let menuOpen = false;

hamburger[0].addEventListener('click', () => {
    if (!menuOpen) {
        hamburger[0].classList.add('hamburger-open');
        menuOpen = true;
    }
    else {
        hamburger[0].classList.remove('hamburger-open');
        menuOpen = false;
    }
});

const navpage = document.getElementsByClassName('nav-page');
const navmenu = document.getElementsByClassName('nav-menu');

function menutoggle() {

    if (navmenu[0].style.opacity == '0') {
        navmenu[0].style.opacity = '1';
        navmenu[0].style.transform = 'translateX(-100px)';
        navpage[0].style.opacity = '0.9';
        html[0].style.overflow = 'hidden';
    }
    else {
        navmenu[0].style.opacity = '0';
        navmenu[0].style.transform = 'translateX(100px)';
        navpage[0].style.opacity = '0';
        html[0].style.overflow = 'visible';
    }
}
function menutogglecloseonly() {

    if (navmenu[0].style.opacity == '1') {
        navmenu[0].style.opacity = '0';
        navmenu[0].style.transform = 'translateX(100px)';
        navpage[0].style.opacity = '0';

        hamburger[0].classList.remove('hamburger-open');
        menuOpen = false;
        html[0].style.overflow = 'visible';
    }
}

hamburger[0].addEventListener('click', menutoggle);
navpage[0].addEventListener('click', menutogglecloseonly);