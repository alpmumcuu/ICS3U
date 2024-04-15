function isDivisibleBy3(num) {
    return num % 3 === 0;
}

function playGame() {
    console.log("Welcome to Mr. Jamieson's number game!");

    let play = prompt("Do you want to play a game? [y]/n: ").trim().toLowerCase() || 'y';
    if (play !== 'y') {
        console.log("Maybe next time!");
        return;
    }

    let num1 = parseInt(prompt("Enter your first number: "));
    if (num1 > 10 && num1 < 50) {
        console.log("Your next number should be greater than 50.");
    }

    let num2 = parseInt(prompt("Enter your second number: "));
    if (num2 % 2 === 0) {
        console.log("Your next number should be odd.");
    }

    let num3 = parseInt(prompt("Enter your third number: "));

    // Check if the set of numbers is Jazzy
    let jazzyCount = 0;
    if (isDivisibleBy3(num1)) {
        jazzyCount++;
    }
    if (isDivisibleBy3(num2)) {
        jazzyCount++;
    }
    if (isDivisibleBy3(num3)) {
        jazzyCount++;
    }

    if (jazzyCount >= 2) {
        console.log("Your numbers are Jazzy!");
    } else {
        console.log("Your numbers are not Jazzy.");
    }

    // Check if the set of numbers is Squirrelly
    let sum = num1 + num2 + num3;
    if ((sum + 1) % 10 === 0) {
        console.log("Your numbers are Squirrelly!");
    } else {
        console.log("Your numbers are not Squirrelly.");
    }
}

// Call the function to play the game
playGame();