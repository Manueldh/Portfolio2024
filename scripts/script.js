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
});

const body = document.querySelector('body');
const darkModeBtn = document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click', toggleDarkMode);

const savedTheme = localStorage.getItem('data-theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleDarkMode() {
    let dataTheme = body.getAttribute('data-theme');
    
    if (dataTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}





const tl = gsap.timeline();


function startLoader() {
    let counterElement = document.querySelector('.counter');
    let currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100) {
          return;
        }
        currentValue += Math.floor(Math.random() * 10);

        if (currentValue > 100) {
          currentValue = 100;
        }

        counterElement.textContent = currentValue + '%';

        let delay = Math.floor(Math.random() * 200);
        setTimeout(updateCounter, delay);
    }

    updateCounter();
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

