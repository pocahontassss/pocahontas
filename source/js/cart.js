import { get } from 'browser-sync';
import { getStorage } from './storage.js';
debugger
const cart = document.querySelector('.shopping-cart');
const openCart = document.querySelector('.header__basket');
const closeCart = document.querySelector('.shopping-cart__button-close');
const checkOut = document.querySelector('.shopping-cart__submit');

const CloseCartButton = ('click', () => {
    cart.classList.remove('shopping-cart--open');
    closeCart.removeEventListener('click', CloseCartButton);
});
openCart.addEventListener('click', (event) => {
    event.preventDefault();
    cart.classList.add('shopping-cart--open');
    closeCart.addEventListener('click', CloseCartButton);
});


export const addToCart = (product) => {
    const targetEl = document.querySelector('.shopping-cart__list');
    const template = document.querySelector('.shopping-cart__template').content.querySelector('.shopping-cart__item');
    
    const clone = template.cloneNode(true);
    clone.querySelector('.shopping-cart__img').src = product.image;
    clone.querySelector('.shopping-cart__name').textContent = product.name;
    clone.querySelector('.shopping-cart__price').textContent = `${product.price} ₽`;
    
    targetEl.append(clone);
}

getStorage('cart').forEach(product => addToCart(product));