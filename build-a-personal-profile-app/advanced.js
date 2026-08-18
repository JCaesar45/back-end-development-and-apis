// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});
// Custom Cursor
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursor-follower");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  }, 100);
});
// Hide cursor on touch devices
if ("ontouchstart" in window) {
  cursor.style.display = "none";
  cursorFollower.style.display = "none";
}
// Particle System
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 20 + "s";
  particle.style.animationDuration = 15 + Math.random() * 10 + "s";
  document.getElementById("particles").appendChild(particle);
  setTimeout(() => {
    particle.remove();
  }, 25000);
}
// Create particles periodically
setInterval(createParticle, 500);
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)";
    navbar.style.boxShadow = "0 5px 20px rgba(0, 255, 136, 0.1)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
    navbar.style.boxShadow = "none";
  }
});
// Loading animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1000);
});
// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);
// Observe all project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});
// Dynamic skill tags animation
const skillTags = document.querySelectorAll(".skill-tag");
skillTags.forEach((tag, index) => {
  tag.style.animationDelay = `${index * 0.1}s`;
  tag.classList.add("animate-in");
});
// Add CSS for skill tag animation
const style = document.createElement("style");
style.textContent = `
            @keyframes skillFadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
            }
            
            .animate-in {
                animation: skillFadeIn 0.6s ease-out forwards;
            }
        `;
document.head.appendChild(style);
// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
// Add hover sound effect (optional - requires audio file)
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    // Add subtle hover effect
    card.style.transform = "translateY(-10px) scale(1.02)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});
// Typing effect for hero subtitle
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
// Initialize typing effect
setTimeout(() => {
  const heroP = document.querySelector(".hero p");
  if (heroP) {
    typeWriter(heroP, "Frontend Developer | Copywriter | Content Creator", 100);
  }
}, 1500);
// Console easter egg
console.log(
  "%c🚀 Welcome to Jordan Leturgez Portfolio!",
  "color: #00ff88; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c💡 Check out the source code and projects!",
  "color: #3a86ff; font-size: 14px;"
);
console.log(
  "%c🔗 Connect on LinkedIn: Jordan Leturgez",
  "color: #ff006e; font-size: 14px;"
);
console.log(
  "%c🎯 Ready to build something amazing together?",
  "color: #00ff88; font-size: 16px; font-weight: bold;"
);
// Performance optimization - lazy loading images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });
  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });
}
// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "j") {
    e.preventDefault();
    window.scrollBy(0, window.innerHeight);
  } else if (e.key === "ArrowUp" || e.key === "k") {
    e.preventDefault();
    window.scrollBy(0, -window.innerHeight);
  }
});
// Dynamic theme switching (bonus feature)
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue("--dark-bg") === "#0a0a0a";
  if (isDark) {
    root.style.setProperty("--dark-bg", "#f5f5f5");
    root.style.setProperty("--dark-secondary", "#ffffff");
    root.style.setProperty("--text-light", "#333333");
    root.style.setProperty("--text-gray", "#666666");
  } else {
    root.style.setProperty("--dark-bg", "#0a0a0a");
    root.style.setProperty("--dark-secondary", "#1a1a1a");
    root.style.setProperty("--text-light", "#ffffff");
    root.style.setProperty("--text-gray", "#b0b0b0");
  }
}
// Add theme toggle button (hidden by default - can be activated with Ctrl+Shift+T)
let themeToggleAdded = false;
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === "T") {
    if (!themeToggleAdded) {
      const themeBtn = document.createElement("button");
      themeBtn.innerHTML = "🌓 Toggle Theme";
      themeBtn.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        padding: 10px 20px;
                        background: var(--primary-color);
                        color: var(--dark-bg);
                        border: none;
                        border-radius: 25px;
                        cursor: pointer;
                        z-index: 1000;
                        font-weight: bold;
                        transition: all 0.3s ease;
                    `;
      themeBtn.onclick = toggleTheme;
      document.body.appendChild(themeBtn);
      themeToggleAdded = true;
    }
  }
});
