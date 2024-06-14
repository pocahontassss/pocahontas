export class Modal {
    constructor(modalID) {
        this.modal = document.getElementById(modalID);
        this.overlay = document.getElementById('modal_overlay');
        this.modalClose = this.modal.querySelector('.modal__button-close');
        this.resumeButton = this.modal.querySelector('.modal__button');
    }
    
    openModal(event) {
        event.preventDefault();
        this.modal.classList.add('modal--showed');
        this.overlay.classList.add('overlay--showed');
        this.overlay.addEventListener('click', this.closeModal.bind(this));
        this.modalClose.addEventListener('click', this.closeModal.bind(this));
        
        if (this.resumeButton) {
            this.resumeButton.addEventListener('click', this.closeModal.bind(this));
        }
    }
    
    closeModal() {
        this.modal.classList.remove('modal--showed');
        this.overlay.classList.remove('overlay--showed');
    }
}
