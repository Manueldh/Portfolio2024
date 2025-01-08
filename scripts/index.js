document.addEventListener('DOMContentLoaded', function() {

    const interactiveDots = document.querySelectorAll('.interactiveDot');

    interactiveDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const card = dot.nextElementSibling; // Veronderstelt dat .interactiveCard direct na .interactiveDot komt
            if (card && card.classList.contains('interactiveCard')) {
                card.style.visibility = 'visible';
                card.style.zIndex = 15;
                card.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    });

    const interactiveImg = document.querySelectorAll('.interactiveCard img');
    
    interactiveImg.forEach(img => {
        const interactiveCard = img.parentElement
        img.addEventListener('click', function() {
            if (interactiveCard.visibility = 'visible') {
                console.log('test')
                interactiveCard.style.visibility = 'hidden';
                interactiveCard.style.zIndex = 0;
                interactiveCard.style.transform = 'translate(-50%, -50%) scale(.01)';
            }
        })
    })

});



const hasVisitedHome = sessionStorage.getItem('hasVisitedHome');

if (!hasVisitedHome) {
    startLoader()

    const tl = gsap.timeline()

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
        duration: 1.5,
        delay: .25,
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

    sessionStorage.setItem('hasVisitedHome', true)
} else {
    // document.querySelector('body').classList.remove('isLoading')
    const tl = gsap.timeline()
    
    .to(".counter",{
        opacity: 0,
        width: 1,
        left: 0,
        duration: .00001,
        delay: .00001,
        ease: Power4.easeInOut
    })
    .to(".loader",{
        height: 0,
        duration: 1,
        delay: .25,
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
        duration: .5,
        ease: Power4.easeInOut
    })
    .to(".hero",{
        transform: "translateY(0)",
        opacity: 1,
        duration: .75,
        ease: Power4.easeInOut,
    })
    .to(".projects",{
        transform: "translateY(0)",
        opacity: 1,
        duration: .75,
        ease: Power4.easeInOut,
        onComplete: () => document.querySelector('body').classList.remove('isLoading')
    })
}


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
