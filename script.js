window.onload = function() {
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
    if (window.particlesJS) {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 50 },
          "size": { "value": 3 },
          "color": { "value": "#e85c8f" },
          "line_linked": { "enable": true, "distance": 120, "color": "#f8b1c8", "opacity": 0.4, "width": 1 },
          "move": { "speed": 2 }
        }
      });
    }
  };
  