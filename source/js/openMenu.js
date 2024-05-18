// Функция для открытия меню на мобилке

const headerOpenMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__nav');
const headerClosedMenu = document.querySelector('.header__closed');
const overlay = document.querySelector('.modal__overlay');

const HeaderCloseButton = () => {
  headerMenu.classList.remove ('header__nav--showed');
  overlay.classList.remove('modal__overlay--showed');
  headerClosedMenu.removeEventListener('click', HeaderCloseButton);
};

headerOpenMenu.addEventListener('click', () => {
  headerMenu.classList.add('header__nav--showed');
  overlay.classList.add('modal__overlay--showed');
  headerClosedMenu.addEventListener('click', HeaderCloseButton); 
});
