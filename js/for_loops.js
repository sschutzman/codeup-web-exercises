function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        console.log((input) + " x " + (i) + " = " + (i * input))
    }
}

showMultiplicationTable(10);


for (var i = 1; i <= 10; i++) {

    var numbers = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    if (numbers % 2 == 0) {
        console.log(numbers + " is even");
    } else {
        console.log(numbers + " is odd");
    }
}


for (var i = 1; i < 10; i++) {
    var string = i.toString();
    console.log(string.repeat(i));
}

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}