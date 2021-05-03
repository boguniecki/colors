const background = document.getElementById("wrapper");
const colors = ["red", "green", "blue"];

function changeColor() {    
    let color = colors[Math.floor(Math.random() * colors.length)];
    
    background.style.backgroundColor = color;
}