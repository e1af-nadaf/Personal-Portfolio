document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("constellation-canvas");
  const ctx = canvas.getContext("2d");
  const tooltip = document.getElementById("tooltip");

  const popup = document.getElementById("project-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const popupLink = document.getElementById("popup-link");
  const popupClose = document.getElementById("popup-close");

  const numDots = 50;
  const numProjectDots = 7;
  const margin = 50; // distance from edges
  const projectMargin = 100; // project dots further inside middle

  const projects = [
    { name: "EspressoEase", description: "Cafe management system.", link: "#" },
    { name: "Simon Says", description: "Memory game.", link: "#" },
    { name: "Portfolio", description: "Portfolio website.", link: "#" },
    { name: "Calculator", description: "Calculator app.", link: "#" },
    { name: "ToDo List", description: "Todo app.", link: "#" },
    { name: "Weather", description: "Weather app.", link: "#" },
    { name: "Quiz", description: "Quiz app.", link: "#" },
  ];

  const dots = [];

  // project dots (inside middle)
  for (let i = 0; i < numProjectDots; i++) {
    const x =
      projectMargin + Math.random() * (canvas.offsetWidth - 2 * projectMargin);
    const y =
      projectMargin + Math.random() * (canvas.offsetHeight - 2 * projectMargin);
    dots.push({ x, y, isProject: true, projectData: projects[i] });
  }

  // normal dots (inside middle)
  for (let i = numProjectDots; i < numDots; i++) {
    const x = margin + Math.random() * (canvas.offsetWidth - 2 * margin);
    const y = margin + Math.random() * (canvas.offsetHeight - 2 * margin);
    dots.push({ x, y, isProject: false, projectData: null });
  }

  function drawConnections() {
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1;
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 180) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function drawDots() {
    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.isProject ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = dot.isProject ? "#FFD700" : "#fff";
      ctx.fill();
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    drawDots();
  }

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    render();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // tooltip hover
  canvas.addEventListener("mousemove", (e) => {
    let found = false;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    dots.forEach((dot) => {
      if (dot.isProject) {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        if (Math.sqrt(dx * dx + dy * dy) < 8) {
          tooltip.style.display = "block";
          tooltip.style.left = e.clientX + 12 + "px";
          tooltip.style.top = e.clientY + 12 + "px";
          tooltip.innerHTML = `<strong>${dot.projectData.name}</strong><br>${dot.projectData.description}<br><a href="${dot.projectData.link}" target="_blank">View on GitHub</a>`;
          found = true;
        }
      }
    });

    if (!found) tooltip.style.display = "none";
  });

  canvas.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  // click to popup
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    dots.forEach((dot) => {
      if (dot.isProject) {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        if (Math.sqrt(dx * dx + dy * dy) < 8) {
          // show popup
          popup.style.display = "flex";
          popupTitle.innerText = dot.projectData.name;
          popupDescription.innerText = dot.projectData.description;
          popupLink.href = dot.projectData.link;
        }
      }
    });
  });

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
});
