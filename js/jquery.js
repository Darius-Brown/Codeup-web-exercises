"use strict";

$(document).ready(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE


/*
var idTag = $('#codeup').html();
    alert(idTag);

$(".blueHighlight").css('background-color', 'blue');
$('p').css('font-size', '50px');
$('p', '#codeup').css('color','yellow');
$('*').css();
*/
$('#codeup').click( function (){
    $(this).css('background-color', '#FF0');
});

$('p').dblclick( function (){
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);

/*
Remove your custom jQuery code from previous exercises.

    Add jQuery code that will change the background color of an h1 element when clicked.

    Make all paragraphs have a font size of 18px when they are double clicked.

    Set all li text color to red when the mouse is hovering; reset to black when it is not.
*/

});