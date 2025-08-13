// smoothie object & constructor
class Smoothie {
    constructor(size, liquid, fruits, berries){
        this.size = size;
        this.liquid = liquid;
        this.fruits = fruits;
        this.berries = berries;
    }
}

// get HTML elements
const submitBtn = document.getElementById('submitBtn');
const orderOutput = document.getElementById('orderOutput');

submitBtn.addEventListener('click', getSmoothieInfo);
function getSmoothieInfo(){
    orderOutput.textContent = displayOrder();
    console.log('order submitted');
}

// function to assemble the smoothie order text
function displayOrder(){
    // start with blank output and add selected values from form
    output = "";

    // get values of each element in the form
    // size
    small = document.getElementById('small');
    medium = document.getElementById('medium');
    large = document.getElementById('large');
    // liquid
    milk = document.getElementById('milk');
    coconutWater = document.getElementById('coconutWater');
    fruitJuice = document.getElementById('fruitJuice');
    // fruits
    banana = document.getElementById('banana');
    pineapple = document.getElementById('pineapple');
    mango = document.getElementById('mango');
    kiwi = document.getElementById('kiwi');
    orange = document.getElementById('orange');
    // berries
    blueberry = document.getElementById('blueberry');
    strawberry = document.getElementById('strawberry');
    raspberry = document.getElementById('raspberry');
    blackberry = document.getElementById('blackberry');

    // check which checkboxes values are checked
    // add checkbox values to output string if they are checked
    // size
    if(small.checked){
        output = output + `Your smoothie is a size ${small.value} with `;
    }
    if(medium.checked){
        output = output + `Your smoothie is a size ${medium.value} with `;
    }
    if(large.checked){
        output = output + `Your smoothie is a size ${large.value} with `;
    }
    // liquid
    if(milk.checked){
        output = output + milk.value;
    }
    if(coconutWater.checked){
        output = output + coconutWater.value;
    }
    if(fruitJuice.checked){
        output = output + fruitJuice.value;
    }

    // fruits
    if(banana.checked){
        output = output + ", " + banana.value;
    }
    if(pineapple.checked){
        output = output + ", " + pineapple.value;
    }
    if(mango.checked){
        output = output + ", " + mango.value;
    }
    if(kiwi.checked){
        output = output + ", " + kiwi.value;
    }
    if(orange.checked){
        output = output + ", " + orange.value;
    }
    // berries
    if(blueberry.checked){
        output = output + ", " + blueberry.value;
    }
    if(strawberry.checked){
        output = output + ", " + strawberry.value;
    }
    if(raspberry.checked){
        output = output + ", " + raspberry.value;
    }
    if(blackberry.checked){
        output = output + ", " + blackberry.value;
    }

    // return finished description to button event listener
    return output;
}

/* TODO: 
- format order output more neatly
- use smoothie object
*/