document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("constellation-canvas");
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height =
    document.querySelector(".projects").offsetHeight);

  const dots = [
    { x: 100, y: 150, name: "Project 1", color: "orange" },
    { x: 300, y: 200, name: "Project 2", color: "orange" },
    { x: 500, y: 100, name: "Project 3", color: "orange" },
    { x: 700, y: 250, name: "Project 4", color: "orange" },
    { x: 900, y: 150, name: "Project 5", color: "orange" },
  ];

  // Some background stars
  const backgroundStars = [];
  for (let i = 0; i < 100; i++) {
    backgroundStars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
    });
  }

  // Tooltip
  const tooltip = document.createElement("div");
  tooltip.style.position = "absolute";
  tooltip.style.padding = "6px 12px";
  tooltip.style.background = "rgba(255,255,255,0.9)";
  tooltip.style.color = "#000";
  tooltip.style.borderRadius = "6px";
  tooltip.style.fontFamily = "Poppins, sans-serif";
  tooltip.style.pointerEvents = "none";
  tooltip.style.opacity = 0;
  tooltip.style.transition = "opacity 0.3s";
  document.body.appendChild(tooltip);

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // draw background stars
    backgroundStars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    });

    // draw connections
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.3)";
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    // draw project dots
    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
      ctx.closePath();
    });
  }

  draw();

  // Hover tooltip
  canvas.addEventListener("mousemove", (e) => {
    let found = false;
    dots.forEach((dot) => {
      const dx = e.clientX - dot.x;
      const dy = e.clientY - dot.y;
      if (Math.hypot(dx, dy) < 8) {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
        tooltip.textContent = dot.name;
        tooltip.style.opacity = 1;
        found = true;
      }
    });
    if (!found) tooltip.style.opacity = 0;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.querySelector(".projects").offsetHeight;
    draw();
  });
});
