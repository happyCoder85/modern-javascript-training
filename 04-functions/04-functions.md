## Control Structures
Sometimes you want to perform a task so many times or based on a condition being met. That is where control structures come into play. We will be talking about the following type of structures.

    - For Loops
    - While Loops
    - Do/While Loops
    - IF/ELSE IF/ELSE Statements
    - Logical Operators
      - AND
      - OR
    - Break
    - Continue
    - Switch

### Loops

**For Loop**
When you want to loop through a set of code a set amount of times. (I want to print 1 to 10 in the console).

**While Loop**
Maybe you want to loop through a set of code but are unsure how many times you require to loop. This is where While loops help, as you can set a condition that while met, will loop through the block of code.

**Do/While Loop**
Sometimes you want to loop through some code at least once, but if a condition is met, break out of the loop. Do/While loops allow you to do just that. For example: You have a score randomly generated, and repeat until 100 is hit. When 100 is hit, the loop stops and you get the message "You Win!"

**IF/ELSE IF/ELSE Statements**
Sometimes we want to run code when a condition is met, or have multiple factors. For example: Your password must be 8 characters long and contain a special character, otherwise print the message "Password is insecure", that is where IF/ELSE IF/ELSE statements help out.

### Logical Operators
**AND**
Sometimes we want to make sure two conditions are met before we enter a block of code. Going back to the password example, it could be written in psudo-code like:

  "IF password is LESS than 8 AND contains a special char"

**OR**
Othertimes we will have a condition that if one or the other condition is met, we want to execute the code block. For example:

  "IF weather is cold put on warm coat ELSE IF weather is rainy put on rain coat ELSE wear t-shirt"

### Break
Sometimes, you want to run a block of code, but add a condition inside the function that if a condition is met, the function is broken out of. This also plays a spot in Switch Statements, which we will discuss shortly.

### Continue
Sometimes, you want to skip a loop result and continue the loop. For example: You have a game that randomly gives a score on the screen, but when user gets a 0, it skips it and goes to the next score. This is where you could use the continue keyword.

### Switch Statements
Switch statements are used to replace IF/IF Else statements. You use them the same way, and provide various options that could be true and depending on which condition ends up being met, a code block is executed.

### Block Scope
When you declare a variable outside of a control structure it is globally available, no matter if we are using let or const. When you declare a variable inside a code block (If statement for example), that variable is only available within that code block and nested code blocks. Var however ignores block scope -> We can define var within a code block, and it will be available outside of the block. It's much better to use let and const where possible.

See [Examples](03-control-structures.js)

