/**
 * Changes the text content of an element based on the input value
 * Anonymous is displayed if the input value is empty
 * @param selectorToListen - selector of the input element
 * @param selectorToUpdate - selector of the element to update
 */
function updateNameOutput(selectorToListen, selectorToUpdate) {
    const nameInput = document.querySelector(selectorToListen);
    const nameOutput = document.querySelector(selectorToUpdate);

    nameInput.addEventListener('input', (event) => {
        const trimmedValue = event.target.value.trim();

        nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
    });
}

updateNameOutput('#name-input', '#name-output');