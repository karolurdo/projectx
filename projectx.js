let red = 100;
let green = 100;
let blue = 100;
let key = 0;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // gery backgroundColor

// // IF 
// const changeColor = (e) => {
//    console.log(e.keyCode); 
//    let key = e.keyCode;
// if (key === 38){
//     if (red < 255){
//      red = red + 10;
//      green = green + 10;
//     blue = blue + 10;
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }}
// if (key === 40){
//     if(red > 0){
//     red = red - 10;
//     green = green - 10;
//    blue = blue - 10;
//    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }}


// }

//SWITCH
const changeColor = (e) => {
switch (e.keyCode) {
    case 38:
        red++;
        green++;
        blue++;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        break;
    case 40:
        red--;
        green--;
        blue--;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        break;
}

}
// keyUP - 38
// keyDown - 40

window.addEventListener('keydown', changeColor);