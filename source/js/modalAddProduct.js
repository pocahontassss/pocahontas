import { openModal } from "./modal.js"; 

const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalAddProduct = document.getElementById('modal_add-product');

productAdds.forEach((productAdd) => {
  productAdd.addEventListener('click', (event) => {
    openModal(event, modalAddProduct);
  });
});
