const modalCheckout = document.querySelector('.checkOut');
const modalWaitingOpen = modalCheckout.querySelector('.checkOut__button');
const modalWaitingClose = document.querySelector('.modal__container--waiting .modal__button-close');
const modalWaiting = document.querySelector('.modal__container--waiting');
const modalContinue = document.querySelector('.modal__container--waiting .modal__button');
const overlay = document.querySelector('.modal__overlay');

const button = modalCheckout.querySelector('.checkOut__button');
const checkBox = modalCheckout.querySelector('.checkbox');
const input = modalCheckout.querySelector('.input');

const modalClose = () => {
  modalWaiting.classList.remove('modal__container--showed');
  overlay.classList.remove('modal__overlay--showed');
  modalWaitingClose.removeEventListener ('click', modalClose);
};

const modalContinueButton = modalClose;

modalWaitingOpen.addEventListener('click', (event) => {
  event.preventDefault();
  if(!input.value || !checkBox.checked) {
    alert(!input.value ? 'Ошибка! Необходимо ввести номер телефона!'  : 'Ошибка! Необходимо подтвердить согласие с политикой конфиденциальности');
    return;
  }

  modalCheckout.classList.remove('modal__container--showed');
  modalWaiting.classList.add('modal__container--showed');
  overlay.classList.add('modal__overlay--showed');
  modalWaitingClose.addEventListener('click', modalClose, modalContinueButton);
  modalContinue.addEventListener('click', modalContinueButton);
});