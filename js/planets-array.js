"use strict";

(function(){

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");
    console.log(planetsArray)
// function that uses reverse to get last element

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work




     /**
    function reversePlanets(array){
        var versed = array.reverse();
        return versed[0];
    }
console.log(reversePlanets(planetsArray));

 // from the lecture
 function makeArray(string) {
    var output= [];
    var planetArray = string.split("");

    planetArray.forEach(function(str){
        var planetArr = str.split(",");
        output.push(planetArr.join(""));
    });
    return output;
}
     var newArr = makeArray(planetsString);

     for (var i = 0; i < newArr.length; i++){
         console.log(newArr[i]);
     }
*/
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();