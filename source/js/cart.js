import { Storage } from './storage.js';
import formatPrice from './formatPrice.js';
import './modalcheckOut.js';

const cart = document.querySelector('.shopping-cart');
const openCart = document.querySelector('.header__basket');
const closeCart = cart.querySelector('.shopping-cart__button-close');
const overlay = document.getElementById('modal_overlay');
const storage = new Storage();

const CloseCartButton = ('click', () => {
    cart.classList.remove('shopping-cart--open');
    overlay.classList.remove('overlay--showed');
    closeCart.removeEventListener('click', CloseCartButton);
});

openCart.addEventListener('click', (event) => {
    event.preventDefault();
    cart.classList.add('shopping-cart--open');
    overlay.classList.add('overlay--showed');
    closeCart.addEventListener('click', CloseCartButton);
    overlay.addEventListener('click', CloseCartButton);
});

const totalEl = document.querySelector('.shopping-cart__total span');
const totalPriceEl = document.querySelector('.shopping-cart__total-price');

const editProductCount = (clone, product, operation = 'plus') => {
    const input = clone.querySelector('.shopping-cart__input').value;
    
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

const updateProductCount = (clone, product) => {
    const input = clone.querySelector('.shopping-cart__input');

    input.addEventListener('input', () => {
        let newCount = Number(input.value);

        const cartData = storage.getStorage('cart') || [];
        const currentCount = cartData.filter(item => item.id === product.id).length;

        if (newCount > currentCount) {
            for (let i = currentCount; i < newCount; i++) {
                storage.addToStorage('cart', product);
            }
        } else if (newCount < currentCount) {
            for (let i = currentCount; i > newCount; i--) {
                storage.removeFromStorage('cart', product.id);
            }
        }

        const updatedCartData = storage.getStorage('cart') || [];
        const updatedCount = updatedCartData.filter(item => item.id === product.id).length;

        input.value = updatedCount;
        totalEl.textContent = updatedCartData.length;
        totalPriceEl.textContent = formatPrice(updatedCartData.reduce((acc, curr) => acc + Number(curr.price), 0));
        clone.querySelector('.shopping-cart__price').textContent = `${formatPrice(updatedCount * product.price)}`;
        editCartCount();
    });
};

export const renderCart = (product) => {
    const data = storage.getStorage('cart');
    
        if(!data?.length) {
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
    }, {});

    const targetEl = document.querySelector('.shopping-cart__list');
    const template = document.querySelector('.shopping-cart__template').content.querySelector('.shopping-cart__item');
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
            storage.removeFromStorage('cart', product.id);
            editProductCount(clone, product, 'minus');
            editCartCount();
            clone.querySelector('.shopping-cart__price').textContent = `${formatPrice(clone.querySelector('.shopping-cart__input').value * product.price)}`;
            };
        })

        clone.querySelector('.shopping-cart__button--plus').addEventListener('click', () => {
            storage.addToStorage('cart', product);
            editProductCount(clone, product, 'plus');
            editCartCount();
            clone.querySelector('.shopping-cart__price').textContent = `${formatPrice(clone.querySelector('.shopping-cart__input').value * product.price)}`;
            
        })
        
        clone.querySelector('.shopping-cart__price').textContent = `${formatPrice(clone.querySelector('.shopping-cart__input').value * product.price)}`;
        
        updateProductCount(clone, product);
        fragment.append(clone);
    });
    
    targetEl.append(fragment);
    
    const totalPriceEl = document.querySelector('.shopping-cart__total-price');
    totalPriceEl.textContent = formatPrice(data.reduce((acc, curr) => acc + Number(curr.price), 0));
};

renderCart();

const cartCount = document.querySelector('.header__number-basket');

export const editCartCount = () => {
    const data = storage.getStorage('cart');  
    totalEl.textContent = data?.length || 0;
    cartCount.textContent = totalEl.textContent;
};

editCartCount();