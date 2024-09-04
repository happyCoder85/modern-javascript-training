## Functions

In JavaScript, a function is a block of code designed to perform a particular task. Functions can be defined using the function keyword, arrow syntax, or the Function constructor. They can also be called more than once, to perform the same task multiple times. Here's an example of defining a function using the traditional function keyword:

![alt text](../assets/define-function.png)

### Explanation

**Function Declaration** 
The function ***greet*** is declared with one parameter, ***name***.

**Function Body**
Inside the function, we use a template literal to return a greeting message that includes the ***name*** passed as an argument.

**Function Call**
The function is called with the argument ***"Jon"***, and the returned value is stored in the variable ***greeting***.

**Output**
The greeting message is then logged to the console.

### Passing Arguments & Parameters
When you are creating a function, inside the parenthesis you can add a parameter that is required for the function such as ***name***. Then when you call the function you pass it an arguement such as ***"Jon"***.

Sometimes we want to pass a few different values. We can do that by comma separating the parameters.

### Returning values
We may not want to have something happen when a function runs, but return a value. For example, if we want to get the area value of a circle. We want to receive the value and put it into a variable that we are able to use it later. We don't want to log it to the console. 

## Arrow Function
Arrow functions allow us to write a function that works the same as a regular function but with less code. It makes it cleaner. With an arrow function you don't use the ***function*** keyword. Instead you just use parenthesis () which takes in our parameters (ex: radius).

## Callbacks & Foreach
Sometimes you want to pass in a function as an arguement in another function. This is called a call back function. 


For each method expects a callback function as an arguement foreach method.

See [Examples](04-functions.js)


