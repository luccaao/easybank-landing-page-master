const hamb = document.getElementById('hamb');
const close = document.getElementById('close');
const menuMobile = document.querySelector('.menu-mobile');
const phones = document.querySelector('.phones');

hamb.addEventListener('click', () => {
    hamb.classList.add('active')
    close.style.display = 'block'
    menuMobile.classList.add('active')
    phones.style.display = 'none'

    close.addEventListener('click', () => {
        menuMobile.classList.remove('active')
        phones.style.display = 'block'
        close.style.display = 'none'
        hamb.classList.remove('active')
    })
    
})