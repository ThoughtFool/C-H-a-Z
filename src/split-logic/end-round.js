// nearbyPawn = require("./nearby-pawn");
pawnStats = require("./pawn-stats");
adjacentSpaces = require("./adjacent-spaces");
checkPawnStatus = require("./check-pawn-status");

module.exports = endRound = function () {

    // for (let i = 0; i < pawnStats.human.pawnSpawn.length; i++) {
    for (let i = 0; i < pawnStats.pawnIdArray.human.length; i++) {
        pawnKey = pawnStats.pawnIdArray.human[i];
        console.log("pawnKey");
        console.log(pawnKey);
        
        // TODO: need to make below access all pawns on board, not just human pawns:
        adjacentSpaces(pawnKey); 
    };
    
    // call function to check status of pawns & evaluate if need to change allegiance:

    checkPawnStatus();
};