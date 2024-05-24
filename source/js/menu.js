const headerOpenMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__nav');
const headerClosedMenu = document.querySelector('.header__closed');
const overlay = document.querySelector('.header__overlay');

const HeaderCloseButton = () => {
  headerMenu.classList.remove ('header__nav--showed');
  overlay.classList.remove('overlay--showed');
  headerClosedMenu.removeEventListener('click', HeaderCloseButton);
  overlay.removeEventListener('click', HeaderCloseButton);
};

headerOpenMenu.addEventListener('click', () => {
  headerMenu.classList.add('header__nav--showed');
  overlay.classList.add('overlay--showed');
  headerClosedMenu.addEventListener('click', HeaderCloseButton); 
  overlay.addEventListener('click', HeaderCloseButton);
});
