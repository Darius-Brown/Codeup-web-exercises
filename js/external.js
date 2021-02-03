"use strict";
        alert("Welcome to the website.");
    var favColor = prompt("What is your favorite color?");
        alert("Great! " + favColor + " is my favorite color too!");

    var mermaid =parseInt(prompt("How many days did you rent The Little Mermaid?"));

    var bear =parseInt(prompt("How many days did you rent Brother Bear?"));

    var herc =parseInt(prompt("How many days did you rent Hercules?"));

        alert("The total price is" + (parseInt(mermaid *3)  + parseInt(bear *3) + parseInt(herc *3)));

    var hoursGoogle = parseInt(prompt("How many hours did you work at Google"));

    var hoursAmazon = parseInt(prompt("How many hours did you work at Amazon"));

    var hoursFacebook = parseInt(prompt("How many hours did you work at Facebook"));

    var payGoogle = parseInt(hoursGoogle) *400;

    var payAmazon = parseInt(hoursAmazon) *380;

    var payFacebook = parseInt(hoursFacebook) *350;

    var totalPay;
    totalPay = parseInt(payFacebook) + parseInt(payAmazon)+ parseInt(payGoogle);
        alert("Your total pay this week is $" + totalPay);

    var classFull = prompt("Are there any free seats available?");
    var free = prompt("Is you schedule free in the designated time slot?");
    var enrollment = alert("Checking if you can enroll... the answer is " + (classFull && free));

    var itemCount = confirm("Is the total number of items in cart 2 or more?");
    var expired = confirm("Are the items withing expiration date range");
    var premium = confirm("Are you a premium member?");

    var applyDiscount = ((premium || itemCount) && expired);

    alert("Successfully applied discount..? " + applyDiscount);






