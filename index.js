const body = document.querySelector('body');
const createBoard = (dim) => {
    const container = document.createElement('div');
    container.id = "container"
    container.classList.add('container');
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red'
        setTimeout(() => {
            event.target.style.backgroundColor = "white"
        }, 100);
    })
    for (let i = 0; i < dim; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < dim; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    const oldContainer = document.getElementById('container');
    body.replaceChild(container, oldContainer);
}
button.addEventListener('click', (event) => {
    const dim = document.getElementById('newGrid').value;
    createBoard(dim);
})



createBoard(16)