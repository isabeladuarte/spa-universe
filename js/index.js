import { Router } from './router.js' // Importando classe router

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// Buttons
const buttonHome = document.querySelector('.home')
const buttonUniverse = document.querySelector('.universe')
const buttonExploration = document.querySelector('.exploration')

buttonHome.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./assets/background.svg')"
    buttonHome.classList.add('active')
    buttonUniverse.classList.remove('active')
    buttonExploration.classList.remove('active')
})

buttonUniverse.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./assets/background-universe.svg')"
    buttonUniverse.classList.add('active')
    buttonHome.classList.remove('active')
    buttonExploration.classList.remove('active')
})

buttonExploration.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('./assets/background-exploration.svg')"
    buttonExploration.classList.add('active')
    buttonHome.classList.remove('active')
    buttonUniverse.classList.remove('active')
})
