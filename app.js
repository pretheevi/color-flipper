const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = ''

function color(name){
    body.style.backgroundColor =name;
}
function randomColor(){
    const green = Math.round(Math.random()*255);
    const red = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const color = `rgb(${green},${red},${blue})`;
    body.style.backgroundColor = color;
}