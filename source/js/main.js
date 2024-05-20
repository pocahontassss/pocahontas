import { getApi } from './api.js';
import './cart.js';
import renderProducts from './renderProducts.js';
import './modalEmail.js';
import './menu.js';

const catalogList = document.querySelector('.best-selling__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;
const arrayProduct = await getApi(`https://zsa-studio.ru/catalog.php`);

renderProducts(arrayProduct, catalogItemTemplate, catalogList, false, 'product');
