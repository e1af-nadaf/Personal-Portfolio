const overlay = document.querySelector(".section-overlay");
const hero = document.querySelector(".hero");
const about = document.querySelector(".about");
const scrollArrow = document.querySelector(".scroll-down");

let lastScrollY = 0; // track previous scroll position

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Only trigger blackout effect when scrolling down
  if (currentScrollY > lastScrollY) {
    const heroRect = hero.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();

    if (heroRect.bottom > 0 && heroRect.top < 0) {
      const scrolled = Math.min(
        Math.abs(heroRect.top) / (hero.offsetHeight * 0.8),
        1
      );
      overlay.style.opacity = scrolled;
    } else if (aboutRect.top <= 0) {
      overlay.style.opacity = 0;
    }
  } else {
    // Scrolling up → blackout off
    overlay.style.opacity = 0;
  }

  lastScrollY = currentScrollY;
});

// 🌟 Click on scroll arrow → slower, longer blackout
if (scrollArrow) {
  scrollArrow.addEventListener("click", (e) => {
    e.preventDefault();

    // Fade in blackout slowly
    overlay.style.transition = "opacity 1.6s ease";
    overlay.style.opacity = 1;

    // Smooth scroll to About
    about.scrollIntoView({ behavior: "smooth" });

    // Linger, then fade out slowly
    setTimeout(() => {
      overlay.style.transition = "opacity 1.6s ease";
      overlay.style.opacity = 0;
    }, 900);
  });
}
