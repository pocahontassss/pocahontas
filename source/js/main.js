import { getApi } from './getApi.js';
import './addProduct.js';
import './openMenu.js';
import './modalEmail.js';
import renderProducts from './renderProducts.js';

const catalogList = document.querySelector('.best-selling__product-wrapper');
const catalogItemTemplate = document.querySelector('#product').content;
const arrayProduct = await getApi(`https://zsa-studio.ru/catalog.php`);

renderProducts(arrayProduct, catalogItemTemplate, catalogList, false, 'product');