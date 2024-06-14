import { Modal } from "./modal.js"; 

const modalOpen = document.querySelector('.footer__button-subscribe');
const modalEmail = new Modal('modal_email');

modalOpen.addEventListener('click', (event) => {
  modalEmail.openModal(event);
});