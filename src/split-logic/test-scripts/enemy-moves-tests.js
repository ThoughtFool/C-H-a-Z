// module.exports = 
// adjacentArray function runs and calls enemy moves while a condition is true?
// starts with enemyMoves function and then calls adjacentArray every time until condition is met?

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

gameBoard = createSpaces(16);

enemyMoves = function (homeSpace, destin) {
    console.log("enemyMoves function fires");
    console.log("homeSpace");
    console.log(homeSpace);
    console.log("destin");
    console.log(destin);

    if (destin[0] === homeSpace[0] && destin[1] === homeSpace[1]) {
        console.log("Congratulations!");
    } else {

        ////////////////////////////////////need define:
        adjArr = adjacentSpaces(homeSpace, 1);
        // costHolder = 0;
        console.log("adjArr");
        console.log(adjArr);
        lastCostDiff = [99, 99];
        lastCostArr = [];
        costArr = [];

        /////////////////////////////// Don't need this (see above)?

        for (let i = 0; i < adjArr.length; i++) {
            currentCostArr = [
                adjArr[i][0], adjArr[i][1]
            ];
            // currentCostDiff = (destin[0] - currentCostArr[0]) + (destin[1] - currentCostArr[1]); // && not equal to destin
            
            // reversal needed here?
            currentCostDiff = [
                destin[0] - currentCostArr[0],
                destin[1] - currentCostArr[1]
            ]; // && not equal to destin

            // if (currentCostDiff === 0) {
            if (destin[0] === currentCostArr[0] && destin[1] === currentCostArr[1]) {
                console.log("Done!");
                costArr = currentCostArr;
                break;

            } else {

                // currentCostDiff = (destin[0] - currentCostArr[0]) + (destin[1] - currentCostArr[1]); // && not equal to destin
                if (currentCostDiff[0] <= lastCostDiff[0] && currentCostDiff[0] <= lastCostDiff[1]) {
                    console.log("currentCostDiff: lesser than");
                    lastCostDiff = currentCostDiff;
                    costArr = currentCostArr;
                    // };
                    console.log("costArr:");
                    console.log(costArr);
                    // enemyMoves(costArr, destin);
                } else if (currentCostDiff[0] >= lastCostDiff[0] && currentCostDiff[0] >= lastCostDiff[1]) {
                    console.log("currentCostDiff: greater than");

                } else {
                    console.log("else");
                };

            };
        };
        movesMade.push(costArr);
        enemyMoves(costArr, destin);
    };
    console.log("movesMade");
    console.log(movesMade);
    // // if (costArr[0] + homeSpace[0] === destin[0] && costArr[1] + homeSpace[1] === destin[1]) {}
    // if (homeSpace[0] === destin[0] && homeSpace[1] === destin[1]) {
    //     console.log(`mission accomplished!`);
    // } else {
    //     enemyMoves(costArr, gameBoard[8]);
    // }
    // // if (costArr[0] === homeSpace[0] && costArr[1] === homeSpace[1]) {}
};

adjacentSpaces = function (location, numOfMoves) {
    const adjacentSquares = [];

    // console.log("adjacentSpaces function fires");

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

// adjacentSpaces(gameBoard[0]);
console.log(gameBoard[0], gameBoard[8]);
enemyMoves(gameBoard[0], gameBoard[8]);