// nearbyPawn = require("./nearby-pawn");
pawnStats = require("./pawn-stats");
adjacentSpaces = require("./adjacent-spaces");
checkPawnStatus = require("./check-pawn-status");

module.exports = endRound = function () {
    let pawn_Type = "";
    let pawnTypeArr = [];
    let pawnTypeTotal = {};
    // testing ONLY:
    // let pawnType = "human";

    // console.log("pawnStats");
    // console.log(pawnStats);
    // console.log("pawnStats[pawnType].pawnSpawn[0]");
    // console.log(pawnStats[pawnType].pawnSpawn[0]);

    for (pawn_Type in pawnStats) {
        console.log("pawn_Type");
        console.log(pawn_Type);
        console.log("pawnStats[pawn_Type]");
        console.log(pawnStats[pawn_Type]);
        if (
            pawn_Type === "cyborg" ||
            pawn_Type === "human" ||
            pawn_Type === "zombie"
        ) {

            for (let i = 0; i < pawnStats[pawn_Type].pawnSpawn.length; i++) {
                let pawnLoc = pawnStats[pawn_Type].pawnSpawn[i].loc[0];
                console.log("pawnLoc");
                console.log(pawnLoc);

                adjacentSpaces(pawnLoc, pawn_Type);
            };

            pawnTypeArr.push(pawn_Type);
            pawnTypeTotal[pawn_Type] = pawnStats[pawn_Type].pawnSpawn.length;
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
        console.log("pawn_Type before checkPawnStatus:");
        console.log(pawnTypeArr[t]);
        checkPawnStatus(pawnTypeArr[t]);
    };

};
