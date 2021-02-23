"use strict";
var userNum = Number(prompt("Give me an odd number between 1 and 50"));
function InRange(num){
    return num >= 1 && num <= 50;
}
function Even(num){
    return num % 2 === 0;
}
while (true){
    if (!Even(userNum) && InRange(userNum)){
        break;
    }
    userNum = Number(prompt("Give me an odd number between 1 and 50"));
}
console.log("Number to skip is: " + userNum);

for (var i = 1; i <= 49; i += 2){
    if (i === userNum){
        console.log("Yikes! Skipping number: " + userNum);
        continue
    }
    console.log("Here is an odd number: " + i);
}
