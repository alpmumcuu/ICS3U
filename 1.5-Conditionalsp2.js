
// Ask user for their name
let userName = prompt("What is your name? ");
let age = parseInt(prompt(`Hello ${userName}, how old are you?`));

// Check age to see if eligible to drive
if (age >= 16) {
    console.log("You are old enough to drive");
}
else {
    console.log("You are not old enough to drive yet");
}

// Show menu
console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// Ask for the selection
let selection = parseInt(prompt(`Hi ${userName}. Please make a selection: `));

if (selection == 1) {
    console.log("Play");
} 
else if (selection == 2) {
    console.log("You selected options.");
} 
else if (selection == 3) {
    console.log("There are no new DLC at this time");
} 
else if (selection == 4) {
    console.log("Everything is up to date.");
} 
else if (selection == 5) {
    console.log("Goodbye");
} 
else {
    console.log("Selection not valid");
}

