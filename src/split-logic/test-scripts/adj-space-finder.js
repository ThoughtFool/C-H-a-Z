// const adjacentSquares = [];
const adjacentSpacesHolder = [];
// const firstSquare = {};
// firstSquare.x = 1;
// firstSquare.y = 1;
// const friendOrFoe = require("../friend-or-foe");
const friendOrFoe = require("./friend-or-foe-test");

const adjContentIDStringArr = require("./adj-contentID-string-array");
const goldilocksChecker = require("./goldilocks-checker");


const movesMade = [];

module.exports = function adjacentSpaces (homespace, availableMoves, destination, pawnType, message) {
    console.log("adjacentSpaces function fires");

    const adjacentSquares = [];

//////////////////////////////////////////////////////////
// TODO: export this into a function?

    let homespace_idString = homespace;
    console.log("homespace_idString");
    console.log(homespace_idString);
    homespace = homespace.match(/\d+/g);
    console.log("homespace after match:");
    console.log(homespace);


    let adjacentSpaceObj = {
        homespace: homespace,
        homespace_idString: homespace_idString,
        x: [],
        y: [],
        comb: []
    };

    x_Loc = homespace[0] = parseInt(homespace[0]);
    console.log("x_Loc");
    console.log(x_Loc);

    y_Loc = homespace[1] = parseInt(homespace[1]);
    console.log("y_Loc");
    console.log(y_Loc);

//////////////////////////////////////////////////////////

    for (let q = 0; q <= availableMoves; q++) {

        if (q > 0) {
            adjacentSpaceObj.x.push(
                x_Loc + q,
                x_Loc - q);

            adjacentSpaceObj.y.push(
                y_Loc + q,
                y_Loc - q);
        } else {
            adjacentSpaceObj.x.push(x_Loc + q);
            adjacentSpaceObj.y.push(y_Loc + q);
        };
    };

    console.log("adjacentSpaceObj");
    console.log(adjacentSpaceObj);
    
//////////////////////////////////////////////////////////

adjacentSpaceObj = adjContentIDStringArr(homespace, adjacentSpaceObj, availableMoves);

    console.log("adjacentSpaceObj.comb");
    console.log(adjacentSpaceObj.comb);

    if (message === "endRound") {
        return friendOrFoe(homespace_idString, adjacentSpaceObj.comb, pawnType);
    } else if (message === "compTurn") {
        console.log("compTurn msg in adjSpacesFinder");
        return adjacentSpaceObj;
    } else {
        return adjacentSpaceObj;
    }
    // return friendOrFoe(idString, adjacentSquares, pawnType);
};

// let homeSpace = [3, 3];
// let totNumMoves = 2;

// adjacentSpaces(homeSpace, totNumMoves, null, null);