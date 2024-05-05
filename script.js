let fractionBar = document.getElementById("bar");
let bar = fractionBar.getContext("2d");

let denominatorInput = document.getElementById("denominator");
let numeratorInput = document.getElementById("numerator");
let generateButton = document.getElementById("generate");
let pngButton = document.getElementById("pngButton");
let debug = document.querySelector("#debug");


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

generateButton.addEventListener("click", function () {
    let numerator = parseInt(numeratorInput.value);
    let denominator = parseInt(denominatorInput.value);
    makeBar(numerator, denominator);
});

function downloadPic() {
    const canvas = document.getElementById("bar") // Gets canvas element from html
    //const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    //link.href = dataURL;
    link.href = canvas.toDataURL("image/png");
    link.download = 'canvas_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

pngButton.addEventListener("click", function () {
    downloadPic();
    console.log("Button Clicked!")
})