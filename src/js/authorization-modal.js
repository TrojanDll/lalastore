const buttonAuthModalOpen = document.querySelector('#haveAnAccountButton')
const authModal = document.querySelector('#authModal')
const authModalCloseButton = document.querySelector('#authModalCloseButton')

buttonAuthModalOpen.addEventListener('click', () => {
    authModal.classList.add('authorization-modal__overflow_active')
})
authModalCloseButton.addEventListener('click', () => {
    authModal.classList.remove('authorization-modal__overflow_active')
})


const buttonRegistrationModalOpen = document.querySelector('#registrationModalOpenButton')
const RegistrationModal = document.querySelector('#registrationModal')
const RegistrationModalCloseButton = document.querySelector('#registrationModalCloseButton')
const haveAnAccount = document.querySelector('#haveAnAccount')

buttonRegistrationModalOpen.addEventListener('click', () => {
    RegistrationModal.classList.add('registration-modal__overflow_active')
    authModal.classList.remove('authorization-modal__overflow_active')
})
RegistrationModalCloseButton.addEventListener('click', () => {
    RegistrationModal.classList.remove('registration-modal__overflow_active')
})
haveAnAccount.addEventListener('click', () => {
    authModal.classList.add('authorization-modal__overflow_active')
    RegistrationModal.classList.remove('registration-modal__overflow_active')
})

console.log('aboba')