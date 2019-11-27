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
        let profit;
        
        if ( $("#gold").val() == "") {
            gold = 0;
        }
        if ( $("#silver").val() == "") {
            silver = 0;
        }
        if ( $("#copper").val() == "") {
            copper = 0;
        }

        
        // MULTIPLY EACH G, S, C BY QUANTITY
        gold = gold * quantity
        silver = silver * quantity
        copper = copper * quantity

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