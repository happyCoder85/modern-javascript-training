const para = document.querySelector('p'); // Place a css selector in the querySelector method to select the first paragraph element in the HTML file

console.log(para); // Log the first paragraph element to the console

const secondPara = document.querySelector('.error'); // Place a css selector in the querySelector method to select the first paragraph element with a class of 'error' in the HTML file

console.log(secondPara); // Log the first paragraph element with a class of 'error' to the console

const divError = document.querySelector('div.error'); // Place a css selector in the querySelector method to select the first div element with a class of 'error' in the HTML file

// Selecting multiple elements at once
const paragraph = document.querySelectorAll('p'); // Place a css selector in the querySelectorAll method to select all paragraph elements in the HTML file

// console.log(paragraph); // Log all paragraph elements to the console
// console.log(paragraph[3]); // Log the fourth paragraph element to the console

paragraph.forEach(para => {
    // console.log(para); // Log each paragraph element to the console
}); // You can use the forEach method to loop through each paragraph element and log them to the console

const errors = document.querySelectorAll('.error'); // Place a css selector in the querySelectorAll method to select all paragraph elements with a class of 'error' in the HTML file

// console.log(errors); // Log all elements with a class of 'error' to the console

const title = document.getElementById('page-title');
// console.log(title) // Log the element with an id of 'page-title' to the console

const errors2 = document.getElementsByClassName('error'); // Place a class name in the getElementsByClassName method to select all elements with a class of 'error' in the HTML file

// console.log(errors2); // Log all elements with a class of 'error' to the console

const paras83 = document.getElementsByTagName('p'); // Place a tag name in the getElementsByTagName method to select all paragraph elements in the HTML file
// console.log(paras83); // Log all paragraph elements to the console
// console.log(paras83[2]); // Log the third paragraph element to the console

// Changing text content
const para1 = document.querySelector('p'); // Place a css selector in the querySelector method to select the first paragraph element in the HTML file

// console.log(para1.innerText); // Log the text content of the first paragraph element to the console
para1.innerText = 'Ninjas are awesome!'; // Change the text content of the first paragraph element to 'Ninjas are awesome!'
// console.log(para1.innerText); // Ninja's Are Awesome!

// If you wanted to append to the text you could use the += operator
// para1.innerText += ' Ninjas are awesome!'; // Append the text content of the first paragraph element to ' Ninjas are awesome!'

const paras = document.querySelectorAll('p'); // Place a css selector in the querySelectorAll method to select all paragraph elements in the HTML file (as a node list)

paras.forEach(para => {
    // console.log(para.innerText); // Log each paragraph element's text content to the console
    paras.innerText += ' new text'; // Append ' new text' to each paragraph element's text content
}); // You will see new text appended to each paragraph element's text content

// Changing HTML content
const content = document.querySelector('.content'); // Place a css selector in the querySelector method to select the first element with a class of 'content' in the HTML file

// Thats how we get it, how do we update it?
content.innerHTML = '<h2>This is a new h2</h2>'; // Change the HTML content of the first element with a class of 'content

// If I wanted to just append to the HTML content I could use the += operator
content.innerHTML += '<h2>This is a new new h2</h2>'; // Append the HTML content of the first element with a class of 'content

// We want to create a little HTML template for each person in the array that we got from the "database".
const people = ['mario', 'luigi', 'yoshi']; // Create an array of strings called people

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; // Append a paragraph element with the string value of each person in the people array
}); // Use the forEach method to loop through each person in the people array

// Getting attributes
const link = document.querySelector('a'); // Place a css selector in the querySelector method to select the first anchor element in the HTML file
// console.log(link.getAttribute('href')); // Log the href attribute of the first anchor element to the console

// Setting attributes
link.setAttribute('href', 'https://www.jonspurling.ca'); // Set the href attribute of the first anchor element to 'https://www.jonspurling.ca'
link.innerText = 'Jon Spurling'; // Set the text content of the first anchor element to 'Jon Spurling'


const msg = document.querySelector('p'); // Place a css selector in the querySelector method to select the first paragraph element in the HTML file
// console.log(msg.getAttribute('class')); // Log the class attribute of the first paragraph element to the console

 msg.setAttribute('class', 'success'); // Set the class attribute of the first paragraph element to 'success'
 
 // Changing CSS styles
 // msg.setAttribute('style', 'color: green;'); // Set the style attribute of the first paragraph element to 'color: green;'

// Get the color of the h1 element
const title2 = document.querySelector('h1'); // Place a css selector in the querySelector method to select the first h1 element in the HTML file

title2.style.margin = '50px'; // Set the margin style of the first h1 element to '50px'

// Say we want to change the color style
title2.style.color = 'crimson'; // Set the color style of the first h1 element to 'crimson'

title2.style.fontSize = '60px'; // Set the font size style of the first h1 element to '60px'

// If you want to delete a style you can set it to an empty string
title2.style.margin = ''; // Delete the margin style of the first h1 element

// Changing a style using a class
const content2 = document.querySelector('p.error'); // Place a css selector in the querySelector method to select the first paragraph element in the HTML file

// Log out a list of this elements classes
// console.log(content2.classList); // Log the class list of the first paragraph element to the console
// The above should now show the class 'error'

// If you add other classes to the HTML they will appear in the class list

// Add a class to the element
// First remove error from the p class="error" in index.html

//content2.classList.add('success'); // Add a class of 'success
content2.classList.add('error'); // Add a class of 'error'

// Toggle a class
const h1title = document.querySelector('.title'); // Place a css selector in the querySelector method to select the first element with a class of 'title' in the HTML file

h1title.classList.toggle('test'); // Toggle a class of 'test' on the first element with a class of 'title' If we have the class already on it will remove it, and if its not on it will add it. 

