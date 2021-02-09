/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcome2 = () => {return 'Welcome to Appleseeds Bootcamp!'};
const welcome3 = () => 'Welcome to Appleseeds Bootcamp!';

function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power2 = (b) => {return Math.pow(b, 2)};
const power3 = (b) => Math.pow(b, 2);

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

(function(a) {
     console.log(Math.sqrt(a));
}(9));

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function(a,b){
    console.log(Math.random() * (a - b) + b);
}) (2,3);