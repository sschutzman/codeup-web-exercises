// Bonus 1
//
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case

function favoriteDay(input) {
    var input = prompt("What is your favorite day of the week?")
    var message = "";

    if (input === "thursday") {
        message = "Thursday is almost Friday";
    } else if (input === "friday") {
        message = "Friday, more like fri-yay";
    } else if (input === "wednesday") {
        message = "Wednesday is humpday woooo";
    } else if (input === "monday") {
        message = "Garfield hates mondays and so do I.";
    } else if (input === "tuesday") {
        message = "Tuesday is just another name for monday";
    } else if (input === "saturday") {
        message = "Saturdays are always nice"
    } else if (input === "sunday") {
        message = "Sunday funday!"
    }
    if (input === "friday") {
        message = "Friday, more like fri-yay";
    } else if (input === "thursday") {
        message = "Thursday is almost Friday";
    } else if

        }

//
//     Bonus 2
//
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator
//
// Bonus 3
//
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months