// Функция для открытия меню на мобилке

const headerOpenMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__nav');
const headerClosedMenu = document.querySelector('.header__closed');

const HeaderCloseButton = () => {
  headerMenu.classList.remove ('header__nav--showed');
  headerClosedMenu.removeEventListener('click', HeaderCloseButton);
};

headerOpenMenu.addEventListener('click', () => {
  headerMenu.classList.add('header__nav--showed');
  headerClosedMenu.addEventListener('click', HeaderCloseButton); 
});

// Модальное окно об добавлении продуктов в корзину

const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalProductAdd = document.querySelector('.modal__add-product');
const modalProductClose = document.querySelector('.modal__button-close');
const modalContinue = document.querySelector('.modal__button');

const modalClose = () => {
  modalProductAdd.classList.remove('modal__container--showed');
  modalProductClose.removeEventListener('click', modalClose);
};

const modalContinueButton = () => {
  modalProductAdd.classList.remove('modal__container--showed');
  modalProductClose.removeEventListener('click', modalContinueButton);
};

productAdds.forEach(function(productAdd) {
  productAdd.addEventListener('click', () => {
    modalProductAdd.classList.add('modal__container--showed');
    modalProductClose.addEventListener('click', modalClose);
    modalContinue.addEventListener('click', modalContinueButton);
  });
});

// Модальное окно - проверка подписки, email

const modalEmailOpen = document.querySelector('.footer__button-subscribe');
const modalEmailClose = document.querySelector('.modal__email .modal__button-close');
const modalEmail = document.querySelector('.modal__email');

const EmailCloseButton = () => {
  modalEmail.classList.remove('modal__container--showed');
  modalEmailClose.removeEventListener ('click', EmailCloseButton);
};

modalEmailOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modalEmail.classList.add('modal__container--showed');
  modalEmailClose.addEventListener('click', EmailCloseButton);
});