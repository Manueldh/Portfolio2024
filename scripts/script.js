const body = document.querySelector('body')
const darkModeBtn = document.querySelector('#darkModeBtn')

darkModeBtn.addEventListener('click', toggleDarkMode)

const savedTheme = localStorage.getItem('data-theme')
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme)
}

function toggleDarkMode() {
    let dataTheme = body.getAttribute('data-theme')
    
    if (dataTheme === 'dark') {
        body.setAttribute('data-theme', 'light')
        localStorage.setItem('data-theme', 'light')
    } else {
        body.setAttribute('data-theme', 'dark')
        localStorage.setItem('data-theme', 'dark')
    }
}



const HamburgerBtn = document.querySelector('.hamburgerMenu')
let menuOpen = false

HamburgerBtn.addEventListener('click', () => {
    const header = document.querySelector('header')
    const dash1 = document.querySelector('.hamburgerMenu span:nth-child(1)')
    const dash2 = document.querySelector('.hamburgerMenu span:nth-child(2)')
    const dash3 = document.querySelector('.hamburgerMenu span:nth-child(3)')
    const nav = document.querySelector('nav')
    const navUl = document.querySelector('nav ul')
    const darkModeBtn = document.querySelector('#darkModeBtn')

    if(menuOpen === false){
        header.classList.add('burgerActive')
        HamburgerBtn.classList.add('closeBtn')
        dash1.classList.add('closeBtn-dash1')
        dash2.classList.add('closeBtn-dash2')
        dash3.classList.add('closeBtn-dash3')
        nav.style.display = 'flex'
        nav.style.transform = 'translateY(0)'
        navUl.style.display = 'flex'
        darkModeBtn.style.display = 'block'

        menuOpen = true
    } else if(menuOpen === true){
        header.classList.remove('burgerActive')
        HamburgerBtn.classList.remove('closeBtn')
        dash1.classList.remove('closeBtn-dash1')
        dash2.classList.remove('closeBtn-dash2')
        dash3.classList.remove('closeBtn-dash3')
        nav.style.display = 'none'
        nav.style.transform = 'translateY(-100%)'
        navUl.style.display = 'none'
        darkModeBtn.style.display = 'none'

        menuOpen = false
    }
})





const tl = gsap.timeline()


function startLoader() {
    let counterElement = document.querySelector('.counter')
    let currentValue = 0

    function updateCounter() {
        if (currentValue >= 100) {
          return
        }
        currentValue += Math.floor(Math.random() * 10)

        if (currentValue > 100) {
          currentValue = 100
        }

        counterElement.textContent = currentValue + '%'

        let delay = Math.floor(Math.random() * 200)
        setTimeout(updateCounter, delay)
    }

    updateCounter()
}

startLoader()

tl
.to(".counter",{
    opacity: 0,
    width: 1,
    left: 0,
    duration: 1,
    delay: 3,
    ease: Power4.easeInOut
})
.to(".loader",{
    height: 0,
    duration: .8,
    delay: .1,
    ease: Power4.easeInOut
})
.to("#loader-logo",{
    width: 0,
    margin: 0,
    duration: 1,
    delay: -1,
    ease: Power4.easeInOut
})
.to("header",{
    transform: "translateY(0)",
    opacity: 1,
    duration: .8,
    ease: Power4.easeInOut
})
.to(".hero",{
    transform: "translateY(0)",
    opacity: 1,
    duration: .8,
    ease: Power4.easeInOut,
})
.to(".projects",{
    transform: "translateY(0)",
    opacity: 1,
    duration: .8,
    ease: Power4.easeInOut,
    onComplete: () => document.querySelector('body').classList.remove('isLoading')
})

