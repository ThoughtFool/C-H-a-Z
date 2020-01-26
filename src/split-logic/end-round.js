const adjacentSpaces = require("./adj-space-finder");
const checkPawnStatus = require("./check-pawn-status");
const compTurn = require("./comp-turn");
const getTotalPawns = require("./get-total-pawns");
const moveEnemyPawnFunc = require("./move-enemy-pawn-func");

module.exports = endRound = async function () {

    // let turnOrder = TODO: get info from browser? local storage?
    await compTurn(true, "zombie", adjacentSpaces, moveEnemyPawnFunc);
    
    await setTimeout(function () {
            compTurn(true, "cyborg", adjacentSpaces, moveEnemyPawnFunc);

    }, 2000);


    let pawnTypeObj = getTotalPawns();
    for (let t = 0; t < pawnTypeObj.pawnTypeArr.length; t++) {
        console.log("pawnType before checkPawnStatus:");
        console.log(pawnTypeObj.pawnTypeArr[t]);
        checkPawnStatus(pawnTypeObj.pawnTypeArr[t], pawnTypeObj.pawnTypeTotal);
    };
};