"use strict";

const calculateGold = function (gold, quantity) {
    const newGold = gold * quantity;
    return newGold;
};

const calculateSilver = function (silver, quantity) {
    const newSilver = parseFloat(silver * quantity);
    return newSilver;
};

const calculateCopper = function (copper, quantity) {
    const newCopper = parseFloat(copper * quantity);
    return newCopper;
};


$(document).ready(function() {
    $("#item").focus();
    const items = [];
    const golds = [];
    const silvers = [];
    const coppers = [];

    //DISPLAY PROFIT TRACKER ITEMS 
    const displayProfits = function() {
        let totalGold = 0;
        let totalSilver = 0;
        let totalCopper = 0;

        // Calculate totals of all items combined
        for (const i in golds) {
            totalGold += parseInt(golds[i]);
        }
        for (const i in silvers) {
            totalSilver += parseInt(silvers[i]);
        }
        for (const i in coppers) {
            totalCopper += parseInt(coppers[i]);
        }
        return [totalGold, totalSilver, totalCopper]
    }; // end of displayProfits function

    const displayItems = function() {
        $("#item_tracker").val(items.join("\n"));
        $("#items").focus();
        let displayDailyProfit = displayProfits();
        $("#total_gold").val(displayDailyProfit[0])
        $("#total_silver").val(displayDailyProfit[1])
        $("#total_copper").val(displayDailyProfit[2])
    };
  

    // ADD ITEM TO TRACKER BUTTON
    $("#track_item").click( function() {
        if ($("#item").val() === "" ){
            $("#item").next().text("Please enter the name of the item.");
            $("#item").focus();
        } else {
            calculateItem();
            $("#item").next().text("");
            items.push($("#item").val() + '  ▌ ' + 
                       $("#profitg").val() + "g " + 
                       $("#profits").val() + "s " +
                       $("#profitc").val() + "c " );
            golds.push( $("#profitg").val() );
            silvers.push( $("#profits").val() );
            coppers.push( $("#profitc").val() );
            displayItems();
        }
    });

    const calculateItem = function() {
        let item = $("#item").val().trim();
        let gold = parseInt( $("#gold").val().trim() );
        let silver = parseFloat( $("#silver").val().trim() );
        let copper = parseFloat( $("#copper").val().trim() );
        let quantity = $("#quantity").val().trim();
        let profit;

        if ( $("#gold").val() === "") { gold = 0; }
        if ( $("#silver").val() === "") { silver = 0; }
        if ( $("#copper").val() === "") { copper = 0; }
        
        // Combining currencies
        gold = calculateGold(gold,quantity);
        silver = calculateSilver(silver, quantity);

        // SILVER
        if ( silver % 1 !== 0 ) {
            let newSil = parseFloat(silver.toFixed(2).split(".")[1]);
            let addToG = parseFloat(silver.toString().split(".")[0]);
            silver = newSil;
            gold = gold + addToG; 
        }
        else if (silver >= 100 && silver % 100 == 0) {
            let addToG = silver/100;
            gold = gold + addToG;
            silver = 0;
        }
        // COPPER
        copper = calculateCopper(copper, quantity);
        if ( copper % 1 !== 0 ) { // has decimal (100 doesnt count)
            let newCo = parseFloat(copper.toFixed(2).split(".")[1]);
            let addToS = parseFloat(copper.toString().split(".")[0]);
            copper = newCo;
            silver = silver + addToS;
        }
        else if (copper >= 100 && copper % 100 == 0) {
            let addToS = copper/100;
            silver = silver + addToS;
            copper = 0;
        }
        // Final check
        if (silver >= 100) {
            silver = parseFloat(silver/100)
            let addToGold = parseFloat(silver.toString().split(".")[0]);
            let newSil = parseFloat(silver.toFixed(2).split(".")[1]);
            silver = newSil;
            gold = gold + addToGold;
        }
        // Display total profit
        $("#profitg").val(gold);
        $("#profits").val(silver);
        $("#profitc").val(copper);
    };

    // CALCULATE BUTTON
    $("#calculate").click( function() {
        // Item & Quantity data validation
        if ( $("#quantity").val() === "" ) {    
           $("#quantity").next().text("Enter number of items.");
        }
        // if ( $("#item").val() === "" ) {
        //     $("#item").next().text("Please enter the name of the item.");
        // }
        else {
            calculateItem();
        }

    }); 

    // Handler for click event of Clear button
    $("#clear").click(function() {
        $("#item").val("");
        $("#item").next().text("");
        $("#gold").val("");  
        $("#silver").val("");
        $("#copper").val("");
        $("#quantity").val("");
        $("#quantity").next().text("");
        $("#profitg").val("");
        $("#profits").val("");
        $("#profitc").val("");
    }); 

    $("#clear_tracker").click(function() { 
        $("#item_tracker").val("");
        items.length = 0;
        $("#total_gold").val("");
        golds = [];
        $("#total_silver").val("");
        silvers = [];
        $("#total_copper").val("");
        coppers = [];
    });
 
}); // end ready()