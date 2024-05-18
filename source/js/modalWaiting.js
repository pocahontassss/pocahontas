const modalWaitingOpen = document.querySelector('.modal__checkOut-button');
const modalCheckout = document.querySelector('.modal__container--checkOut');
const modalWaitingClose = document.querySelector('.modal__container--waiting .modal__button-close');
const modalWaiting = document.querySelector('.modal__container--waiting');
const modalContinue = document.querySelector('.modal__container--waiting .modal__button');
const overlay = document.querySelector('.modal__overlay');

const button = document.querySelector('.modal__checkOut-button');
const checkBox = document.querySelector('.modal__checkOut-checkbox');
const input = document.querySelector('.modal__checkOut-input');

const modalClose = () => {
  modalWaiting.classList.remove('modal__container--showed');
  overlay.classList.remove('modal__overlay--showed');
  modalWaitingClose.removeEventListener ('click', modalClose);
};

const modalContinueButton = modalClose;

modalWaitingOpen.addEventListener('click', (event) => {
  if (checkBox.checked === true) {
    event.preventDefault();
    modalCheckout.classList.remove('modal__container--showed');
  modalWaiting.classList.add('modal__container--showed');
  overlay.classList.add('modal__overlay--showed');
  modalWaitingClose.addEventListener('click', modalClose, modalContinueButton);
  modalContinue.addEventListener('click', modalContinueButton);
  } else if (input.value === '') {
    alert('Ошибка! Необходимо ввести номер телефона!');
    event.preventDefault();
  } else {
    alert('Ошибка! Необходимо подтвердить согласие с политикой конфиденциальности');
    event.preventDefault();
  }
});