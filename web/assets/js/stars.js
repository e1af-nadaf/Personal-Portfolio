const starsContainer = document.querySelector(".stars-container");
const numberOfStars = 300;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  //random position
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  //random size
  const size = Math.random() * 4 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.background = ["#fff8f2", "#ffd97d", "#fecde6"][
    Math.floor(Math.random() * 3)
  ];

  const duration = Math.random() * 3 + 1;
  star.style.animationDuration = duration + "s";

  starsContainer.appendChild(star);
}
