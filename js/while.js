var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i)
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
console.log("Starting inventory is " + allCones + " number of cones");

do {
    var coneOrder = Math.floor(Math.random() * 5) + 1;
    if (coneOrder <= allCones) {
        console.log("The customer ordered " + coneOrder + " number of cones.");
        allCones = allCones - coneOrder;
        console.log("I sold " + coneOrder + " right now");
        console.log("My inventory is " + allCones);
    } else {
        console.log("Sorry I don't have " + coneOrder + " number of cones. Next Customer.")

    }
} while (allCones > 0);
console.log("Yay no more ice creams");

