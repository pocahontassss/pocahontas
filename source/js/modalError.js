import { Modal } from "./modal.js"; 

const modalError = new Modal('modal_error');

const buttonSearch = document.querySelector('.header__search');
const buttonHero = document.querySelector('.hero__button');
const buttonGenderSwap = document.querySelector('.best-selling__gender-swap--woman');
const buttonBanner = document.querySelector('.banner__button');

const buttons = [buttonSearch, buttonHero, buttonGenderSwap, buttonBanner];

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        modalError.openModal(event);
    });
});

const buttonShowAll = document.querySelectorAll('.show-all');

buttonShowAll.forEach(button => {
    button.addEventListener('click', (event) => {
        modalError.openModal(event);
    });
});