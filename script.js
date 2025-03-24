//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            // Allow only numbers
            if (!/^\d$/.test(e.data)) {
                input.value = "";
                return;
            }

            // Move to the next input if a number is entered
            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                input.value = ""; // Clear the input first
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        input.addEventListener("focus", () => {
            input.setSelectionRange(0, 1); // Ensures proper cursor position
        });
    });

    // Auto-focus first input on page load
    inputs[0].focus();
});
