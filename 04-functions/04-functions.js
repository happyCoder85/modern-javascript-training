// Function Declaration
function greet() {
    console.log('Hello there');
}

// Function Expression

const speak = function() {
    console.log('Good day!');
};

// greet(); // Hello there

// speak(); // Good day!


// Arguments & Parameters
const speakEasy = function(name) {
    console.log(`Good day ${name}`);
};

// speakEasy('Mario'); // Good day Mario

// console.log(name); // ReferenceError: name is not defined


const goodMorningAmerica = function(name = luigi, time = 'night') {
    console.log(`Good ${time}, ${name}`);
};

// If we don't pass any arguments, it will use the default values.
// goodMorningAmerica(); // Good night, luigi

// goodMorningAmerica('Mario', 'morning'); // Good morning, Mario


// Returning/Saving Values
const calcArea = function(radius) {
    return 3.14 * radius**2; // Will return the area of a circle.
};

const area = calcArea(5); // 78.5
console.log(area); // 78.5

// The previous functions have been Regular functions. Now we will see Arrow functions.
// Arrow Functions
const calculateArea = (radius) => {
    return 3.14 * radius**2; // Will return the area of a circle.
};

// console.log(calculateArea(5)); // 78.5
// If we have more than one parameter, we need to use parantheses.
// If we have only one parameter, we can omit the parentheses. Even if there is 0 parameters we need to use parantheses.
const calculateArea2 = radius => 3.14 * radius**2; // Will return the area of a circle.

// console.log(calculateArea2(5)); // 78.5

// Turning regular functions into arrow functions
// Regular function
const greetings = function() {
    return 'Hello, World!';
}

// Can be converted to an arrow function like so:
const greetingsArrow = () => 'Hello, World!';

// console.log(greetingsArrow()); // Hello, World!

// Regular function
const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

// Arrow function
const billArrow = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}


// Callback Functions
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// Passing a function into another function as an argument.
myFunc(function(value){
    console.log(value);
});


// forEach()

let people = ['Mario', 'Luigi', 'Yoshi', 'Toad'];

// Passing a regular function
people.forEach(function(person){
    console.log(person);
});

// Passing an arrow function
people.forEach(person => {
    console.log(person);
});

// We can also have more parameters such as index and person in the array.
people.forEach((person, index) => {
    console.log(index, person);
});

// We can also use an arrow function and pass that function as a parameter into the forEach method.
const logPerson = (person, index) => {
    console.log(`${index} - Hello ${person}`);
};

// people.forEach(logPerson); // 0 - Hello Mario, 1 - Hello Luigi, 2 - Hello Yoshi, 3 - Hello Toad

// We can use the forEach method to manipulate the DOM and create elements.
const ul = document.querySelector('.people');

// const people = ['Mario', 'Luigi', 'Yoshi', 'Toad']; (We already have this array)
let html = ``;

people.forEach(person => {
    // Create HTML template
    html += `<li style="color: purple">${person}</li>`;
});

// console.log(html); // <li style="color: purple">Mario</li><li style="color: purple">Luigi</li><li style="color: purple">Yoshi</li><li style="color: purple">Toad</li>
// We want to take this now, and output it to the browser. We can do this by setting the innerHTML of the ul element to the html variable.

ul.innerHTML = html;