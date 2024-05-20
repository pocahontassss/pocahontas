import './modalWaiting.js';

const modalOpen = document.querySelector('.shopping-cart__submit');
const cart = document.querySelector('.shopping-cart');
const modal = document.querySelector ('.checkOut');
const modalClose = document.querySelector('.checkOut .modal__button-close');
const overlay = document.querySelector('.modal__overlay');

const ModalCloseButton = () => {
  modal.classList.remove ('modal__container--showed');
  overlay.classList.remove('modal__overlay--showed');
  modalClose.removeEventListener('click', ModalCloseButton);
};

modalOpen.addEventListener('click', () => {
  cart.classList.remove('shopping-cart--open');
  modal.classList.add('modal__container--showed');
  overlay.classList.add('modal__overlay--showed');
  modalClose.addEventListener('click', ModalCloseButton); 
});

const input = document.querySelector('.input');
let reg = /[A-Za-zА-Яа-яЁё]/g;

input.oninput = function() {
  this.value = this.value.replace(reg, '');
}
