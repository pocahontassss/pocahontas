import { Modal } from "./modal.js"; 

const modalError = new Modal('modal_error');

const buttonSearch = document.querySelector('.header__search');
const buttonHero = document.querySelector('.hero__button');
const buttonGenderSwap = document.querySelector('.best-selling__gender-swap--woman');
const buttonShop = document.querySelector('.header__shop');
const buttonContacts = document.querySelector('.header__contacts');

const buttons = [buttonSearch, buttonHero, buttonGenderSwap, buttonShop, buttonContacts];

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

const buttonBanner = document.querySelectorAll('.banner__button');

buttonBanner.forEach(button => {
    button.addEventListener('click', (event) => {
        modalError.openModal(event);
    });
});
