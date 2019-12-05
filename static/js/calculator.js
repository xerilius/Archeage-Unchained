"use strict";
// Runs when DOM is ready
$(document).ready(function() {
    // move focus to item textbox
    $("#item").focus();
    
    // Event handler for click event of Calculate button
    $("#calculate").click(function() {
        let item = $("#item").val().trim();
        let gold = parseInt( $("#gold").val().trim() );
        let silver = parseInt( $("#silver").val().trim() );
        let copper = parseInt( $("#copper").val().trim() );
        let quantity = $("#quantity").val().trim();
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

        if (quantity == "" ) {
           $("#quantity").next().text("Enter number of items.");
        }

        if ( item == "" ) {
            $("#item").next().text("Please enter the name of the item.")
        }

        // console.log("check # 1: ", gold, silver, copper)
        // MULTIPLY EACH G, S, C BY QUANTITY
        gold = gold * quantity
        silver = (silver * quantity)
        copper = copper * quantity

        let silverToGold = (silver / 100);
        console.log(silverToGold);
        let copperToSilver = copper / 100;
        // convert to string to split - will create list and take 0th index for before period, 1st index for after period
        let addToGold = silverToGold.toString();
        let addToSilver = copperToSilver.toString().split(".")[0];
        addToGold = parseInt(addToGold);
        addToSilver = parseInt(addToSilver);
        console.log("addToSilver: ", addToSilver);

        const newGoldAmount = gold + addToGold;
        const newSilverAmount = silver + addToSilver;
        const newCopperAmount = copper;

        console.log(newGoldAmount, newSilverAmount, newCopperAmount);



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