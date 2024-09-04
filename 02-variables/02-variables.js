// var is function scoped, not block scoped -> as seen below when the variable is declared outside of a function the variable is available in and out of the function. However, when the variable is declared inside a function it is only available inside that function.

var fullName = 'John Doe';

function logName() {
    console.log(fullName); // John Doe
}

function addToName() {
    var newName = fullName + ' Jr.';
    return newName;
}


// logName(); // John Doe
// console.log(newName); // ReferenceError: newName is not defined


// let is block scoped -> as seen below when the variable is declared outside of a function the variable is available in and out of the function. However, when the variable is declared inside a function it is only available inside that function.
let nextName = 'Jane Doe';

function logNextName() {
    console.log(nextName); // Jane Doe
}

function addToNextName() {
    let newNextName = nextName + ' the 3rd';
    return newNextName;
}

// logNextName(); // Jane Doe
// console.log(newNextName); // ReferenceError: newNextName is not defined

// Const is block scoped -> as seen below when the variable is declared outside of a function the variable is available in and out of the function. However, when the variable is declared inside a function it is only available inside that function.
const lastName = 'Smith';

function logLastName() {
    return lastName; // Smith
}

function addToLastName() {
    const newLastName = lastName + 'ers'
}

// logLastName(); // Smith
// console.log(newLastName); // ReferenceError: newLastName is not defined

// Strings
// console.log("Hello, World!"); // Hello, World!

let email = 'jon@jonspurling.ca';
// console.log(email); // jon@jonspurling.ca

// String concatenation
let firstChildsName = 'Kaiden';
let secondChildsName = 'Cimarein';
let thirdChildsName = 'Hazel';
let fourthChildsName = 'Zayden';

let listOfChildren = firstChildsName + ' ' + secondChildsName + ' ' + thirdChildsName + ' ' + fourthChildsName;
// console.log(listOfChildren); // Kaiden Cimarein Hazel Zayden

// Getting characters
// console.log(firstChildsName[3]); // d

// String length
// console.log(firstChildsName.length); // 6

// String methods
// console.log(firstChildsName.toUpperCase()); // KAIDEN

// Common String Methods
// lastIndex() - Finds the last instance of a character in a string
// console.log(email.lastIndexOf('n')); // 11 (jon@jonspurling.ca)

// slice() - Extracts a part of a string and returns the extracted part in a new string
// console.log(email.slice(0, 3)); // jon

// substr() - Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// console.log(email.substr(0, 3)); // jon))

// replace() - Searches a string for a specified value, or a regular expression, and returns a new string where the first specified values are replaced
// console.log(email.replace('jon', 'jonathan')); // jonathan@jonspurling.ca

//Template Strings
const favoriteSeries = 'Star Wars';
const favoriteCharacter = 'Darth Vader';
const favoriteQuote = 'I am your father';

// Concatenation way
let favoriteSentence = 'My favorite series is ' + favoriteSeries + ' and my favorite character is ' + favoriteCharacter + ' and my favorite quote is ' + favoriteQuote;

// console.log(favoriteSentence); // My favorite series is Star Wars and my favorite character is Darth Vader and my favorite quote is I am your father

// Template string way
let favoriteSentenceTemplate = `My favorite series is ${favoriteSeries} and my favorite character is ${favoriteCharacter} and my favorite quote is ${favoriteQuote}`;
// console.log(favoriteSentenceTemplate); // My favorite series is Star Wars and my favorite character is Darth Vader and my favorite quote is I am your father

// Create HTML templates
let html = `
    <h2>${favoriteSeries}</h2>
    <p>${favoriteCharacter}</p>
    <p>${favoriteQuote}</p>
`;
// console.log(html); // <h2>Star Wars</h2> <p>Darth Vader</p> <p>I am your father</p>

// Numbers
let age = 30;
// console.log(age); // 30

// Add a year to age
age = age + 1;
// console.log(age); // 31

// Add 100 to age
age = age + 100;
// console.log(age); // 131

// Other math operations

// Multiplication
let doubleAge = age * 2;
// console.log(doubleAge); // 262

// Division
let halfAge = age / 2;
// console.log(halfAge); // 65.5

// Subtraction
let ageMinusTen = age - 10;
// console.log(ageMinusTen); // 121

// NaN - Not a Number (if you try to do math with a string or something that doesn't make sense to do math on)
// console.log(age * 'thirty-two'); // NaN

// Concatenating numbers
let sentence = 'My age is ' + age;
// console.log(sentence); // My age is 131

// Arrays
let children = ['Kaiden', 'Cimarein', 'Hazel', 'Zayden'];

// Accessing the first item array
// console.log("My first child is " + children[0]); // My first child is Kaiden

// Accessing the last item in the array of an unknown array length.
// console.log("My last child is " + children[children.length - 1]); // My last child is Zayden

// Accessing the 3rd item in an array
// console.log("My 3rd child is " + children[2]); // My 3rd child is Hazel

// Storing different types of data in an array

const hazel = ['Hazel', 'Thomas', 9, 'blue'];
// console.log(hazel); // ['Hazel', 'Thomas', 9, 'blue']

// Array properties 
// console.log(hazel.length); // 4

// Array methods
// join() - Joins all elements of an array into a string separated by a specified separator
// console.log(hazel.join(' - ')); // Hazel - Thomas - 9 - blue

// indexOf() - Searches the array for an element and returns its position
// console.log(hazel.indexOf('Thomas')); // 1

// concat() - Joins two or more arrays and returns a copy of the joined arrays
const favoriteGames = ['Zelda', 'Mario', 'Pokemon'];
const hazelTwoPoint0 = hazel.concat(favoriteGames);
// console.log(hazelTwoPoint0); // ['Hazel', 'Thomas', 9, 'blue', 'Zelda', 'Mario', 'Pokemon']

// push() - Adds new elements to the end of an array and returns the new length
hazel.push('green');
// console.log(hazel); // ['Hazel', 'Thomas', 9, 'blue', 'green']

// pop() - Removes the last element from an array and returns that element
hazel.pop();
// console.log(hazel); // ['Hazel', 'Thomas', 9, 'blue']

// Undefined
let number;
// console.log(number, number+3, `the number is ${number}); // undefined NaN the number is undefined

// Null
let empty = null;
// console.log(empty, empty+3, `the number is ${empty}); // null 3 the number is null

// number is undefined because no value is assigned to it (it's completely empty) and null is assigned a value and thus is not empty.

// Booleans
// console.log(true, false, "true", "false"); // true false "true" "false"
// The first two are boolean values, while the second set are strings.

// includes()
let result = email.includes('@');
// console.log(result); // true

let newEmail = 'jonspurling.ca';
let newResult = newEmail.includes('@');
// console.log(newResult); // false

// Comparison operators
let favoriteNumber = 42;
// console.log(favoriteNumber == 42); // true (single equals sign is an assignment operator while double equals sign is a loose comparison operator)

// Negate values
let doNotPanic = false;
// console.log(!doNotPanic); // true

// Loose comparison (different types can still be equal)
let looseComparison = 42 == '42';
// console.log(looseComparison); // true

let myName = 'jon';

let isMyNameJon = myName == 'jon';
let isMyNameNotJon = myName == 'Jon';

// console.log(isMyNameJon); // true
// console.log(isMyNameNotJon); // false // Lowercase values are always different than uppercase values. Lowercase values are always greater than uppercase values.

// Strict comparison (different types cannot be equal) ===
let strictComparison = 42 === '42';
// console.log(strictComparison); // false
//console.log(doNotPanic !== true); // true

// Type conversion
let score = '100';

// console.log(score + 1); // 1001 - the number 1 is converted to a string and concatenated to the string 100

score = Number(score);
// console.log(score + 1); // 101 - the string 100 is converted to a number and the number 1 is added to it

// typeof operator
// console.log(typeof score); // number

let newScore = Number('hello');
// console.log(newScore); // NaN

// What if you want to turn a number into a string?
// Explicit Type Conversion

let test = String(100);
// console.log(test, typeof test); // 100 string

let newTest = Boolean(100);
// console.log(newTest, typeof newTest); // true boolean

newTest = Boolean(0);
// console.log(newTest, typeof newTest); // false boolean -> Strings of any length are truthy, while an empty string is falsey.








