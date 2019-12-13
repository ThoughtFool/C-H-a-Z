// nearbyPawn = require("./nearby-pawn");
const pawnStats = require("./pawn-stats");
const adjacentSpaces = require("./test-scripts/adj-space-finder");
// adjacentSpaces = require("./adjacent-spaces");
const checkPawnStatus = require("./check-pawn-status");
const goldilocksChecker = require("./test-scripts/goldilocks-checker");

module.exports = endRound = function () {
    let pawnType = "";
    let pawnTypeArr = [];
    let pawnTypeTotal = {};
    // testing ONLY:
    // let pawnType = "human";

    // console.log("pawnStats");
    // console.log(pawnStats);
    // console.log("pawnStats[pawnType].pawnSpawn[0]");
    // console.log(pawnStats[pawnType].pawnSpawn[0]);

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
                let pawnLoc = pawnStats[pawnType].pawnSpawn[i].loc[0];
                console.log("pawnLoc");
                console.log(pawnLoc);

                adjacentSpaces(pawnLoc, 1, null, pawnType);
            };

            pawnTypeArr.push(pawnType);
            pawnTypeTotal[pawnType] = pawnStats[pawnType].pawnSpawn.length;
        };
    };

    // // for (let i = 0; i < pawnStats.human.pawnSpawn.length; i++) {
    // for (let i = 0; i < pawnStats.pawnIdArray.human.length; i++) {
    //     pawnLoc = pawnStats.pawnIdArray.human[i];
    //     console.log("pawnLoc");
    //     console.log(pawnLoc);

    //     // TODO: need to make below access all pawns on board, not just human pawns:
    //     adjacentSpaces(pawnLoc);
    // };

    // call function to check status of pawns & evaluate if need to change allegiance:
    // testing ONLY:

    updatePercent = function () {
        // for (let t = 0; t < pawnTypeArr.length; t++) {
        console.log("updatePercent function fires:");
        console.log(pawnTypeTotal);
        let pawnTypeTotalCount = pawnTypeTotal.cyborg + pawnTypeTotal.human + pawnTypeTotal.zombie;
        // };
        // let root = document.documentElement;

        let cyborgBar = document.getElementById("cyborg-bar");
        let humanBar = document.getElementById("human-bar");
        let zombieBar = document.getElementById("zombie-bar");

        let cybPerText = document.getElementById("cyborg-percentage");
        let humPerText = document.getElementById("human-percentage");
        let zomPerText = document.getElementById("zombie-percentage");

        // set CSS property for percentages:
        cyborgBar.style.setProperty("--cyborg-health", (pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100 + "%");
        humanBar.style.setProperty("--human-health", (pawnTypeTotal.human / pawnTypeTotalCount) * 100 + "%");
        zombieBar.style.setProperty("--zombie-health", (pawnTypeTotal.zombie / pawnTypeTotalCount) * 100 + "%");

        // set inner text for percentages:
        cybPerText.innerHTML = ((pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100).toFixed();
        humPerText.innerHTML = ((pawnTypeTotal.human / pawnTypeTotalCount) * 100).toFixed();
        zomPerText.innerHTML = ((pawnTypeTotal.zombie / pawnTypeTotalCount) * 100).toFixed();
    };
    updatePercent();

    for (let t = 0; t < pawnTypeArr.length; t++) {
        console.log("pawnType before checkPawnStatus:");
        console.log(pawnTypeArr[t]);
        checkPawnStatus(pawnTypeArr[t]);
    };

    // testing ONLY:
    console.log(goldilocksChecker([1001, 1001], [1003, 1003], "zombie"));

};
