const pawnStats = require("../pawn-stats");
const adjacentSpaces = require("./adj-space-finder");

module.exports = compTurn = function (computerBool, pawnType) {



    ///////////////////////  call function to addWeight (adjSpaces) ///////////////////////

    ///////////////////////  add weight value to each space in adjSpaces connected to pawnID ///////////////////////

    ///////////////////////  replace lower weight value / keep higher weight with spaceID ///////////////////////

    // const pawnStats = require("../pawn-stats");
    // const adjacentSpaces = require("./adj-space-finder");
    // // const goldilocksChecker = require("./goldilocks-checker");

    // module.exports = nextTurn = function (computerBool, pawnType) {
    console.log("nextTurn function fires");
    console.log("computerBool");
    console.log(computerBool);
    console.log("pawnType");
    console.log(pawnType);

    let currentGoldiPawns = [];
    let goldilocksObjectHolder = {};
    let goldSpaceArr = [];


    if (computerBool === true) {
        // if (computerBool === true && pawnType === "cyborg") {
        console.log("pawnStats[pawnType].pawnSpawn.length");
        console.log(pawnStats[pawnType].pawnSpawn.length);

        // TODO: create an if conditional that errors out if the pawnType doesn't exist or equals zero:

        ///////////////////////  loop through pawnIDs ///////////////////////
        for (let loop = 0; loop < pawnStats[pawnType].pawnSpawn.length; loop++) {
            let currentPawnLoc = pawnStats[pawnType].pawnSpawn[loop].loc;
            let currentPawnID = pawnStats[pawnType].pawnSpawn[loop].id;

            /////////////////////// 1) get pawnIDs ///////////////////////
            console.log("currentPawnID");
            console.log(currentPawnID);

            console.log("currentPawnLoc");
            console.log(currentPawnLoc);

            ///////////////////////  get adjacentSpaces from each pawnID ///////////////////////
            let currentAdjSpaceArr = adjacentSpaces(currentPawnLoc[0], 1, null, pawnType, "compTurn");

            ///////////////////////  loop through adjacentSpaces ///////////////////////
            // for (let cur = 0; cur < currentAdjSpaceArr.comb.length; cur++) {
            //     console.log(goldilocksChecker()); // homeSpace, targetSpace, pawnType
            // }

            // currentGoldiPawns.pawnID = currentPawnID;
            // currentGoldiPawns.pawnLoc = currentPawnLoc;
            // currentGoldiPawns.adjSpaceArray = currentAdjSpaceArr.comb;
            for (let adj = 0; adj < currentAdjSpaceArr.comb.length; adj++) {
                console.log("before goldilocksChecker is called");
                console.log(`currentAdjSpaceArr.comb.length = ${currentAdjSpaceArr.comb.length}`);

                let targetSpace_idString = currentAdjSpaceArr.comb[adj];
                let targetSpace = targetSpace_idString;
                console.log("targetSpace_idString");
                console.log(targetSpace_idString);
                targetSpace = targetSpace.match(/\d+/g);
                console.log("targetSpace after match:");
                console.log(targetSpace);
                targetSpace = [parseInt(targetSpace[0]), parseInt(targetSpace[1])];

                //////////////////////////////////////////////////////////////////////////

                let currentPawnHomespace_idString = currentPawnLoc[0];
                let currentPawnHomespace = currentPawnHomespace_idString;
                console.log("currentPawnHomespace_idString");
                console.log(currentPawnHomespace_idString);
                currentPawnHomespace = currentPawnHomespace.match(/\d+/g);
                console.log("currentPawnHomespace after match:");
                console.log(currentPawnHomespace);
                currentPawnHomespace = [parseInt(currentPawnHomespace[0]), parseInt(currentPawnHomespace[1])];

                // console.log(goldilocksChecker(currentPawnHomespace, targetSpace, pawnType, adjacentSpaces, currentPawnHomespace_idString)); // homeSpace, targetSpace, pawnType
                // create a function to compare returned values:
                goldilocksObjectHolder = goldilocksChecker(currentPawnHomespace, targetSpace, pawnType, adjacentSpaces, currentPawnHomespace_idString);
                goldSpaceArr.push(goldilocksObjectHolder);

                // create a function to move pawn - document.getElementById(adjacentSpaceObj.pawnID):
            };

            console.log("currentAdjSpaceArr::");
            console.log(currentAdjSpaceArr);

            console.log(goldSpaceArr);
            // for (let g = 0; g < goldSpaceArr.length; g++) {
            //     if (goldSpaceArr[g + 1] != null) {
            //         if (goldSpaceArr[g] > goldSpaceArr[g + 1]) {
            //             goldSpaceArr.splice(g + 1, 1);
            //         } else {
            //             goldSpaceArr.splice(g, 1);
            //         };
            //     };
            // };

            const bestMove = function (goldSpaceArr) {
                for (let g = 1; g < goldSpaceArr.length; g++) {
                    if (goldSpaceArr[g - 1].weight != null) {
                        if (goldSpaceArr[g].weight > goldSpaceArr[g-1].weight) {
                            goldSpaceArr.splice((g - 1), 1);
                            console.log("g is bigger");
                        } else {
                            goldSpaceArr.splice(g, 1);
                            console.log("g - 1 is bigger");
                        };
                    };
                };
                return goldSpaceArr;
            };

            console.log("goldSpaceArr");
            console.log(goldSpaceArr);

            console.log("bestMove(goldSpaceArr)");
            console.log(bestMove(goldSpaceArr));


            // currentGoldiPawns.push({
            //     pawnID: currentPawnID,
            //     pawnLoc: currentPawnLoc,
            //     adjSpaceArray: currentAdjSpaceArr.comb
            // });
            // need TODO: create a function to change to contentID string and reverse:

            // let homespace_idString = homespace;
            // console.log("homespace_idString");
            // console.log(homespace_idString);
            // homespace = homespace.match(/\d+/g);
            // console.log("homespace after match:");
            // console.log("currentGoldiPawns");
            // console.log(currentGoldiPawns);

            // console.log(goldilocksChecker([1001, 1001], [1003, 1003], pawnType));
        }
    } else {
        console.log(`computerBool is ${computerBool}`);
    };
    // return currentGoldiPawns;

};
// };