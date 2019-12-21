const pawnStats = require("../pawn-stats");
const bestMove = require("./best-move");
const adjacentSpaces = require("./adj-space-finder");
const moveEnemyPawnFunc = require("./move-enemy-pawn-func");

module.exports = compTurn = function (computerBool, pawnType) {
    ///////////////////////  call function to addWeight (adjSpaces) ///////////////////////

    ///////////////////////  add weight value to each space in adjSpaces connected to pawnID ///////////////////////

    ///////////////////////  replace lower weight value / keep higher weight with spaceID ///////////////////////

    console.log("nextTurn function fires");
    console.log("computerBool");
    console.log(computerBool);
    console.log("pawnType");
    console.log(pawnType);

    let currentGoldiPawns = [];
    let goldilocksObjectHolder = {};
    let goldSpaceArr = [];
    let moveEnemyPawn = {};

    if (computerBool === true) {
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
                let currentTargetElem = document.getElementById(targetSpace_idString);
                let currentPawnHomespace = currentPawnHomespace_idString;

                if (currentTargetElem != null) {
                    if (!currentTargetElem.classList.contains("empty-space")) {
                        console.log("currentTargetElem is NOT an empty space:");
                        console.log(currentTargetElem);
                    } else {
                        console.log("currentTargetElem is an empty space:");
                        console.log(currentTargetElem);

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

                        console.log("goldSpaceArr (before):");
                        console.log(goldSpaceArr);

                        if (goldSpaceArr.length > 1) {
                            console.log("bestMove(goldSpaceArr):");
                            moveEnemyPawn = bestMove(goldSpaceArr);
                        };

                        console.log("goldSpaceArr (after):");
                        console.log(goldSpaceArr);
                    };
                };
            };
            //////////////////////////////////////////////////////////////////////////

            console.log("moveEnemyPawn[0].homespace_idString");
            console.log(moveEnemyPawn[0].homespace_idString);
            console.log("moveEnemyPawn[0].targetSpace_idString");
            console.log(moveEnemyPawn[0].targetSpace_idString);

            // TODO: check after each "zombie" bestMove
            moveEnemyPawnFunc(moveEnemyPawn[0].homespace_idString, moveEnemyPawn[0].targetSpace_idString);
            
            // return moveEnemyPawnFunc(moveEnemyPawn); TODO: break apart in next function, not here ^^^
        };

    } else {
        console.log(`computerBool is ${computerBool}`);
    };
};

//////////////////////////////////////////////////////////////////////////
// need TODO: create a function to change to contentID string and reverse:

// let homespace_idString = homespace;
// console.log("homespace_idString");
// console.log(homespace_idString);
// homespace = homespace.match(/\d+/g);
// console.log("homespace after match:");
// console.log("currentGoldiPawns");
// console.log(currentGoldiPawns);
// };