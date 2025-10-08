const overlay = document.querySelector(".section-overlay");
let isScrolling = false;

window.addEventListener("wheel", (e) => {
  // Only trigger on scroll down
  if (isScrolling || e.deltaY <= 0) return;
  isScrolling = true;

  overlay.style.opacity = 1; // fade in blackout

  setTimeout(() => {
    const sections = document.querySelectorAll("section");
    const currentIndex = Array.from(sections).findIndex(
      (s) => s.getBoundingClientRect().top >= 0
    );

    const nextIndex = Math.min(currentIndex + 1, sections.length - 1); // move only down
    sections[nextIndex].scrollIntoView({ behavior: "smooth" });

    overlay.style.opacity = 0; // fade out blackout
    isScrolling = false;
  }, 400); // matches CSS transition duration
});
