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

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // Scrolling up
        header.classList.add('sticky');
    } else {
        // Scrolling down
        header.classList.remove('sticky');
    }

    lastScrollTop = scrollTop;
});


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
