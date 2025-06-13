// declare and initialize constants
const pageBody = document.querySelector('html');
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');

// function to change page background color
function changeBackgroundColor(){
    // vars to capture the current value of each slider when it is moved
    let redValue = redSlider.value;
    let greenValue = greenSlider.value;
    let blueValue = blueSlider.value;

    // change background color based on current slider values
    pageBody.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // testing to check slider values
    console.log(`${redValue}, ${greenValue}, ${blueValue}`);
}
