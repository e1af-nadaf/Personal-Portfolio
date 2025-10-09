const timelineContents = document.querySelectorAll(".timeline-content");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  timelineContents.forEach((content) => {
    const contentTop = content.getBoundingClientRect().top;
    const contentBottom = content.getBoundingClientRect().bottom;

    if (contentTop < triggerBottom && contentBottom > 0) {
      // Reveal when in viewport
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    } else {
      // Hide when scrolled out
      content.style.opacity = "0";
      content.style.transform = "translateY(50px)";
    }
  });
});
