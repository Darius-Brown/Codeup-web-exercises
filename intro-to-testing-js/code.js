// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// helloWorld function
function sayHello(s) {
    if (s === String || s === null || s === Number || s === ""){
        return ("Hello, " + s + "!")
    } else if (s === true || s === false ) {
        return ("Hello, World!")
    } else return ("Hello, " + s + "!")
}



