let user = {
    name: 'jon',
    age: 30,
    email: 'jon@jonspurling.ca',
    location: 'Selkirk',
    blogs: ['Why mac & cheese is the best', '10 things to do in Winnipeg'],
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
            console.log(blog);
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
user.login();
user.logout();

// user.logBlogs(); // ['Why mac & cheese is the best', '10 things to do in Winnipeg'] (When we use the single console.log)
// console.log(this); // Window object

// Now when we run user.logBlogs(); we will see "this user has written the following blogs:" followed by the two blogs in the array.
// user.logBlogs(); // This user has written the following blogs: Why mac & cheese is the best, 10 things to do in Winnipeg