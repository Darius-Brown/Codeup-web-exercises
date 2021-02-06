"use strict";
(function() {
    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
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
    function analyzeColor(c) {
        var aColor = c;

        if (aColor === 'blue') {
            console.log("blue is the color of the ocean")
        } else if (aColor === 'red') {
            console.log("cardinals are red")
        } else if (aColor === 'cyan') {
            console.log("the sky is cyan")
        }
    } console.log(analyzeColor('cyan'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */
    function getColor() {
            return randomColor
    } console.log(getColor())


    /*
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    function randomC() {
        var gumBall = (randomColor);
        if (gumBall === 'blue') {
            console.log('Finally! I got a blue gumball!')
        } else if (gumBall === 'red' ) {
            console.log('Finally! I got a red gumball!')
        } else if (gumBall === 'orange' ) {
            console.log('Finally! I got a orange gumball!')
        } else if (gumBall === 'yellow' ) {
            console.log('Finally! I got a yellow gumball!')
        } else if (gumBall === 'indigo' ) {
            console.log('Finally! I got a indigo gumball!')
        } else if (gumBall === 'violet' ) {
            console.log('Finally! I got a violet gumball!')
        } else if (gumBall === 'green' ) {
            console.log('Finally! I got a green gumball!')
        }
    } console.log(randomC());
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
   var userColor = prompt("What is your favorite color?")
        alert(analyzeColor(userColor));


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

    var numbers = [ 0, 1, 2, 3, 4, 5];
    var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    var luckyNumber = Math.floor(Math.random() * 6);
    var total = prompt("What is the bill total?");

        function calculateTotal(x,y) {
            y = luckyNumber
            x = parseInt(total)
            if (y === 0) {
                return (x)
            } else if (y === 1) {
                return (x * .9)
            } else if (y === 2) {
                return (x * .75)
            } else if (y === 3) {
                return (x * .65)
            } else if (y === 4) {
                return (x * .50)
            } else if (y === 5) {
                return (0)
            }
        } console.log (calculateTotal());


            /**
             * TODO:
             * Uncomment the line below to generate a random number between 0 and 6.
             * Prompt the user for their total bill, then use your `calculateTotal` function
             * and alerts to display to the user what their lucky number was, what their
             l!') * price before the discount was, and what their price after the discount is.
             */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 5);
    var userBill = prompt("what is your bill total?")
    var userNumber = alert("You rolled a " + luckyNumber + "!")
    var userReturnTotal = alert("Price before your roll $" + userBill)
    var postDiscount = calculateTotal(userBill, luckyNumber)
    var userFinalAlert = alert("Based on your roll of a " + luckyNumber + " your new bill total is " + postDiscount);
    

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
             * HINT: The way we prompt for a value could be improved
             */
            var userConfirmation = confirm("Would you like to enter a number?")

            var userString = prompt("Enter any number..")

            var userNum = parseInt(userString);

            var evenOrOdd = function modTwo(){
                if (userNum % 2 === 0) {
                    alert("The number is even.")
                } else alert("The number is odd.")
            }
                alert(evenOrOdd());

            var plusHundred = alert("Your number plus 100 is " + (parseInt(userNum) + parseInt(100)))

            var posOrNeg = function posNeg(){
                if(userNum > 0){
                    alert("The number is positive.")
                } else if (userNum < 0){
                    alert("The number is negative.")
                } else if (userNum = 0) {
                    alert("the number is neither.")
            }};
                alert(posOrNeg());
        })();