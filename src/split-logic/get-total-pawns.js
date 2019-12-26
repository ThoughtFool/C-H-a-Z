const adjacentSpaces = require("./test-scripts/adj-space-finder");
const checkPawnStatus = require("./check-pawn-status");
const pawnStats = require("./pawn-stats");

module.exports = getTotalPawns = function () {
    let pawnType = "";
    let pawnTypeArr = [];
    let pawnTypeTotal = {};
    let pawnTypeObj = {};

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
        pawnTypeObj = {
            pawnTypeArr: pawnTypeArr,
            pawnTypeTotal: pawnTypeTotal
        };
    };
    return pawnTypeObj;

    // for (let t = 0; t < pawnTypeArr.length; t++) {
    //     console.log("pawnType before checkPawnStatus:");
    //     console.log(pawnTypeArr[t]);
    //     checkPawnStatus(pawnTypeObj.pawnTypeArr[t], pawnTypeObj.pawnTypeTotal);
    //     // checkPawnStatus(pawnTypeArr[t], pawnTypeTotal);
    // };
};