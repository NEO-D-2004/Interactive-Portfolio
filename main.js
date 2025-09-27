const vantaEffect = VANTA.GLOBE({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x0
})

// Highlight active nav link
const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


// Auto typing effect
const typed = new Typed('.auto-type', {
            strings: ['UI/UX Designing', 'FrontEnd Developer','Web Development','Graphic Designing'],
            typeSpeed: 90,
            backSpeed: 90,
            loop: true
            
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        vantaEffect.setOptions({
            color: 0x0,
            backgroundColor: 0xffffff
        });
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        vantaEffect.setOptions({
            color: 0xffffff,
            backgroundColor: 0x0
        });
    }
});
