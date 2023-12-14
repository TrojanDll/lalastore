const modalItems = document.querySelectorAll('.form__wrapper')
modalItems.forEach(item => {
    const popupHandler = item.querySelector('.form__button-popup')
    const formPopupContainer = item.querySelector('.form__popup')
    if (popupHandler) {
        popupHandler.addEventListener('click', () => {
            if (popupHandler.classList.contains('form__button-popup_open')) {
                popupHandler.classList.remove('form__button-popup_open')
                formPopupContainer.classList.add('form__popup_close')
            } else {
                popupHandler.classList.add('form__button-popup_open')
                formPopupContainer.classList.remove('form__popup_close')
            }
        })
    }

})