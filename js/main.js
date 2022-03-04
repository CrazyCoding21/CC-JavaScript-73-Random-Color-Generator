for(let i = 1; i <= 100; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    document.querySelector('.container').appendChild(colorBox)
}

const btn = document.querySelector('.btn');
const randomColorBox = document.querySelectorAll('.color-box');

function randomColorGenerator(){
    var chars = "0123456789abcdef";
    var colorLength = 6;
    var color = "";

    for(var i = 0; i < colorLength; i++){
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor+1);
    }
    return "#"+color;
}

function addColor(){
    randomColorBox.forEach(e => {
        var newColor = randomColorGenerator();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    });
}