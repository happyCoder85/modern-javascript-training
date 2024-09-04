// FOR Loops
for (let i = 0; i < 10; i++) {
    // console.log("In Loop: ", i); // In Loop: 0, In Loop: 1, In Loop: 2, In Loop: 3, In Loop: 4, In Loop: 5, In Loop: 6, In Loop: 7, In Loop: 8, In Loop: 9 
}
//console.log("Outside Loop"); // Outside Loop

// For loops using Arrays
const names = ["John", "Jane", "Jack", "Jill"];
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]); // John, Jane, Jack, Jill
}

// While Loops
let i = 0; // Must initiate i before using it in while loop

while (i < names.length) {
    // console.log(names[i]); // John, Jane, Jack, Jill
    i++; // Must increment i to avoid infinite loop
}

// Do While Loops
let j = 0; // Must initiate j (counter) before using it in do while loop
do {
    // console.log('value of j is: ', j); // value of j is: 0, value of j is: 1, value of j is: 2, value of j is: 3, value of j is: 4
} while (j < 5); // Must have a condition to check for in do while loop

// IF/ELSE IF/ELSE Statements
const score = [30, 60, 70, 10, 80, 100, 3, 10];

for (let i = 0; i < score.length; i++) {
    if (score[i] < 50) {
        // console.log("Try again");
    }
    else if (score[i] < 100) {
        // console.log("Close but not there yet");
    }
    else {
        // console.log("You win! You got 100");
    }
}

// Logical Operators
// AND
const age = 25;
const gender = "male";

if (age > 20 && gender == "male") {
    // console.log("You are an adult male"); // You are an adult male
} else {
    // console.log("You are you!");
}

// OR
if (age < 20 || gender != "female") {
    // console.log("You are not female"); // You are not female
} else {
    // console.log("You are you!");
}

// Break
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        break;
    }
    // console.log(i); // 0, 1, 2, 3, 4
}

// Continue
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        continue;
    }
    // console.log(i); // 0, 1, 2, 3, 5, 6, 7, 8, 9
}

// Switch Statement
const grade = "D";

switch (grade) {
    case 'A':
        // console.log("You got an A");
        break;
    case 'B':
        // console.log("You got a B");
        break;
    case 'C':
        // console.log("You got a C");
        break;
    case 'D':
        // console.log("You got a D"); // You got a D will be displayed.
        break;
    case 'E':
        // console.log("You got an E");
        break;
    default:
        // console.log("You failed");
}

// Block Scope
let num = 30; // Global Scope -> Can be used anywhere in the file.

// let num = 40; // SyntaxError: Identifier 'num' has already been declared

if (true) {
    let age = 40; // Can redefine a variable within the code block -> But only keeps num 40 within code block. (Local scope)
    // console.log("Inside Block: ", num); // Inside Block: 30")

    let onlyVisibleInCodeBlock = true;
    num = 40; // It will change the value of num to 40
    if(true) {
        //console.log('Inside 2nd Block: ', num); // Inside 2nd Block: 40 (Getting value from most immediate scope inside first IF statement)
        let age = 50; // Can redefine a variable within the code block -> But only keeps num 50 within code block. (Local scope)
        //console.log("Inside 2nd Block: ", age); // Inside 2nd Block: 50
    }

    //console.log("Inside Block: ", age); // Inside Block: 40
}

// console.log(onlyVisibleInCodeBlock); // ReferenceError: onlyVisibleInCodeBlock is not defined (Cannot access variable outside of code block)
// console.log("Outside Block: ", num); // Outside Block: 30
