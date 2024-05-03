let fractionBar = document.getElementById("bar");
let bar = fractionBar.getContext("2d");

let denominatorInput = document.getElementById("denominator");
let numeratorInput = document.getElementById("numerator");
let generateButton = document.getElementById("generate");
let debug = document.querySelector("#debug");

generateButton.addEventListener("click", function () {
    let numerator = parseInt(numeratorInput.value);
    let denominator = parseInt(denominatorInput.value);

    makeBar(numerator, denominator);
});

function makeBar(numerator, denominator) {
    if (numerator > denominator) {
        return alert(
            `Please enter a proper fraction. num=${numerator} denom=${denominator} ${
        numerator > denominator
      }`
        );
    }
    bar.clearRect(0, 0, fractionBar.width, fractionBar.height);
    let interval = 700 / denominator;
    let separator = interval;

    let shaded = interval * numerator;
    bar.fillStyle = "rgb(120, 190, 250)";
    bar.fillRect(0, 0, shaded, 100);

    for (let i = 1; i < denominator; i++) {
        bar.beginPath();
        bar.moveTo(separator, 0);
        bar.lineTo(separator, 100);
        bar.closePath();
        bar.lineWidth = 5;
        bar.stroke();
        separator = separator + interval;
    }
}