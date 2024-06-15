import { Modal } from "./modal.js"; 

const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalAddProduct = new Modal('modal_add-product');

productAdds.forEach((productAdd) => {
  productAdd.addEventListener('click', (event) => {
    modalAddProduct.openModal(event);
  });
});
