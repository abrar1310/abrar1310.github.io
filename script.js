// Scroll animations
const animatedElements = document.querySelectorAll('.animate');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.9;

    animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // لتفعيل العناصر الظاهرة أصلاً

// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
    "number": { "value": 50 },
    "size": { "value": 3 },
    "color": { "value": "#ff91b3" },
    "line_linked": { "enable": true, "distance": 120, "color": "#ffb6c1", "opacity": 0.4, "width": 1 },
    "move": { "speed": 2 }
    }
});
