const background = document.body;
const text = document.getElementById("kolor");

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = 'rgb('+ red +', '+ green +', '+ blue +')'; 

    background.style.backgroundColor = color;
    text.innerHTML = "<p>" + color + "</p>";
}   