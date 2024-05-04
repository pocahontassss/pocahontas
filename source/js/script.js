const headerOpenMenu = document.querySelector('.header__burger');
const headerMenu = document.querySelector ('.header__nav');
const headerClosedMenu = document.querySelector('.header__closed');

const HeaderCloseButton = () => {
  headerMenu.classList.remove ('header__nav--showed');
  headerClosedMenu.removeEventListener('click', HeaderCloseButton);
};

headerOpenMenu.addEventListener('click', () => {
  headerMenu.classList.add('header__nav--showed');
  headerClosedMenu.addEventListener('click', HeaderCloseButton); 
});


const productAdds = document.querySelectorAll('.product-card__arrow-icon');
const modalProductAdd = document.querySelector('.modal__addProduct');
const modalProductClose = document.querySelector('.modal__addProduct-buttonClose');
const modalContinue = document.querySelector('.modal__addProduct-button');

const modalClose = () => {
  modalProductAdd.classList.remove('modal__addProduct--showed');
  modalProductClose.removeEventListener('click', modalClose);
};

const modalContinueButton = () => {
  modalProductAdd.classList.remove('modal__addProduct--showed');
  modalProductClose.removeEventListener('click', modalContinueButton);
};

productAdds.forEach(function(productAdd) {
  productAdd.addEventListener('click', () => {
    modalProductAdd.classList.add('modal__addProduct--showed');
    modalProductClose.addEventListener('click', modalClose);
    modalContinue.addEventListener('click', modalContinueButton);
  });
});
