import { Modal } from "./modal.js"; 

const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalAddProduct = new Modal('modal_add-product');
const modalError = new Modal('modal_error');

productAdds.forEach((productAdd) => {
  productAdd.addEventListener('click', (event) => {
    if (productAdd.classList.contains('product-card__arrow-icon--popular')) {
      modalError.openModal(event);
    } else {
      modalAddProduct.openModal(event);
    }
  });
});
