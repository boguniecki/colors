const background = document.getElementById("wrapper");
const colors = ["red", "green", "blue"];
let color = colors[Math.floor(Math.random() * colors.length)];

function changeColor() {

    background.style.backgroundColor = color;
}