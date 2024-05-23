window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let scrollPosition = window.scrollY;
    let scrollThreshold;

    if (window.matchMedia("(max-width: 767px)").matches) {
        scrollThreshold = 25;
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1727px)").matches) {
        scrollThreshold = 40;
    } else if (window.matchMedia("(min-width: 1728px)").matches) {
        scrollThreshold = 220;
    }
    
    if (scrollPosition >= scrollThreshold) {
        header.classList.add('header--scroll');
    } else {
        header.classList.remove('header--scroll');
    }
});