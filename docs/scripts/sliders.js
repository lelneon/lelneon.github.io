document.addEventListener("DOMContentLoaded", () => {
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
        maxParticlesVal.textContent = maxParticlesSlider.value;
    });

    window.finalSettings = {
        get size() {
        return parseInt(sizeSlider?.value ?? "100", 10);
        },
        get speed() {
        return parseInt(speedSlider?.value ?? "100", 10);
        },
        get maxParticles() {
        return parseInt(maxParticlesSlider?.value ?? "350", 10);
        },
        get color() {
        return "";
        },
    };
});