function showSection(id) {
  // hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });

  // show the chosen one
  document.getElementById(id).classList.add("active");
}

// Show "about" by default
document.addEventListener("DOMContentLoaded", () => {
  showSection("start");
});
