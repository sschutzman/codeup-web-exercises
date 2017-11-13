const $ = require('jquery');

const sayHello = (name = "World") => {
    return `Hello ${name}`;
};
console.log(sayHello());

