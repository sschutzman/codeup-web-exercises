"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var confirmed = confirm("Would you like to enter a number?");
// while(!confirmed) {
//     confirmed = confirm("Would you like to enter a number?");
// }
// if(confirmed) {
//     var num = prompt("Enter number plz");
//
//     // is the input a number?
//     if (!isNaN(num)) {
//         alert("You entered a number");
//
//         // is the number even or odd?
//         if (num % 2 === 0) {
//             alert("The number is even");
//         } else {
//             alert("The number is odd")
//         }
//         // is the number negative or positive?
//         if (num <= 0) {
//             alert("This number is negative")
//         } else {
//             alert ("This number is positive")
//         }
//         // output what the number is plus 100
//         alert(parseInt(num) + 100);
//
//         if (num >= 100) {
//             alert(num + " This number is odd");
//         } else if (num <= 50 ) {
//             alert(num + " This number is ugly");
//         }
//
//     } else {
//         alert("You didn't enter a number");
//     }
// }

//
// function isNumeric(x){
//     return !NaN(x);
// }
// function isNegative(x) {
//     return x < 0;
// }
// function isPositive(x) {
//     return x > 0;
// }
// function isEven(x) {
//     return parseFloat(x) % 2 == 0;
//
// }
// function isOdd(x) {
//     return !isEven(x);
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {

    var message = "";

    if (color === "blue") {
        message = "Blue is the color of the sky";
    } else if (color === "Yellow") {
        message = "Yellow is meh";
    } else if (color === "purple") {
        message = "Barney the dino is purple";
    } else {
        message = "Not sure about that one"
    }
    return message;
}


//         alert("blue is the color of the sky");
//     } else if (color == "Red"){
//         alert("Red is cool!");
//     } else if (color === "cyan") {
//         alert("that is not the color blue")
//     }
//
//     if (color == "red") {
//         alert("I like red");
//     } else if (color == "blue") {
//         alert("that is not the color red");
//     }else if (color == "cyan");{
//         alert("that is not the color red")
//     }
//
//     if (color == "cyan") {
//         alert("I know nothing of cyan")
//     }else if (color == )
// }

// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)]


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {

    var message = "";
    color = color.toLowerCase();
    switch (color) {
        case "blue":
            message = "Red is very red";
            break;

        case "yellow":
            message = "Yellow is mellow";
            break
        case "purple":
            message = "Barney is purple";
    }
    return message;

}

console.log(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var color = prompt("Please input a color");

alert(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculatePercentage(luckyNumber, total) {

    var discountPercentage, finalOutput;


    switch (luckyNumber) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .1;
            break;
        case 2:
            discountPercentage = .25;
            break;
        case 3:
            discountPercentage = .35;
            break;
        case 4:
            discountPercentage = .5;
            break;
        case 5:
            discountPercentage = 1;
            break;
        default:

    }

    finalOutput = total - (total * discountPercentage);


    return finalOutput;

}

console.log(calculatePercentage())


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 //  */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("Please enter your total bill.");


alert("Your lucky number is " + luckyNumber);
alert("Your total bill before the discount is: '" + totalBill);
alert("Price after discount applied is: " + calculateTotal(luckyNumber, totalBill));