document.addEventListener("DOMContentLoaded", () => {
    const typingElements = document.querySelectorAll(".typing");

    typingElements.forEach((typingElement) => {
        const messages = null;
        let msgIndex;
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
            let currentMsg;
            if (typeElement.id === "spec") {
                currentMsg = ["Welcome!", "Have a nice stay!", "Enjoy!"];
                msgIndex = 0;
            } else {
                currentMsg = typingElement.innerText;
            }

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
                    if (msgIndex) msgIndex = (msgIndex + 1) % messages.length;
                }
            }

            setTimeout(type, deleting ? 50 : 100);
        }

        type();
    });
});