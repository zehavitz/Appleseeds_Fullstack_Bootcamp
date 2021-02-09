/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const welcome2 = () => 'Welcome to Appleseeds Bootcamp!';

console.log(welcome2());


function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const power2= (b) => Math.pow(b, 2);

console.log(power2(2));


function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

const add2=(a,b=5)=>a+b;
console.log(add2(2));


// From function expressions to function declarations
const hello = () => "Hello!";

function hello2(){
    return "Hello";
};

console.log(hello2());

const squareRoot = a => Math.sqrt(a);

function squareRoot2(a) {
    return Math.sqrt(a);
};

console.log(squareRoot2(4));

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers2(a,b) {
    return  Math.random() * (a - b) + b;
};

console.log(randomNumbers2(1,2));
