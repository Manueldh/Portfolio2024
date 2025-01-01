document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('data-theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
})

const tl = gsap.timeline()

tl
.to(".transitionLoader", {
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
.to ("header", { 
    transform: "translateY(0)",
    opacity: 1,
    duration: .5,
    ease: Power4.easeInOut
})
.to (".projects",{
    transform: "translateY(0)",
    opacity: 1,
    duration: .1,
    ease: Power4.easeInOut,
})
