
/**
function showMultiplicationTable(num) {
    for (var i = 1; i <= 7; i++) {
        for (num = 1; num < 70; num++) {
        } if (num % 7 === 0)
        console.log("7 x " + i + "= " + num)
    }
}
console.log(showMultiplicationTable());

//1st attempt
*/
//Exercise 2

function timesSeven(n){
    return n * 7;
}

function loopSeven(num){
    for (num = 1; num <= 10; num++){
        console.log("7 x " + num + " = " + timesSeven(num));
    }
}
console.log(loopSeven());

//Exercise 3

function isEven(num){
    return (num % 2 === 0)
}

function evenOrOdd (num){
    if (num % 2 === 0){
        return num + " is even"
    } else if (num % 2 === 1){
        return num + " is odd"
    }
}

function exerciseThree() {
    var random = Math.floor((Math.random() * 200) + 20);
    for (var i = 1; i <= 10; i++) {

        if (i < 10) {
            console.log(evenOrOdd(random++))
        }
    }
}

exerciseThree(1);


//Exercise 4
for (var outerLoop = 1;outerLoop <= 9; outerLoop++){
    var output = "";
for (var innerLoop = 1; innerLoop <= outerLoop; innerLoop ++) {
            output = output + outerLoop.toString();
        }
        console.log(output)
    }
//Exercise 5
// decrement from 100 to 0
    for (var num = 100; num > 0; num -= 5) {
        console.log(num)
    }
