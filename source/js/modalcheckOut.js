import './modalWaiting.js';
import { Modal } from "./modal.js"; 

const cart = document.querySelector('.shopping-cart');
const modalOpen = cart.querySelector('.shopping-cart__submit');
const modalCheckOut = new Modal('modal_checkOut');

modalOpen.addEventListener('click', (event) => {
  cart.classList.remove('shopping-cart--open');
  modalCheckOut.openModal(event);
});

const input = modalCheckOut.modal.querySelector('.input');
let reg = /[A-Za-zА-Яа-яЁё]/g;

input.oninput = function() {
  this.value = this.value.replace(reg, '');
}

