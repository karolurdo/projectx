let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode);
}

// keyUP - 38
// keyDown - 40

window.addEventListener('keydown', changeColor)