

// Ask user for age
let age = parseInt(prompt("How old are you? "));

// Check if user is 50 years old
    console.log("You qualify for the senior discount!");
} 
else if (age < 16) {
    // Check if user is younger than 16
    console.log("You're not old enough to drive yet");
}

// figure out if the user's age is even or odd and print that to the screen
if (age % 2 === 0) {
    console.log("Your age is an even number. That's pretty cool!");
} 
else {
    console.log("Your age is an odd number. That's pretty cool!");
}

// Ask the user for their name
let userName = prompt("What is your name? ");

// Conditional checks on the userName
if (userName === "Mr. J") {
    console.log("🐠"); // secret language to communicate with mr J
} 
else if (userName.length > 7) {
    console.log("You have a long name.");
}

// Ask the user how long their name is
let nameLength = parseInt(prompt("How many characters are in your name? "));

// Checks on the entered name length
if (nameLength === userName.length) {
    console.log("That's correct! ");
} 
else if (nameLength > userName.length) {
    console.log("Too high ");
} 
else {
    console.log("Too low ");
}

