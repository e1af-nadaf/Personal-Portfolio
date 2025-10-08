document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.querySelector(".stars-container");

  function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");

    // Random start position in the upper half of the screen
    const startLeft = Math.random() * window.innerWidth;
    const startTop = Math.random() * (window.innerHeight / 2);

    // Random angle between 35° and 55°
    const angle = 35 + Math.random() * 20;

    meteor.style.left = `${startLeft}px`;
    meteor.style.top = `${startTop}px`;
    meteor.style.transform = `rotate(${angle}deg)`;

    // Random color for the meteor
    const colors = ["#fff8f2", "#ffd97d", "#fecde6"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    meteor.style.setProperty("--shooting-star", color);

    starsContainer.appendChild(meteor);

    setTimeout(() => meteor.remove(), 1500);
  }

  function spawnMeteors() {
    const count = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < count; i++) {
      setTimeout(createMeteor, i * 200);
    }
  }

  setInterval(() => {
    spawnMeteors();
  }, Math.random() * 1000 + 800);
});
