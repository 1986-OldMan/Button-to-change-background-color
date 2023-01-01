document.querySelector('.btn');
addEventListener('click', colorBackground);

function colorBackground() {

    let colors = ['blue', 'purple', 'orange', 'green', 'brown', 'gray', 'yellow', 'black'];


    let randomColor = Math.floor(Math.random() * 8);


    let x = document.querySelector('.x');

    x.style.backgroundColor = colors[randomColor]
}