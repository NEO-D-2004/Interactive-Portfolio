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

// Skill card flip animation
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  const cardInner = card.querySelector(".skill-card-inner");

  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      scale: 1.2,
      duration: 800,
      easing: 'easeOutSine'
    });
    anime({
      targets: cardInner,
      rotateY: '180deg',
      duration: 400,
      easing: 'easeInOutSine'
    });
  });

  card.addEventListener('mouseleave', () => {
    anime({
      targets: card,
      scale: 1.0,
      duration: 800,
      easing: 'easeInSine'
    });
    anime({
      targets: cardInner,
      rotateY: '0deg',
      duration: 200,
      easing: 'easeInOutSine'
    });
  });
});

// Project Modal
document.addEventListener('DOMContentLoaded', () => {
  // Contact Form
  (function(){
    emailjs.init("w7t25PbppwKbFSxbQ");
  })();

  const contactForm = document.querySelector('.contact-form form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.send("service_c2ks5y7", "template_ryj95x9", {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    })
    .then(function() {
      alert('Message sent successfully!');
      contactForm.reset();
    }, function(error) {
      alert('Message not sent.');
    });
  });

  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const closeButton = document.querySelector('.close-button');

  const projectData = {
    'Focalpoint Studio': {
      description: 'A photography studio website with a gallery and booking form.',
      link: '#'
    },
    'Campus Expert': {
      description: 'A platform for students to connect with campus experts.',
      link: '#'
    },
    'AiEdMate': {
      description: 'An AI-powered educational tool for students.',
      link: '#'
    }
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.project-title').textContent;
      const data = projectData[title];

      if (data) {
        modalTitle.textContent = title;
        modalDescription.textContent = data.description;
        modalLink.href = data.link;
        modal.style.display = 'block';
      }
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
