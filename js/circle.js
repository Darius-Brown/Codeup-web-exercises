(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
          return Math.PI * Math.pow(this.radius, 2);
            // hint: area = pi * radius^2
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true) {
                return Math.round(this.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("area is " + circle.getArea());
    circle.logInfo(false);
    console.log("Area of circle rounded");

    console.log(circle.logInfo(true);
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();