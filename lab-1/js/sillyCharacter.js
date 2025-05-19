/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:

Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)

Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.

Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.
*/

// Declare and initialize variables
let characterName = "Cloudy";
// randomly generate age from range 1 to 100
let age = Math.floor(Math.random() * 100) + 1;
let isSuperhero = true;
let specialPowers = ["jump up to space", "change the weather", "float objects with their mind"];
let favoriteFood = "meatballs";

// testing random number generator
console.log(age);

// variables for displaying text, user input, and buttons
let characterDescription = document.querySelector('p#characterDescription');
let changeNameField = document.querySelector('input#changeNameField');
let generateButton = document.querySelector('#generateButton');
let increaseAgeButton = document.querySelector('#increaseAgeButton');
let decreaseAgeButton = document.querySelector('#decreaseAgeButton');

// Function to generate a random character description


// Functions to update character's age


// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector

