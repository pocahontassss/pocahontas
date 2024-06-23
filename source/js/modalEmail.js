import { Modal } from "./modal.js"; 

const modalOpen = document.querySelector('.footer__button-subscribe');
const modalEmail = new Modal('modal_email');
const input = document.querySelector('.footer__email');

modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  if(!input.value || !input.value.includes('@')) {
    alert(!input.value ?'Ошибка! Необходимо ввести адрес электронной почты!' : 'Ошибка! Необходимо ввести корректный адрес электронной почты!');
    return;
  }
  modalEmail.openModal(event);
  input.value = '';
});

