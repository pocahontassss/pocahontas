import './modalWaiting.js';
import { openModal } from "./modal.js"; 

const cart = document.querySelector('.shopping-cart');
const modalOpen = cart.querySelector('.shopping-cart__submit');
const modalCheckOut = document.getElementById('modal_checkOut');

modalOpen.addEventListener('click', (event) => {
  cart.classList.remove('shopping-cart--open');
  openModal(event, modalCheckOut);
});

const input = modalCheckOut.querySelector('.input');
let reg = /[A-Za-zА-Яа-яЁё]/g;

input.oninput = function() {
  this.value = this.value.replace(reg, '');
}
