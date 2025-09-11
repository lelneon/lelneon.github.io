sizeSlider = document.getElementById("sizeSlider");
sizeVal = document.getElementById("sizeSliderVal");

sizeSlider.addEventListener("input", () => {
    sizeVal.textContent = sizeSlider.value + "%";
});

speedSlider = document.getElementById("speedSlider");
speedVal = document.getElementById("speedSliderVal");

speedSlider.addEventListener("input", () => {
    speedVal.textContent = speedSlider.value + "%";
});

maxParticlesSlider = document.getElementById("maxParticlesSlider");
maxParticlesVal = document.getElementById("maxParticlesSliderVal");

maxParticlesSlider.addEventListener("input", () => {
    maxParticlesSliderVal.textContent = maxParticlesSlider.value;
});