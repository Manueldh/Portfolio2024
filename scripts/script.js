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


document.addEventListener('DOMContentLoaded', function() { 
    const movementStrength = 100;
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;

    document.querySelectorAll('.interactiveContainer').forEach(function(container) {
        container.addEventListener('mousemove', function(e) {
            let pageX = e.pageX - (window.innerWidth / 2);
            let pageY = e.pageY - (window.innerHeight / 2);
            let newvalueX = width * pageX * -1 - 25;
            let newvalueY = height * pageY * -1 - 50 + 100;
            container.querySelector('.interactiveCard img').style.transform = "translate(" + newvalueX + "px, " + newvalueY + "px)";
        });
    });

    const cursor = document.createElement('img');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const projectElements = document.querySelectorAll('.projects a');
    projectElements.forEach(project => {
        const image = project.querySelector('.project-img');
    
        project.addEventListener('mouseenter', function() {
            cursor.src = image.src;
            cursor.style.visibility = 'visible';
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        project.addEventListener('mouseleave', function() {
            cursor.style.visibility = 'hidden';
            cursor.style.transform = 'translate(-50%, -50%) scale(.1)';
        });

        project.addEventListener('mousemove', function(event) {
            let x = event.clientX;
            let y = event.clientY;

            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        });
    });
})
