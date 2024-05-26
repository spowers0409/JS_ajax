function getRandomColor() {
    const letters = '0123456789ABFDEC'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const paragraph = document.getElementById('myParagraph');
    const randomColor = getRandomColor();
    paragraph.style.backgroundColor = randomColor;
}

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