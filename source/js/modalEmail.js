import { openModal } from "./modal.js"; 

const modalOpen = document.querySelector('.footer__button-subscribe');
const modalEmail = document.getElementById('modal_email');

modalOpen.addEventListener('click', (event) => {
  openModal(event, modalEmail);
});