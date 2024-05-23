const modalEmailOpen = document.querySelector('.footer__button-subscribe');
const modalEmailClose = document.querySelector('.modal__container--email .modal__button-close');
const modalEmail = document.querySelector('.modal__container--email');
const overlay = document.querySelector('.modal__overlay');

const EmailCloseButton = () => {
  modalEmail.classList.remove('modal__container--showed');
  overlay.classList.remove('modal__overlay--showed');
  modalEmailClose.removeEventListener ('click', EmailCloseButton);
};

modalEmailOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modalEmail.classList.add('modal__container--showed');
  overlay.classList.add('modal__overlay--showed');
  modalEmailClose.addEventListener('click', EmailCloseButton);
});