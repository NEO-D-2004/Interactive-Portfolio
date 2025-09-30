VANTA.GLOBE({
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

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animate");
    } else {
      entry.target.classList.remove("show-animate");
    }
  });
});

const hiddenElements = document.querySelectorAll(".about-container");
hiddenElements.forEach((el) => observer.observe(el));
