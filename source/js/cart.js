import { addToStorage, getStorage, removeFromStorage } from './storage.js';
import formatPrice from './formatPrice.js';
import './checkOut.js';

const cart = document.querySelector('.shopping-cart');
const openCart = document.querySelector('.header__basket');
const closeCart = cart.querySelector('.shopping-cart__button-close');
const checkOut = cart.querySelector('.shopping-cart__submit');
const overlay = document.querySelector('.modal__overlay');

const CloseCartButton = ('click', () => {
    cart.classList.remove('shopping-cart--open');
    overlay.classList.remove('modal__overlay--showed');
    closeCart.removeEventListener('click', CloseCartButton);
});

openCart.addEventListener('click', (event) => {
    event.preventDefault();
    cart.classList.add('shopping-cart--open');
    overlay.classList.add('modal__overlay--showed');
    closeCart.addEventListener('click', CloseCartButton);
});

const cartCount = document.querySelector('.header__number-basket');
const totalEl = cart.querySelector('.shopping-cart__total span');

const editProductCount = (clone, product, operation = 'plus') => {
    const input = clone.querySelector('.shopping-cart__input').value;
    const totalEl = document.querySelector('.shopping-cart__total span');
    const totalPriceEl = document.querySelector('.shopping-cart__total-price');
    
    const totalPrice = Number(totalPriceEl.textContent.replace(/\D/g, ''));
    if (operation === 'plus') {
        totalPriceEl.textContent = formatPrice(totalPrice + Number(product.price));
        clone.querySelector('.shopping-cart__input').value = Number(input) +1;
        totalEl.textContent = Number (totalEl.textContent) + 1;
        cartCount.textContent = Number(cartCount.textContent) + 1;

    } else {
        totalPriceEl.textContent = formatPrice(totalPrice - Number(product.price));
        clone.querySelector('.shopping-cart__input').value = Number(input) -1;
        totalEl.textContent = Number (totalEl.textContent) - 1;
        cartCount.textContent = Number(cartCount.textContent) - 1;
    }
}
export const renderCart = () => {
    const data = getStorage('cart');
    
    if (!data?.length) {
        return;
    }
    
    const uniqueData = [...new Set(data.map(JSON.stringify))].map(JSON.parse).sort((a, b) => a.id - b.id);
    
    const countsData = data.reduce ((acc, curr) => {
        const id = curr.id;
        
        if (acc[id]) {
            acc[id]++;
        } else {
            acc[id] = 1;
        }
        return acc;
    });

    const targetEl = cart.querySelector('.shopping-cart__list');
    const template = cart.querySelector('.shopping-cart__template').content.querySelector('.shopping-cart__item');
    const fragment = document.createDocumentFragment();
    
    targetEl.innerHTML = '';
    
    uniqueData.forEach(product => {
        const clone = template.cloneNode(true);
        clone.querySelector('.shopping-cart__input').value = countsData[product.id];
        clone.querySelector('.shopping-cart__img').src = product.image;
        clone.querySelector('.shopping-cart__name').textContent = product.name;
        clone.querySelector('.shopping-cart__price').textContent = `${product.price} ₽`;
        
        clone.querySelector('.shopping-cart__button--minus').addEventListener('click', () => {
            if (clone.querySelector('.shopping-cart__input').value <= 0) {
                clone.querySelector('.shopping-cart__input').value = 0;
            } else {
            removeFromStorage('cart', product.id);
            editProductCount(clone, product, 'minus');
            editCartCount();
            };
        })

        clone.querySelector('.shopping-cart__button--plus').addEventListener('click', () => {
            addToStorage('cart', product);
            editProductCount(clone, product, 'plus');
            editCartCount();
        })
        
        fragment.append(clone);
        
    });
    
    targetEl.append(fragment);
    
    const totalPriceEl = cart.querySelector('.shopping-cart__total-price');
    totalPriceEl.textContent = formatPrice(data.reduce((acc, curr) => acc + Number(curr.price), 0));
    
    const editCartCount = () => {
        const data = getStorage('cart');  
        totalEl.textContent = data?.length || 0;
        cartCount.textContent = totalEl.textContent;
    };
    
    editCartCount();
};

renderCart();
