(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */
//     var person = {
//         firstName: "Sukari ",
//         lastName: "Schutzman",
//
//         sayHello: function () {
//             return "Hello from " + this.firstName + this.lastName + "!";
//
//
//     }
//
// }
// console.log(person.sayHello());
//     // console.log(person.firstName);
//     // console.log(person.lastName);
//

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // function calculateTotal(amount) {
    //
    //     var discountPercentage, finalOutput;
    //     for (var i = 2; i < shoppers.length; i += 1) {
    //         discountPercentage = .12
    //
    //         console.log(shoppers[0].name + " spent " + discountPercentage + shoppers[0].amount);
    //         console.log(shoppers[1].name + " spent " + shoppers[1].amount);
    //         console.log(shoppers[2].name + " spent " + shoppers[2].amount);
    //
    //     }
    // }

    function calculateDiscount (amount) {
        if(amount > 200){
            return amount - (amount * .12);

        } else {
            return amount;
        }

    }

    function outputShopperInfo(arr) {
        arr.forEach(function(shopper) {
            var message = shopper.name + " spent ";
            message += shopper.amount + " and received a discount of ";
            message += shopper.amount - calculateDiscount(shopper.amount, 200, .12 );
            message += " and paid " + calculateDiscount(shopper.amount, 200, .12);
            console.log(message)
        });
    }
    outputShopperInfo(shoppers);



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var book = [
    //     {title: "The Salmon of Doubt", firstName:"Douglas ", lastName:"Adams"},
    //     {title: "A Wrinkle in Time", firstName: "Madeline ", lastName:"L'Engle"},
    //     {title: "Walkaway", firstName:"Cory ", lastName:"Doctorow"},
    // ];
    // var author ={};
    // author.firstname =
    // author.firstName =
    // author.firstName =
    //
    //
    var books = [
            {
                title: "A Wrinkle in Time",
                author : {
                    firstName: "Madeline",
                    lastName: "L'Engle"
                }
            },
            {
                title: "Walkaway",
                author : {
                    firstName: "Cory",
                    lastName: "Doctorow"
                }
            },
            {

                title: "Harry Potter and The Sorcerers Stone",
                author: {
                    firstName: "JK",
                    lastName:"Rowling"
                }
            }


        ];




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // var book = [
    //     title: "The Fault In Our Stars"
    //     author: "John Green"
    //
    // ]

    books.forEach(function (book, index) {
        var output = "";
        output += "Book # " + (index + 1);
        output += "\nTitle: " + book.title;
        output += "Author: " + book.author.firstName + book.author.lastName;
        output += "\n---";

        console.log(output);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
