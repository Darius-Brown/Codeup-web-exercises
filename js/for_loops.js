

console.log("hello loops");

//

function showMultiplicationTable(num){
    for (var i = 1 ; i <= 10; i++){
        //
        console.log(num +" x " + i + " = " + (num * i));
    }
}

showMultiplicationTable(7);

console.log(randomNumber);

for (var i = 1; i <= 10; i++){
    var randomNumber = Math.floor(Math.random() * (181) + 20);
    if(randomNumber % 2 === 0){
        console.log("Your number "+ randomNumber + " is even.")
    }else{
        console.log("Your number "+ randomNumber + " is odd.")
    }
}
//x = outer loop
//y = inner loop

for (var x = 1; x <=9; x++){
    var output = "";
    for (var y = 1; y<= x; y++){
        output = output + x;
    }
    console.log(output);
}
//decrementing by 5

for (var i = 100; i>=5; i -= 5){
    console.log(i)
}
