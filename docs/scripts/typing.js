document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");
    const messages = ["Welcome to my corner!", "Have a nice stay!", "Enjoy!"]
    let msgIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let cursorInterval;

    typingElement.style.borderRight = "2px solid white";
    function startCursorBlink() {
        cursorInterval = setInterval(() => {
            typingElement.style.borderRight =
                typingElement.style.borderRight === "2px solid white"
                    ? "2px solid transparent"
                    : "2px solid white";
        }, 500);
    }

    function stopCursorBlink() {
        clearInterval(cursorInterval);
        typingElement.style.borderRight = "2px solid white";
    }

    function type() {
        const currentMsg = messages[msgIndex]

        if (!deleting) {
            typingElement.innerHTML = currentMsg.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentMsg.length) {
                startCursorBlink()
                deleting = true;
                setTimeout(type, 2500)
                return;
            }
        } else {
            stopCursorBlink()
            typingElement.innerHTML = currentMsg.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                msgIndex = (msgIndex + 1) % messages.length;
            }
        }

        setTimeout(type, deleting ? 50 : 100);
    }

    type();
});