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

