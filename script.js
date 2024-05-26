/* Function to create a random hexadecimal color */
function getRandomColor() {
    const letters = '0123456789ABFDEC'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* Function to change the paragraph background color to a random color*/
function changeBackgroundColor() {
    const paragraph = document.getElementById('myParagraph');
    const randomColor = getRandomColor();
    paragraph.style.backgroundColor = randomColor;
}

/* Function to add a new row of 3 input box tables */
/* Each input box will display 'Input #' */
function addTableRow() {
    const table = document.getElementById('myTable');

    const newRow = table.insertRow();

    for (let i = 0; i < 3; i++) {
        const newCell = newRow.insertCell();
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Input ${i + 1}`;
        newCell.appendChild(input);
    }
}

/* Function to validate if input is an actual number */ 
function isNumber(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
}

/* Function will take input, validate results, and then display results */
/* If results are a number show green text */
/* If results are not a number, show red text */
function validateInput() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');
    
    if (isNumber(input)) {
        result.textContent = `${input} is a valid number.`;
        result.style.color = 'green';
    } else {
        result.textContent = `${input} is not a valid number.`;
        result.style.color = 'red';
    }
}

/* Function to clear input to enter in new number for results */
function clearResults() {
    const result = document.getElementById('result');
    const input = document.getElementById('numberInput');

    result.textContent = '';
    input.value = '';
}

/* Listner to capture click event  */
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        alert('Click!');

        fetch('github.com/spowers0409/JS_ajax', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error', error));
    });
});

/* Create a button class and event listener to direct to Github page */
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.createElement('button');
    button.classList.add('github-button');

    const img = document.createElement('img');
    img.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
    img.alt = 'Github';

    button.appendChild(img);

    button.addEventListener('click', () => {
        window.location.href = 'https://github.com/spowers0409/JS_ajax';
    });
    document.body.appendChild(button)
});