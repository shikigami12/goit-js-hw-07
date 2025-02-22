function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

/**
 * Function to change body color on button click
 * and show the color in the span element
 * @param selectorToListen - selector of the button to listen for click
 * @param selectorToShowText - selector of the span element to show the color
 */
function changeBodyColorOnClick(selectorToListen, selectorToShowText) {
    const button = document.querySelector(selectorToListen);
    const span = document.querySelector(selectorToShowText);

    button.addEventListener('click', () => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
        span.textContent = color;
    });
}

changeBodyColorOnClick('.change-color', '.color');
