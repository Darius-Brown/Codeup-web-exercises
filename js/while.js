var number= 2

while (number <= 65536){
    console.log(number);
    number *= 2;
}
//Do whle exercise

var aCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + aCones + " cones.")

do {
    var requestedCones = Math.floor(Math.random() * 5) + 1;

    if (requestedCones <= aCones){
        // this is sell cones
        aCones = aCones - requestedCones;
        console.log("You sold " + requestedCones + " cones, and have " + aCones +" cones left to sell.")

    }else{
        //this is not enough cones to sell
        console.log("Sorry, I don't have " + requestedCones + " cones, I only have " + aCones);
    }

}while (aCones > 0)

console.log("We sold out on cones today!");
