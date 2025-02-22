function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

/**
 * Function to generate boxes with random background color
 * @param amount - number of boxes to generate
 * @param selector - selector of the parent element
 */
function generateBoxes(amount, selector) {
    const parent = document.querySelector(selector);
    const fragments = [];
    const size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size + i * 10}px`;
        div.style.height = `${size + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        fragments.push(div);
    }

    parent.append(...fragments);
}

/**
 * Function to destroy all boxes in the parent element
 * @param selector - selector of the parent element
 */
function destroyBoxes(selector) {
    const parent = document.querySelector(selector);
    parent.innerHTML = '';
}

/**
 * Function to initialize the boxes
 * and add event listeners to the buttons
 * to create and destroy boxes
 */
function initBoxes() {
    const boxesSelector = '#boxes';
    const controls = document.querySelector('#controls');
    const input = controls.querySelector('input');
    // get buttons by data attribute
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');

    createButton.addEventListener('click', () => {
        if (input.value >= 1 && input.value <= 100) {
            destroyBoxes(boxesSelector);
            generateBoxes(input.value, boxesSelector);
            return;
        }

        alert('Please enter a number between 1 and 100');
        input.value = '';
    });

    destroyButton.addEventListener('click', () => destroyBoxes(boxesSelector));
}

initBoxes();