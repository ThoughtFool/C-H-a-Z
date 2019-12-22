const enemyMoves = require("../enemy-moves");
const Goldilocks = require("./goldilocks-constructor");
const rateSpace = require("./rate-space");
const pawnStats = require("../pawn-stats");

// const adjSpaceFinder = require("./adj-space-finder");

module.exports = goldilocksChecker = function (homeSpace, targetSpace, pawnType, adjSpaceFinder, homespace_idString) {
    console.log("goldilocksChecker function fires");
    // calculate distance:
    console.log("homeSpace::");
    console.log(homeSpace);
    console.log("targetSpace::");
    console.log(targetSpace);

    let movesMade = [];
    let movesArray = enemyMoves(homeSpace, targetSpace, movesMade, adjSpaceFinder);
    console.log("movesArray:");
    console.log(movesArray.length);
    let distance = movesArray.length * -1;

    console.log("distance");
    console.log(distance);

    let weightHolder = {
        cyborg: [],
        human: [],
        zombie: [],
        empty: [],
        emptyElem: []
    };

    let targetSpace_ContentString = `content-x${targetSpace[0]}-y${targetSpace[1]}`;
    let targetAdjArr = adjSpaceFinder(targetSpace_ContentString, 1);
    console.log("targetAdjArr");
    console.log(targetAdjArr);
    // for (let adj = 0; adj < 3; adj++) { // test: infinite loop?
    for (let adj = 0; adj < targetAdjArr.comb.length; adj++) {
        console.log("targetAdjArr.comb[adj]");
        console.log(targetAdjArr.comb[adj]);

        let targetIndexVal = targetAdjArr.comb[adj];
        // "x1005-y1005"

        console.log("pawnStats.gameBoard");
        console.log(pawnStats.gameBoard);
        console.log("targetIndexVal");
        console.log(targetIndexVal);

        if (pawnStats.gameBoard.includes(targetIndexVal)) {
            console.log("exists on gameBoard");
            let evalTargetDiv = document.getElementById(targetIndexVal);

            if (evalTargetDiv.classList.contains("empty-space")) {
                console.log(evalTargetDiv);
                console.log(`The above is an empty space.`);
                weightHolder.empty.push(targetIndexVal); // add enemy/friend weights - TODO:
                weightHolder.emptyElem.push(evalTargetDiv); // add enemy/friend weights - TODO:

            } else if (targetIndexVal == homespace_idString) {
                console.log(evalTargetDiv);
                console.log(`The above is SELF.`);

            } else {
                if (evalTargetDiv.childNodes[0].classList.contains("cyborg-pawn")) {
                    console.log(`cyborg-pawn`);
                    weightHolder.cyborg.push(targetIndexVal); // add enemy/friend weights
                } else if (evalTargetDiv.childNodes[0].classList.contains("human-pawn")) {
                    console.log(`human-pawn`);
                    weightHolder.human.push(targetIndexVal);
                } else if (evalTargetDiv.childNodes[0].classList.contains("zombie-pawn")) {
                    console.log(`zombie-pawn`);
                    weightHolder.zombie.push(targetIndexVal);
                } else {
                    console.log(`else`);
                };
            };
        };
    };
    // for (let adj = 0; adj < targetAdjArr.comb.length; adj++) {
    //     if (pawnType === targetAdjArr.comb[adj].id) {
    //         console.log(`${pawnType} matches ${targetAdjArr.comb[adj].id}`);
    //     } else {
    //         console.log(`${pawnType} doesn't match ${targetAdjArr.comb[adj].id}`);
    //     };
    // };

    let food = 3 * weightHolder.human.length;
    let friend = 5 * weightHolder.zombie.length; // testing ONLY
    let enemy = -5 * weightHolder.cyborg.length; // testing ONLY


    let goldSpace = new Goldilocks(
        pawnType,
        distance,
        food,
        friend,
        enemy,
        homeSpace,
        homespace_idString,
        targetSpace,
        targetSpace_ContentString,
        rateSpace
    );

    goldSpace.weightHolder = weightHolder;
    console.log("goldSpace.weightHolder.empty");
    console.log(goldSpace.weightHolder.empty);
    console.log(`goldSpace.weightHolder.cyborg.length = ${goldSpace.weightHolder.cyborg.length}`);
    console.log(`goldSpace.weightHolder.human.length = ${goldSpace.weightHolder.human.length}`);
    console.log(`goldSpace.weightHolder.zombie.length = ${goldSpace.weightHolder.zombie.length}`);
    console.log("goldSpace:");
    console.log(goldSpace);

    return goldSpace; // return totalWeight of space and then replace based on other returns
};