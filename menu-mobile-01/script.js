const button = document.querySelector('.js-button')
const navbar = document.querySelector('.js-navbar')
const links = document.querySelectorAll('.js-navbar__item')

links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('navbar-main--show')
    })
})

button.addEventListener('click', () => {
    navbar.classList.toggle('navbar-main--show')
})