import { openModal } from "./modal.js"; 

const modalOpen = document.querySelector('.header__search');
const modalHello = document.querySelector('.modal__container--hello');

modalOpen.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(modalHello);
});