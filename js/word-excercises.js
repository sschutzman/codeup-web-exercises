var pricePerDay = 3;
var littleMermaid  = 3;
var brotherBear = 5;
var hercules = 1;
var total = littleMermaid * pricePerDay + brotherBear * pricePerDay + hercules * pricePerDay;

console.log("The total for all movies rented is" + total);

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;

var total = googleHours * googleRate + amazonHours * amazonRate + facebookHours * facebookRate

// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classIsNotFull = true;
var classScheduleWorksWithStudentSchedule  = false;
var studentCanBeEnrolled = classIsNotFull && classScheduleWorksWithStudentSchedule;

if(studentCanBeEnrolled) {
    console.log("Yay, the student can join our class");
} else {
    console.log("Student cannot join the class")
}

//A product offer can be applied only if people buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
var purchasedMoreThanTwoItems = true;
var offerIsCurrentlyValid = true;
var isPremiumMemeber = true;

var offerCanBeApplied = offerIsCurrentlyValid && (purchasedMoreThanTwoItems || isPremiumMemeber);


//Use the following code to follow the instructions below:


var username = 'codeup';
var password = 'notastrongpassword';
var passwordIsLongEnough =  true;
var passwordContainsUsername = password.included (username);


//Create a variable that holds a boolean value for each of the following conditions:

//the password must be at least 5 characters
var userNameValid= username.length <= 20;

//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace
var userNameNoWhiteSpace = username.charAt(0) != " " && username.charAt(username.length - 1)
var validLogins = passwordIsLongEnough &&
                  !passwordContainsUsername &&
                  userNameValid &&

                 userNameNoWhiteSpace&&
                 passwordNoWhiteSpace;
if(validLogins) {
    console.log("Congratulations, we made your new accont")
} else {
    console.log("Please check username and password requirements")
}

var favoriteColor = promt("What is your favorite color?")