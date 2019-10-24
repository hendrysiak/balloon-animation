document.addEventListener("DOMContentLoaded", function() {
    const elements = [...document.querySelectorAll('.anim-bg')];

    document.addEventListener('mousemove', function(event) {
        const {
            clientX,
            clientY
        } = event;
        // half of element
        const centerX = window.innerHeight / 2;
        const centerY = window.innerWidth / 2;

        elements.forEach(element => {


            const ratioX = -element.getAttribute('ratioX');
            const ratioY = -element.getAttribute('ratioY');
            // calculate move
            const moveX = clientX - centerX
            const moveY = clientY - centerY

            element.style.transform = `translate(${moveX * ratioX}px, ${moveY * ratioY}px)`
        })
    })
})