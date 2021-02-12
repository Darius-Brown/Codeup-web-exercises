//Exercise 2

function timesSeven(n){
    return n * 7;
}

function showMultiplicationTable(num){
    for (num = 1; num <= 10; num++){
        console.log("7 x " + num + " = " + timesSeven(num));
    }
}
console.log(showMultiplicationTable());

//Exercise 3

function evenOrOdd (num){
    if (num % 2 === 0){
        return num + " is even"
    } else if (num % 2 === 1){
        return num + " is odd"
    }
}

function exerciseThree(num) {
    var random = Math.floor((Math.random() * 200) + 20);
    for (var x = 1; x <= 5; x++) {
        num = 0;
        for(var y = 1; y <= x; y++) {
            num = num + random;
            var result = console.log(evenOrOdd(num));
        }
}
}
console.log(exerciseThree(0));



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
