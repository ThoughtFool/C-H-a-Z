const pawnStats = require("./pawn-stats");
const adjacentSpaces = require("./test-scripts/adj-space-finder");
const checkPawnStatus = require("./check-pawn-status");
const goldilocksChecker = require("./test-scripts/goldilocks-checker");
const nextTurn = require("./test-scripts/comp-turn");

module.exports = endRound = function () {
    let pawnType = "";
    let pawnTypeArr = [];
    let pawnTypeTotal = {};

    for (pawnType in pawnStats) {
        console.log("pawnType");
        console.log(pawnType);
        console.log("pawnStats[pawnType]");
        console.log(pawnStats[pawnType]);
        if (
            pawnType === "cyborg" ||
            pawnType === "human" ||
            pawnType === "zombie"
        ) {

            for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {
                console.log("pawnStats[pawnType]::");
                console.log(pawnStats[pawnType]);
                console.log(pawnStats[pawnType].pawnSpawn);
                console.log(pawnStats[pawnType].pawnSpawn[i]);
                let pawnLoc = pawnStats[pawnType].pawnSpawn[i].loc[0];
                console.log("pawnStats[pawnType].pawnSpawn[i].loc");
                console.log(pawnStats[pawnType].pawnSpawn[i].loc);
                console.log("pawnLoc");
                console.log(pawnLoc);

                adjacentSpaces(pawnLoc, 1, null, pawnType, "endRound");
            };

            pawnTypeArr.push(pawnType);
            pawnTypeTotal[pawnType] = pawnStats[pawnType].pawnSpawn.length;
        };
    };

    for (let t = 0; t < pawnTypeArr.length; t++) {
        console.log("pawnType before checkPawnStatus:");
        console.log(pawnTypeArr[t]);
        checkPawnStatus(pawnTypeArr[t], pawnTypeTotal);
    };

    setTimeout(function () {
        requestAnimationFrame(function () {
            // trigger the animation
            nextTurn(true, "cyborg", adjacentSpaces);
        });
    }, 800);

    // let turnOrder = TODO: get info from browser? local storage?
    return nextTurn(true, "zombie", adjacentSpaces);
};