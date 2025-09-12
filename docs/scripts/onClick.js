function showSection(id) {
  // hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });

  // show the chosen one
  document.getElementById(id).classList.add("active");
}

function changeColor(color) {
  if (color !== 'rainbow') {
    window.finalSettings.color = window.colors[color];
    window.colorIsRainbow = false;
    return;
  }

  window.colorIsRainbow = true;
}

// Show "start" by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("start");
});

document.addEventListener("DOMContentLoaded", () => {
  // handle dropdowns (supports multiple)
  document.querySelectorAll(".dropdown").forEach(drop => {
    const btn = drop.querySelector(".dropbtn");
    const menu = drop.querySelector(".dropdown-content");

    // toggle open/close
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't let document click immediately close it
      drop.classList.toggle("active");
    });

    // handle clicks inside menu links (prevent page jump and close dropdown)
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();   // prevent href="#" jump
        e.stopPropagation();  // don't let document click handler immediately close twice
        drop.classList.remove("active");

        // optional: if you use data attributes for action (eg changeColor)
        const color = link.dataset.color;
        if (color && typeof window.changeColor === "function") {
          window.changeColor(color);
        }
      });
    });
  });

  // close any open dropdown when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.active").forEach(d => d.classList.remove("active"));
  });
});

// konami code hehe

document.addEventListener("DOMContentLoaded", () => {
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight"
  ];
  let current = 0;

  const secretSound = new Audio("sounds/scream.mp3");
  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[current]) {
      current++;
      if (current === konamiCode.length) {
        current = 0;
        secretSound.play();
      }
    } else {

    }
  });
});