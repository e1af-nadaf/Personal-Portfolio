document.addEventListener("DOMContentLoaded", () => {
  const starsContainers = document.querySelectorAll(".stars-container");
  const numberOfStars = 200; // per container

  starsContainers.forEach((container) => {
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      // Random position inside container
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      // Random size
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random opacity
      star.style.opacity = Math.random() * 0.8 + 0.2;

      container.appendChild(star);
    }
  });
});
