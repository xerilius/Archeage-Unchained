"use strict";
const calculateGold = function (gold, quantity) {
    const newGold = gold * quantity;
    return newGold;
};

const calculateSilver = function (silver, quantity) {
    const newSilver = parseFloat(silver * quantity);
    if ( newSilver >=100 ) {
        const sToG = newSilver / 100;
        return sToG;
    } else { return newSilver; }
};

const calculateCopper = function (copper, quantity) {
    const newCopper = parseFloat(copper * quantity);
    if ( newCopper >= 100 ) {
        const cToS = newCopper / 100;
        return cToS;
    } else { return newCopper; }
};

$(document).ready(function() {
    // move focus to item textbox
    $("#item").focus();
    const items = [];
    const golds = [];
    const silvers = [];
    const coppers = [];

    $("#calculate").click( function() {
        let item = $("#item").val().trim();
        let gold = parseInt( $("#gold").val().trim() );
        let silver = parseFloat( $("#silver").val().trim() );
        let copper = parseFloat( $("#copper").val().trim() );
        let quantity = $("#quantity").val().trim();
        let profit;

        if ( $("#gold").val() === "") { gold = 0; }
        if ( $("#silver").val() === "") { silver = 0; }
        if ( $("#copper").val() === "") { copper = 0; }
        
        // Item & Quantity data validation
        if (quantity === "" ) {
           $("#quantity").next().text("Enter number of items.");
        }
        if ( item === "" ) {
            $("#item").next().text("Please enter the name of the item.");
        }
        
        // combining currencies
        gold = calculateGold(gold,quantity);

        silver = calculateSilver(silver, quantity);
        if ( silver % 1 !== 0 ) {
            let newSil = parseInt(silver.toString().split(".")[1]);
            let addToG = parseInt(silver.toString().split(".")[0]);
            silver = newSil;
            gold = gold + addToG;
        }

        copper = calculateCopper(copper, quantity);
        if ( copper % 1 !== 0 ) {
            let newCo = parseInt(copper.toString().split(".")[1]);
            let addToS = parseInt(copper.toString().split(".")[0]);
            copper = newCo;
            silver = silver + addToS;
            console.log(newCo, addToS)
        }
        // display total profit
        $("#profitg").val(gold);
        $("#profits").val(silver);
        $("#profitc").val(copper);
    }); // end of click() - calculate button


    // Add to profit tracker
    $("#profit_list").click( function() {
    }); // end of click() handler of Tracker button

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