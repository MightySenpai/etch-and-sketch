const root = document.querySelector('#root');
const createBoard = (dim) => {
    const board = document.createElement('div');
    board.id = "container"
    board.classList.add('container');

    for (let i = 0; i < dim; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < dim; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mouseover', changeColor)
            row.appendChild(square);
        }
        board.appendChild(row);
    }
    const oldContainer = document.getElementById('container');
    root.replaceChild(board, oldContainer);
}
button.addEventListener('click', (event) => {
    const dim = document.getElementById('newGrid').value;
    createBoard(dim);
})
const createRandomColor = () => `rgb(${Math.random()*255})`
const changeColor = (event) => {
    event.target.style.backgroundColor = rgbColor();
    event.target.removeEventListener('mouseover', changeColor)
    event.target.addEventListener('mouseover', darkenColor)
    // setTimeout(() => {
    //     event.target.style.backgroundColor = "white"
    // }, 100);
}
const rgbColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
const darkenColor = (event) => {
    console.log('hi im from darken')
    event.target.style.backgroundColor = '#' + "000000";
}
createBoard(16)