export const openModal = (modal /* идентификатор модального окна*/) => {
    const modalClose = modal.querySelector('.modal__button-close'); /* Ищем кнопку закрытия в модалке */
    const overlay = document.querySelector('.modal__overlay'); /* Ищем оверлей по документу */
    const ResumeButton = modal.querySelector('.modal__button'); /* Ищем кнопку продолжить в модалке*/
    
    modal.classList.add('modal__container--showed'); /* делаем модалку видимой */
    overlay.classList.add('modal__overlay--showed'); /* делаем оверлей видимым */
    overlay.addEventListener('click', closeModal); /* при клике на оверлей закрываем модалку */
    modalClose.addEventListener('click', closeModal); /* при клике на кнопку закрываем модалку */
    
    if (ResumeButton) {
        ResumeButton.addEventListener('click', closeModal); /* при клике на кнопку продолжить закрываем модалку (если она существует) */
    }
}

const closeModal = () => {
    const overlay = document.querySelector('.modal__overlay'); /* ищем снова оверлей */
    const modal = document.querySelector('.modal__container--showed'); /* ищем в документе активный класс modal__container--showed, а он один, потому что можно открыть только одну модалку */
    
    overlay.classList.remove('modal__overlay--showed'); /* делаем оверлей невидимым */
    modal.classList.remove('modal__container--showed'); /* делаем модалку невидимой */
}


