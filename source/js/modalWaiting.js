import { openModal } from "./modal.js"; 

const modalCheckOut = document.getElementById('modal_checkOut');
const modalWaitingOpen = modalCheckOut.querySelector('.checkOut__button');
const modalWaiting = document.getElementById('modal_waiting');
const checkBox = modalCheckOut.querySelector('.checkbox');
const input = modalCheckOut.querySelector('.input');

modalWaitingOpen.addEventListener('click', (event) => {
  event.preventDefault();
  if(!input.value || !checkBox.checked) {
    alert(!input.value ? 'Ошибка! Необходимо ввести номер телефона!'  : 'Ошибка! Необходимо подтвердить согласие с политикой конфиденциальности');
    return;
  }
  
  modalCheckOut.classList.remove('modal--showed');
  openModal(event, modalWaiting);
});