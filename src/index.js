const $ = require('jquery');

const sayHello = (name = "World") => {
    return `Hello ${name}`;
};
console.log(sayHello());

const niceMessage = require('./say-hello');
console.log(niceMessage());