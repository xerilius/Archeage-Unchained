"use strict";

// DISPLAY PROFIT TRACKER ITEMS 
const displayProfits = function () {
    totalGold = 0;
    totalSilver = 0;
    totalCopper = 0;

    // Calculate totals of all items combined
    for (const i in golds) {
        totalGold += parseInt(golds[i]);
    }
    for (const i in silver) {
        totalSilver += parseInt(silver[i]);
    }
    for (const i in copper) {
        totalCopper += parseInt(copper[i]);
    }
    
    // display item and profit
    let itemAndProfit = "";
    $("#tracker_total").val(totalProfits)

}; // end of displayProfits function

// PROFIT TRACKER
$("#profit_list").click( function() {
    items.push( $("#item").val() );
    golds.push( $("#profitg").val() );
    silvers.push( $("#profits").val() );
    coppers.push( $("#profitc").val() );
}); // end of click() handler of Tracker button