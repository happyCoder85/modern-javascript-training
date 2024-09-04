// Typically blogs would be stored in an array, not a string. So, we are going to create an array of blogs for the user object to use. 

// const blogs = [
//     { title: 'Why mac & cheese is the best', likes: 30 },
//     { title: '10 things to do in Winnipeg', likes: 50 }
// ];

// console.logs(blogs); // This will log the array of blogs.
// Story objects in an array is absolutely fine. And will be the format we will use most of the time as we are going to have it in an array of objects. 

let user = {
    name: 'jon',
    age: 30,
    email: 'jon@jonspurling.ca',
    location: 'Selkirk',
    // blogs: ['Why mac & cheese is the best', '10 things to do in Winnipeg'],
    blogs: [
        { title: 'Why mac & cheese is the best', likes: 30 },
        { title: '10 things to do in Winnipeg', likes: 50 }
    ],
    login() {
        console.log('The user logged in');
    },
    logout() {
        console.log('The user logged out');
    },
    logBlogs() {
        // console.log(this.blogs); // This will log the blogs array.
        // To loop through the array, we can use forEach and an arrow function.
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

// console.log(user);
// console.log(user.name);
// console.log(user['name']);\
// user.age = 35;
// console.log(user.age);
// user['age'] = 40;
// console.log(user['age']);

// Whats the type?
// console.log(typeof user); // object

// Adding methods to objects
// user.login();
// user.logout();

// user.logBlogs(); // ['Why mac & cheese is the best', '10 things to do in Winnipeg'] (When we use the single console.log)
// console.log(this); // Window object

// Now when we run user.logBlogs(); we will see "this user has written the following blogs:" followed by the two blogs in the array.
user.logBlogs(); // This user has written the following blogs: Why mac & cheese is the best, 10 things to do in Winnipeg

// Math Object
// console.log(Math); // This will log the Math object.
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E); // 2.718281828459045 (Euler's number -> Mathematical constant)

const area = 7.7;

// Methods
// console.log(Math.round(area)); // 8 // If its closer to 8 it rounds to 8, closer to 7 it rounds to 7.
// console.log(Math.floor(area)); // 7 // Always rounds down.
// console.log(Math.ceil(area)); // 8 // Always rounds up.
// console.log(Math.trunc(area)); // 7 // Removes the decimal.

// Random Numbers
const random = Math.random(); // Random number between 0 and 1.
// console.log(random);
// console.log(Math.round(random)); // 0 or 1
// console.log(Math.round(random * 100)); // Random number between 0 and 100.
// console.log(Math.round(random * 100) + 1); // Random number between 1 and 100.

// Primitive Types

// Reference Types