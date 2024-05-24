const closeModal = () => {
    const overlay = document.getElementById('modal_overlay');
    const modal = document.querySelector('.modal--showed');
    
    overlay.classList.remove('overlay--showed');
    modal.classList.remove('modal--showed');
}

export const openModal = (event, modal) => {
    event.preventDefault();
    const modalClose = modal.querySelector('.modal__button-close');
    const overlay = document.getElementById('modal_overlay');
    const ResumeButton = modal.querySelector('.modal__button');
    
    modal.classList.add('modal--showed');
    overlay.classList.add('overlay--showed');
    overlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    if (ResumeButton) {
        ResumeButton.addEventListener('click', closeModal);
    }
}

