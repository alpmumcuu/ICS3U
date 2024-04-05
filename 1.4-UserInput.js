const prompt = require('prompt-sync')();

// ask what year they were born
let yearBorn = prompt("What year were you born? ");
console.log(`You entered ${yearBorn}`);

// calculate the age
let currentYear = 2024;
let age = currentYear - yearBorn;
console.log(`You are likely ${age} years old`);

// ask for their name
let name = prompt("What is your name? ");
console.log(`Hi, ${name}. You were born in ${yearBorn} and you are likely ${age} years old.`);

// print lenght of name
console.log(`Your name is ${name.length} letters long.`);

// ask for a temperature in Fahrenheit and convert it to Celsius
let tempFahrenheit = prompt("Enter a temperature in Fahrenheit: ");
let tempCelsius = (tempFahrenheit - 32) * 5/9;
console.log(`${tempFahrenheit}F is equal to ${tempCelsius.toFixed(2)}C.`);

