/Mr.Jamieson :Nemo:
// Alp 
// Importing prompt-sync module to take user input
const prompt = require('prompt-sync')();

// Prompting the user to enter the starting number
let start = parseInt(prompt("Enter the starting number: "));

// Prompting the user to enter the stopping number
let stop = parseInt(prompt("Enter the stopping number: "));

// While loop to see if the user enters the proper numbers
while (start < stop){
    start = parseInt(prompt("Please enter a new starting number: "));
    stop = parseInt(prompt("Please enter smaller stopping number: "));
}

// Function to countdown from start to stop
function countdown(start, stop){
    while (start > stop){
        console.log(start);
        start = start - 1;
    }
    return stop;
}

//  countdown from start to stop
console.log(countdown(start, stop));

// Function to generate a random integer within a range
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate random numbers until a specific number is reached
function random_until(min, max, stop){
    if (min >= max){
        return -1;
    }
    randInt(min, max);
    if ((stop <= min) && (stop >= max)){
        return -1;
    }
    else{
        let randNum = randInt(min, max);
        while (randNum != stop){
            console.log(`Random Number: ${randNum}`);
            randNum = randInt(min, max);
        }
    }
}

// Generating random numbers until 5 is reached within the range of 1 to 10
random_until(1, 10, 5);

// Function to calculate the average of n numbers
function average(n){
    let sum = 0;
    let i = 0;
    while (n != i){
        let number = parseInt(prompt(`Enter value ${i + 1}/${n}: `));
        sum += number;
        i++;
    }
    console.log(`The average is ${(sum / n).}`);
}

// Calculating the average of 5 numbers
average(5);
