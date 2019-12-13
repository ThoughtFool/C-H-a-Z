const enemyMoves = require("../enemy-moves");
const Goldilocks = require("./goldilocks-constructor");
const rateSpace = require("./rate-space");
const adjSpaceFinder = require("./adj-space-finder");

module.exports = goldilocksChecker = function (homeSpace, targetSpace, pawnType) {
    console.log("goldilocksChecker function fires");
    // calculate distance:
    console.log("homeSpace::");
    console.log(homeSpace);
    console.log("targetSpace::");
    console.log(targetSpace);
    let movesArray = enemyMoves(homeSpace, targetSpace);
    console.log("movesArray:");
    console.log(movesArray.length);
    let distance = movesArray.length * -1;

    console.log("distance");
    console.log(distance);

    let targetSpace_ContentString = `content-x${targetSpace[0]}-y${targetSpace[1]}`;
    let targetAdjArr = adjSpaceFinder(targetSpace_ContentString, 1);
    console.log("targetAdjArr");
    console.log(targetAdjArr);
    // for (let adj = 0; adj < 3; adj++) { // test: infinite loop?
    for (let adj = 0; adj < targetAdjArr.comb.length; adj++) {
        console.log("targetAdjArr.comb[adj]");
        console.log(targetAdjArr.comb[adj]);
        let evalTargetDiv = document.getElementById(targetAdjArr.comb[adj]);

        if (evalTargetDiv.classList.contains("empty-space")) {

            console.log(`${evalTargetDiv} is an empty space.`);
        } else {
            if (evalTargetDiv.childNodes[0].classList.contains("cyborg-pawn")) {
                console.log(`cyborg-pawn`); // add enemy/friend weights
            } else if (evalTargetDiv.childNodes[0].classList.contains("human-pawn")) {
                console.log(`human-pawn`);
            } else if (evalTargetDiv.childNodes[0].classList.contains("zombie-pawn")) {
                console.log(`zombie-pawn`);
            } else {
                console.log(`else`);
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

    let food = 2;
    let friend = 5;
    let enemy = -10;


    let goldSpace = new Goldilocks(
        pawnType,
        distance,
        food,
        friend,
        enemy,
        homeSpace,
        rateSpace
    );

    return goldSpace;

};