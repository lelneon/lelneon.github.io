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

    btn.addEventListener("mouseenter", () => {
      drop.classList.add("active");
    });

    // close when mouse leaves the whole dropdown
    drop.addEventListener("mouseleave", () => {
      drop.classList.remove("active");
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

const go = () => {
  const sound = new Audio("sounds/radiance/scream.mp3");

  // Try to play immediately
  sound.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });

  // Show confirm after a tiny delay to ensure sound starts
  setTimeout(() => {
    const confirmed = confirm("The Radiance calls for you. Venture to Hallownest?");
    if (confirmed) {
      showSection("hehe");
    }
  }, 50); // 50ms delay
};

document.addEventListener("DOMContentLoaded", () => {
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight"
  ];
  let current = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[current]) {
      current++;
      if (current === konamiCode.length) {
        current = 0;
        go();
      }
    } else {
      current = 0;
    }
  });
});

function playPortal() {
  const sounds = {
    glados1: new Audio('sounds/glados/glados1.wav'),
    glados2: new Audio('sounds/glados/glados2.wav'),
    glados3: new Audio('sounds/glados/glados3.wav'),
    glados4: new Audio('sounds/glados/glados4.wav'),
    glados5: new Audio('sounds/glados/glados5.wav'),
    glados6: new Audio('sounds/glados/glados6.wav'),
    glados7: new Audio('sounds/glados/glados7.wav'),
    glados8: new Audio('sounds/glados/glados8.wav'),
    glados9: new Audio('sounds/glados/glados9.wav'),
    glados10: new Audio('sounds/glados/glados10.wav'),
    glados11: new Audio('sounds/glados/glados11.wav'),
    glados12: new Audio('sounds/glados/glados12.wav'),
    glados13: new Audio('sounds/glados/glados13.wav'),
    glados14: new Audio('sounds/glados/glados14.wav'),
    glados15: new Audio('sounds/glados/glados15.wav'),
    glados16: new Audio('sounds/glados/glados16.wav'),
    glados17: new Audio('sounds/glados/glados17.wav'),
    glados18: new Audio('sounds/glados/glados18.wav'),
    glados19: new Audio('sounds/glados/glados19.wav'),
    glados20: new Audio('sounds/glados/glados20.wav'),
    glados21: new Audio('sounds/glados/glados21.wav'),
    glados22: new Audio('sounds/glados/glados22.wav'),
    wheatley1: new Audio('sounds/wheatley/wheatley1.wav'),
    wheatley2: new Audio('sounds/wheatley/wheatley2.wav'),
    wheatley3: new Audio('sounds/wheatley/wheatley3.wav'),
    wheatley4: new Audio('sounds/wheatley/wheatley4.wav'),
    wheatley5: new Audio('sounds/wheatley/wheatley5.wav'),
    wheatley6: new Audio('sounds/wheatley/wheatley6.wav'),
    wheatley7: new Audio('sounds/wheatley/wheatley7.wav'),
    wheatley8: new Audio('sounds/wheatley/wheatley8.wav'),
    wheatley9: new Audio('sounds/wheatley/wheatley9.wav'),
    wheatley10: new Audio('sounds/wheatley/wheatley10.wav'),
    wheatley11: new Audio('sounds/wheatley/wheatley11.wav'),
    wheatley12: new Audio('sounds/wheatley/wheatley12.wav'),
    wheatley13: new Audio('sounds/wheatley/wheatley13.wav'),
    wheatley14: new Audio('sounds/wheatley/wheatley14.wav'),
    wheatley15: new Audio('sounds/wheatley/wheatley15.wav'),
    wheatley16: new Audio('sounds/wheatley/wheatley16.wav'),
    wheatley17: new Audio('sounds/wheatley/wheatley17.wav'),
    wheatley18: new Audio('sounds/wheatley/wheatley18.wav'),
    wheatley19: new Audio('sounds/wheatley/wheatley19.wav'),
    wheatley20: new Audio('sounds/wheatley/wheatley20.wav'),
    wheatley21: new Audio('sounds/wheatley/wheatley21.wav'),
    wheatley22: new Audio('sounds/wheatley/wheatley22.wav'),
    wheatley23: new Audio('sounds/wheatley/wheatley23.wav'),
    wheatley24: new Audio('sounds/wheatley/wheatley24.wav'),
    wheatley25: new Audio('sounds/wheatley/wheatley25.wav'),
    wheatley26: new Audio('sounds/wheatley/wheatley26.wav'),
    wheatley27: new Audio('sounds/wheatley/wheatley27.wav'),
    wheatley28: new Audio('sounds/wheatley/wheatley28.wav'),
    wheatley29: new Audio('sounds/wheatley/wheatley29.wav'),
    wheatley30: new Audio('sounds/wheatley/wheatley30.wav'),
    wheatley31: new Audio('sounds/wheatley/wheatley31.wav'),
    wheatley32: new Audio('sounds/wheatley/wheatley32.wav'),
    wheatley33: new Audio('sounds/wheatley/wheatley33.wav'),
    wheatley34: new Audio('sounds/wheatley/wheatley34.wav'),
    wheatley35: new Audio('sounds/wheatley/wheatley35.wav'),
    turret1: new Audio('sounds/turret/turret1'),
    turret2: new Audio('sounds/turret/turret2'),
    turret3: new Audio('sounds/turret/turret3'),
    turret4: new Audio('sounds/turret/turret4'),
    turret5: new Audio('sounds/turret/turret5'),
    turret6: new Audio('sounds/turret/turret6'),
    turret7: new Audio('sounds/turret/turret7'),
    turret8: new Audio('sounds/turret/turret8'),
    turret9: new Audio('sounds/turret/turret9'),
    turret10: new Audio('sounds/turret/turret10'),
    turret11: new Audio('sounds/turret/turret11'),
    turret12: new Audio('sounds/turret/turret12'),
    turret13: new Audio('sounds/turret/turret13'),
    turret14: new Audio('sounds/turret/turret14'),
    turret15: new Audio('sounds/turret/turret15'),
    turret16: new Audio('sounds/turret/turret16'),
    turret17: new Audio('sounds/turret/turret17'),
    turret18: new Audio('sounds/turret/turret18'),
    turret19: new Audio('sounds/turret/turret19'),
    turret20: new Audio('sounds/turret/turret20'),
    turret21: new Audio('sounds/turret/turret21'),
    turret22: new Audio('sounds/turret/turret22'),
    turret23: new Audio('sounds/turret/turret23'),
    turret24: new Audio('sounds/turret/turret24'),
    turret25: new Audio('sounds/turret/turret25'),
    turret26: new Audio('sounds/turret/turret26'),
    turret27: new Audio('sounds/turret/turret27'),
    turret28: new Audio('sounds/turret/turret28'),
    turret29: new Audio('sounds/turret/turret29'),
    turret30: new Audio('sounds/turret/turret30'),
  };

  soundsArray = Object.values(sounds);
  let randSound = soundsArray[Math.floor(Math.random() * soundsArray.length)];

  randSound.play();
}

document.addEventListener("DOMContentLoaded", () => {
  const code = [
    "p", "o", "r", "t", "a", "l",
  ];
  let current = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === code[current]) {
      current++;
      if (current === code.length) {
        current = 0;
        playPortal();
      }
    } else {
      current = 0;
    }
  });
});