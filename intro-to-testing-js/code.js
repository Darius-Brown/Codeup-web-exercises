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

function isFive (F){
    return (F == 5)
}

function isEven (E){
    if (E % 2 === 0) {
        return true
    } else if (E !== Boolean) {
        return false
    }
}

function isVowel (V){
        if (V == "a"|| V == "A" || V =="e"|| V =="E"|| V =="i"|| V =="I"|| V =="o"|| V =="O"|| V =="U"|| V =="u") {
            return true
    } else if (V === true ) {
        return false
    } else if (V !== Boolean) {
            return false
        }
}

function add(a,b){
    return (a + b)
}





