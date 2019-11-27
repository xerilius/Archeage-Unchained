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
       
        // convert everything to copper ;_; 
        const g2c = gold * 10000
        const s2c = silver * 100
        // then add all currency together
        const copperTotal = g2c + s2c + copper;
        // then multiply copper value to quantity amount
        profit = copperTotal * quantity;
        console.log(profit)
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