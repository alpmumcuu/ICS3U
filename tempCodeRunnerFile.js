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