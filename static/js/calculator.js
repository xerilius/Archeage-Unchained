"use strict";
// Runs when DOM is ready
$(document).ready(function() {
    // move focus to item textbox
    $("#item").focus();

    // Event handler for click event of Calculate button
    $("#calculate").click(function() {
        let gold = parseInt( $("#gold").val() );
        let silver = parseInt( $("#silver").val() );
        let copper = parseInt( $("#copper").val() );

        let quantity = parseInt( $("#quantity").val() );
        let profit = parseInt( $("#profit").val() );

        // convert everything to copper ;_; 
        // then add all currency together
        // then multiply copper value to quantity amount
        // set that as total
        // convert that total into gold, silver, copper

    }); // end of click() - calculate button

    // Event handler for click event of Clear button
    $("#clear").click(function() {
        $("#item").val("");
        $("#gold").val("");  
        $("#silver").val("");
        $("#copper").val("");
        $("#quantity").val("");
        $("#profit").val("");
    }); // end of click() - clear button

}); // end ready()