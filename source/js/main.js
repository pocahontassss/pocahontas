import './script.js';
import renderProducts from './renderProducts.js';
import products from './products.js';

const catalogList = document.querySelector('.best-selling__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;

renderProducts(products, catalogItemTemplate, catalogList, false, 'catalog__item');