(function () {


    "use strict";

// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  *  > sayHello("codeup") // returns "Hello, codeup!"
//  */

// function sayHello(name) {
//     return name;
// }
// console.log(sayHello("Hello, codeup!"));
//

    function sayHello(name) {
        return "Hello " + name + "!";
    }

    var name = "codeup";
    console.log(sayHello(name));
// /
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */

    var helloMessage = sayHello("Hello Sukari");
console.log(helloMessage);

//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */

    var myName = function sayHello(name) {
        return name;
}
console.log(myName("Hello, Sukari"));

    var myName = "Sukari"


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  *  > isTwo(1) // returns false
//  *  > isTwo(2) // returns true
//  *  > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

// function isTwo(num) {
//     return (num)
//     var isTwo = "false"
//     isTwo = "true"
//     isTwo = "false"
// };
// console.log(isTwo(random));

// function isTwo(numInput) {
//     if (numInput === 2){
//         return true;
//     } else{
//         return false;
//     }
//
// }
// console.log(isTwo(2));


    function isTwo(num) {
        return numInput === 2
};
console.log(isTwo(random));

// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Example:
//  * > calculateTip(0.20, 20) // returns 4
//  */


//
// function calculateTip(num,per) {
//     var result = num * per +  " tip total"
//     return result;
// }
// console.log(calculateTip(100,0.20));

// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

    function calculateTip() {
        var bill = prompt("What was your total bill?");
        var tip = prompt("Enter in tip amount");
        var result = bill * tip + " tip total"
        return result;
    }

// alert("the amount to tip is: " calculateTip(tip, bill));

    console.log(calculateTip());


}());