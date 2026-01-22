// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (nav) {
    if (currentScroll > 100) {
      nav.style.background = 'rgba(10, 14, 39, 0.98)';
      nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.background = 'rgba(10, 14, 39, 0.95)';
      nav.style.boxShadow = 'none';
    }
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(section);
});

// Observe project cards with staggered animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
  observer.observe(card);
});

// Observe skill categories with staggered animation
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
  category.style.opacity = '0';
  category.style.transform = 'translateY(30px)';
  category.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
  observer.observe(category);
});

// Handle profile image loading
const profileImg = document.getElementById('profileImg');
const placeholder = document.querySelector('.image-placeholder');

if (profileImg) {
  profileImg.addEventListener('load', () => {
    profileImg.classList.add('loaded');
    if (placeholder) placeholder.style.display = 'none';
  });

  profileImg.addEventListener('error', () => {
    if (placeholder) placeholder.style.display = 'flex';
  });
}

// Add hover effect to contact methods
const contactMethods = document.querySelectorAll('.contact-method');
contactMethods.forEach(method => {
  method.addEventListener('mouseenter', function () {
    this.style.background = 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(108, 92, 231, 0.1))';
  });

  method.addEventListener('mouseleave', function () {
    this.style.background = '';
  });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = 'var(--color-primary)';
    }
  });
});

// Typing effect to hero subtitle
const heroTitle = document.querySelector('.hero-subtitle');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 1000);
}

// Cursor follower effect
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 212, 170, 0.5);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.15s ease-out;
  display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.display = 'block';
  cursor.style.left = (e.clientX - 10) + 'px';
  cursor.style.top = (e.clientY - 10) + 'px';
});

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

// Click ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      left: ${x}px;
      top: ${y}px;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Add CSS animation for ripple
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Console message
console.log('%c👋 Hi there!', 'font-size: 24px; color: #00D4AA; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'font-size: 14px; color: #A5B4CB;');
console.log('%cBuilt with ❤️ by Kandkkekaar Sai Tej', 'font-size: 12px; color: #6C7A96;');
