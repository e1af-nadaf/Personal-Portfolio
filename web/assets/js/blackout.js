document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".section-overlay");
  const hero = document.querySelector(".hero");
  const aboutTitle = document.querySelector(".about .section-title");
  const scrollArrow = document.querySelector(".hero .cta-btn");

  if (!overlay || !hero || !aboutTitle) return;

  // Force overlay full screen and above all
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(255, 255, 255, 1)";
  overlay.style.pointerEvents = "none";
  overlay.style.zIndex = "9999";
  overlay.style.opacity = "0";
  overlay.style.backdropFilter = "blur(0px)";
  overlay.style.transition = "opacity 0.6s ease, backdrop-filter 0.6s ease";

  function handleScroll() {
    const scrollY = window.scrollY;

    const fadeStart = 50; // start blackout after 50px scroll
    const fadeEnd = aboutTitle.getBoundingClientRect().top + scrollY - 100;

    if (scrollY > fadeStart && scrollY < fadeEnd) {
      let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      progress = Math.min(Math.max(progress, 0), 1);

      const eased = 1 - Math.pow(1 - progress, 2); // ease-out
      const opacity = 1 * (1 - eased);

      overlay.style.opacity = opacity.toString();
      overlay.style.backdropFilter = `blur(${4 * (1 - eased)}px)`;
    } else {
      overlay.style.opacity = "0";
      overlay.style.backdropFilter = "blur(0px)";
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // CTA button effect
  if (scrollArrow) {
    scrollArrow.addEventListener("click", (e) => {
      e.preventDefault();

      overlay.style.transition = "opacity 1s ease, backdrop-filter 1s ease";
      overlay.style.opacity = "0.9";
      overlay.style.backdropFilter = "blur(4px)";

      aboutTitle.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        overlay.style.opacity = "0";
        overlay.style.backdropFilter = "blur(0px)";
        setTimeout(() => {
          overlay.style.transition =
            "opacity 0.6s ease, backdrop-filter 0.6s ease";
        }, 600);
      }, 900);
    });
  }
});
