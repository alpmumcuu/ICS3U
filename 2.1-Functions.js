// Define a function called whoAreYou
function whoAreYou() {
    // Prompt the user for their name
    let name = prompt("What is your name?");
    
    // Prompt the user for their age
    let age = prompt("How old are you?");
    
    // Prompt the user for their favorite hobby
    let hobby = prompt("What is your favorite hobby?");
    
    // Construct the output message using the user's responses
    let message = `Hello, ${name}, you are ${age} years old and your favorite hobby is ${hobby}!`;
    
    // Display the message to the user
    alert(message);
}

// Call the function to execute the
// Define a function named taxCalculator that calculates tax and total amount
function taxCalculator(dollars) {
    // Convert the input to a decimal number
    dollars = parseFloat(dollars);
    
    // Calculate the tax and round it to two decimal places
    let taxCalc = parseFloat((dollars * 0.13).toFixed(2));
    
    // Calculate the total amount including tax and round it to two decimal places
    let total = parseFloat((dollars + taxCalc).toFixed(2));
    
    // Display the original value, tax calculated, and total amount
    console.log(`Original Value: ${dollars.toFixed(2)}\nTax (13%): ${taxCalc.toFixed(2)}\nTotal: ${total.toFixed(2)}`);
}

// Define a function called calculator with an "operator" parameter
function calculator(operator) {
    // Get user input for two numbers and convert them to floats
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Perform calculation based on the operator provided
    if (operator === '+') {
        console.log(num1 + num2);
    } 
    else if (operator === '-') {
        console.log(num1 - num2);
    } 
    else if (operator === '*') {
        console.log(num1 * num2);
    } 
    else if (operator === '/') {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } 
        else {
            console.log("Cannot divide by zero.");
        }
    } 
    else {
        console.log("Invalid operator.");
    }
}

// Define a function called pythagorean with parameters to calculate missing side of a right triangle
function pythagorean(legA, legB, hypotenuse) {
    if (!hypotenuse) {
        // Calculate and output the missing hypotenuse
        console.log(Math.sqrt(legA * legA + legB * legB));
    }
    else if (!legA) {
        // Calculate and output the missing legA
        console.log(Math.sqrt(hypotenuse * hypotenuse - legB * legB));
    } 
    else {
        // Calculate and output the missing legB
        console.log(Math.sqrt(hypotenuse * hypotenuse - legA * legA));
    }
}