// module.exports = 
// adjacentArray function runs and calls enemy moves while a condition is true?
// starts with enemyMoves function and then calls adjacentArray every time until condition is met?
// const goldilocks = require("./goldilocks-zone");
const adjSpaceFinder = require("./adj-space-finder");
const adjacentSquares = [];
const adjacentSpacesHolder = [];
const firstSquare = {};
firstSquare.x = 1;
firstSquare.y = 1;

const movesMade = [];

// create the coords for dynamic game board:
createSpaces = function (totSquares) {
    const squareRoot = Math.sqrt(totSquares);
    const boardSpaces = [];
    for (let x = 1; x <= squareRoot; x++) {
        for (let y = 1; y <= squareRoot; y++) {
            boardSpaces.push([x, y]);
        };
    };
    return boardSpaces;
};

gameBoard = createSpaces(9);

const enemyMoves = function (homeSpace, destination) {
    console.log("enemyMoves function fires");

    if (typeof destination == "undefined") {
        console.log("Error: The destination exists beyond the dimensions of the board.")
    } else {
        console.log("homeSpace");
        console.log(homeSpace);
        console.log("destination");
        console.log(destination);

        if (destination[0] === homeSpace[0] && destination[1] === homeSpace[1]) {
            console.log("Congratulations, you've arrived!");
        } else {

            adjArr = adjSpaceFinder(homeSpace, 1);
            // adjArr = adjacentSpaces(homeSpace);
            last_Diff = null;
            last_Arr = null;

            for (let i = 0; i < adjArr.length; i++) {
                current_Array = [
                    adjArr[i][0], adjArr[i][1]
                ];

                main_Diff = [
                    destination[0] - homeSpace[0],
                    destination[1] - homeSpace[1]
                ];

                current_Diff = [
                    destination[0] - current_Array[0],
                    destination[1] - current_Array[1]
                ];

                if (last_Diff == null) {
                    last_Diff = main_Diff;
                };

                if (last_Arr == null) {
                    last_Arr = homeSpace;
                };

                if (destination[0] === current_Array[0] && destination[1] === current_Array[1]) {
                    console.log("Done!");
                    last_Arr = current_Array;
                    break;

                    // negative difference:
                } else if (current_Diff[0] < 0 || current_Diff[1] < 0) {
                    console.log(`negative current difference: ${current_Diff}, current_Array = ${current_Array}`);
                    if (current_Diff[0] >= last_Diff[0] && current_Diff[1] >= last_Diff[1]) {
                        console.log("current_Diff: GREATER than");

                        last_Diff = current_Diff;
                        last_Arr = current_Array;

                    } else {
                        console.log("else...");
                        last_Diff = last_Diff;
                        last_Arr = last_Arr;
                    };

                    // negative difference:
                } else if (current_Diff[0] > 0 || current_Diff[1] > 0) {
                    console.log(`positive current difference: ${current_Diff}, current_Array = ${current_Array}`);
                    if (current_Diff[0] <= last_Diff[0] && current_Diff[1] <= last_Diff[1]) {
                        console.log("current_Diff: LESSER than");

                        last_Diff = current_Diff;
                        last_Arr = current_Array;

                    } else {
                        console.log("else...");
                        last_Diff = last_Diff;
                        last_Arr = last_Arr;
                    };
                };
            };
            movesMade.push(last_Arr);
            enemyMoves(last_Arr, destination);
        };
        return movesMade;
    };
};

adjacentSpaces = function (location) {
    console.log("adjacentSpaces function fires");

    const adjacentSquares = [];

    adjacentSpaceObj = {};
    // console.log("location");
    // console.log(location);

    x_Loc = parseInt(location[0]);
    // console.log("x_Loc");
    // console.log(x_Loc);

    y_Loc = parseInt(location[1]);
    // console.log("y_Loc");
    // console.log(y_Loc);


    adjacentSpaceObj = {
        x: [
            x_Loc + 0,
            x_Loc + 1,
            x_Loc - 1
        ],
        y: [
            y_Loc + 0,
            y_Loc + 1,
            y_Loc - 1
        ]
    };

    for (let i = 0; i < 3; i++) {
        coord_x = adjacentSpaceObj.x[i]; // ???

        for (let j = 0; j < 3; j++) {
            coord_y = adjacentSpaceObj.y[j]; // ???
            contentID = [coord_x, coord_y];
            // contentID = `content-x${coord_x}-y${coord_y}`;
            // console.log("contentID");
            // console.log(contentID);
            // console.log("location");
            // console.log(location);
            if (contentID[0] >= firstSquare.x && contentID[1] >= firstSquare.y) {
                if (contentID[0] === location[0] && contentID[1] === location[1]) {
                    // console.log(`homeSpace: ${contentID}`);
                } else {
                    // console.log(`${contentID} != ${location}`);
                    adjacentSquares.push(contentID); // ???
                };
            };
        };
    };

    return adjacentSquares;
};

const rateSpace = function (move, food, friend, enemy) {
    console.log("rateSpace method fires");

    let weight = move + food + friend + enemy;

    return weight;
};

// console.log(gameBoard[8], gameBoard[0]);
// // movesArray = enemyMoves(gameBoard[624], gameBoard[0]);
// movesArray = enemyMoves(gameBoard[0], gameBoard[7]);
// console.log("movesArray");
// console.log(movesArray);

const Goldilocks = function (type, move, food, friend, enemy, homeSpace, rateSpace) {

        this.move = move;
        this.food = food;
        this.friend = friend;
        this.enemy = enemy;
        this.type = type;
        this.homeSpace = homeSpace;
        this.weight = rateSpace(
            move,
            food,
            friend,
            enemy
        );
};

const goldilocksChecker = function (homeSpace, targetSpace, pawnType) {
    // calculate distance:
    let movesArray = enemyMoves(homeSpace, targetSpace);
    console.log("movesArray:");
    console.log(movesArray.length);
    let distance = movesArray.length * -1;

    console.log("distance");
    console.log(distance);

    let targetAdjArr = adjacentSpaces(targetSpace);
    for (let adj = 0; adj < targetAdjArr.length; adj++) {
        if (pawnType === targetAdjArr[adj].id) {
            console.log(`${pawnType} matches ${targetAdjArr[adj].id}`);
        } else {
            console.log(`${pawnType} doesn't match ${targetAdjArr[adj].id}`);
        };
    };

    let food = 2;
    let friend = 5;
    let enemy = - 10;


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
console.log(goldilocksChecker(gameBoard[0], gameBoard[7], "zombie"));