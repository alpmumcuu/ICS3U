function whoAreYou() {
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    let favouriteHobby = prompt("What is your favourite hobby?");
    console.log(`Hello, ${name}, you are ${age} years old and your favourite hobby is ${favouriteHobby}!`);
}

function taxCalculator(dollars) {
    let dollarsTax = dollars * 1.13;
    console.log(`Value with tax: ${dollarsTax}`);
}

function calculator(operator) {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    if (operator === '+') {
        console.log(num1 + num2);
    } else if (operator === '-') {
        console.log(num1 - num2);
    } else if (operator === '*') {
        console.log(num1 * num2);
    } else if (operator === '/') {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero.");
        }
    } else {
        console.log("Invalid operator.");
    }
}

function pythagorean(legA, legB, hypoteneuse) {
    if (!hypoteneuse) {
        console.log(Math.sqrt(legA * legA + legB * legB));
    } else if (!legA) {
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legB * legB));
    } else {
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legA * legA));
    }
}