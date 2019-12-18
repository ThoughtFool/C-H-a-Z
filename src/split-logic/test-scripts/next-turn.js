const pawnStats = require("../pawn-stats");
const adjSpaceFinder = require("./adj-space-finder");
// const goldilocksChecker = require("./goldilocks-checker");

module.exports = nextTurn = function (computerBool, pawnType) {
    console.log("nextTurn function fires");
    console.log("computerBool");
    console.log(computerBool);
    console.log("pawnType");
    console.log(pawnType);

    let currentGoldiPawns = [];
    //  = { // need to push this in and delcare before loop:
    //     pawnID: "",
    //     pawnLoc: ""
    // };

    if (computerBool === true) {
    // if (computerBool === true && pawnType === "cyborg") {
        console.log("pawnStats[pawnType].pawnSpawn.length");
        console.log(pawnStats[pawnType].pawnSpawn.length);

        for (let loop = 0; loop < pawnStats[pawnType].pawnSpawn.length; loop++){
            let currentPawnLoc = pawnStats[pawnType].pawnSpawn[loop].loc;
            console.log("currentPawnLoc");
            console.log(currentPawnLoc);

            let currentPawnID = pawnStats[pawnType].pawnSpawn[loop].id;
            console.log("currentPawnID");
            console.log(currentPawnID);

            let currentAdjSpaceArr = adjSpaceFinder(currentPawnLoc[0], 1, null, pawnType, "compTurn");

            // currentGoldiPawns.pawnID = currentPawnID;
            // currentGoldiPawns.pawnLoc = currentPawnLoc;
            // currentGoldiPawns.adjSpaceArray = currentAdjSpaceArr.comb;
            console.log("currentAdjSpaceArr::");
            console.log(currentAdjSpaceArr);

            currentGoldiPawns.push({
                pawnID: currentPawnID,
                pawnLoc: currentPawnLoc,
                adjSpaceArray: currentAdjSpaceArr.comb
            });
            // need TODO: create a function to change to contentID string and reverse:

            // let homespace_idString = homespace;
            // console.log("homespace_idString");
            // console.log(homespace_idString);
            // homespace = homespace.match(/\d+/g);
            // console.log("homespace after match:");
            console.log("currentGoldiPawns");
            console.log(currentGoldiPawns);

            // console.log(goldilocksChecker([1001, 1001], [1003, 1003], pawnType));
        }} else {
            console.log(`computerBool is ${computerBool}`);
        };
        return currentGoldiPawns;


    // console.log("pawnStats.cyborg.pawnSpawn");
    // console.log(pawnStats.cyborg.pawnSpawn);
    // console.log("pawnStats.human.pawnSpawn[0].loc");
    // console.log(pawnStats.human.pawnSpawn[0].loc);
    // console.log("pawnStats.zombie.pawnSpawn");
    // console.log(pawnStats.zombie.pawnSpawn);
};