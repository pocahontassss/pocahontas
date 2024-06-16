export class Modal {
    
    static overlay = document.getElementById('modal_overlay');
    static modals = document.querySelectorAll('.modal');
    
    constructor(modalID) {
        this.modal = document.getElementById(modalID);
        this.modalClose = this.modal.querySelector('.modal__button-close');
        this.resumeButton = this.modal.querySelector('.modal__button');
    }
    
    static modalCloseAll () {
        this.modals.forEach(modal => {
            if (!modal.classList.contains('modal--showed')) {
                modal.classList.remove('modal--showed');
                Modal.overlay.classList.remove('overlay--showed');
            } 
        })
    }
    openModal(event) {
        event.preventDefault();
        this.modal.classList.add('modal--showed');
        Modal.overlay.classList.add('overlay--showed');
        Modal.overlay.addEventListener('click', this.closeModal.bind(this));
        this.modalClose.addEventListener('click', this.closeModal.bind(this));
        
        if (this.resumeButton) {
            this.resumeButton.addEventListener('click', this.closeModal.bind(this));
        }
    }
    
    closeModal() {
        this.modal.classList.remove('modal--showed');
        Modal.overlay.classList.remove('overlay--showed');
    }
}
