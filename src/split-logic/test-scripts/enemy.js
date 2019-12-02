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

gameBoard = createSpaces(25);

const enemyMoves = function (homeSpace, destin) {
    console.log("enemyMoves function fires");
    console.log("homeSpace");
    console.log(homeSpace);
    console.log("destin");
    console.log(destin);
    // console.log("lastDifference");
    // console.log(lastDifference);

    if (destin[0] === homeSpace[0] && destin[1] === homeSpace[1]) {
        console.log("Congratulations, you've arrived!");
    } else {

        ////////////////////////////////////need define:
        adjArr = adjacentSpaces(homeSpace);
        // costHolder = 0;
        // console.log("adjArr");
        // console.log(adjArr);
        last_Diff = null;
        last_Arr = null;

        /////////////////////////////// Don't need this (see above)?

        for (let i = 0; i < adjArr.length; i++) {
            current_Array = [
                adjArr[i][0], adjArr[i][1]
            ];
            // console.log("current_Array:");
            // console.log(current_Array);

            main_Diff = [
                destin[0] - homeSpace[0],
                destin[1] - homeSpace[1]
            ];

            current_Diff = [
                destin[0] - current_Array[0],
                destin[1] - current_Array[1]
            ];            
            // console.log("current_Diff:");
            // console.log(current_Diff);

            if (last_Diff == null) {
                last_Diff = main_Diff;
                // console.log(last_Diff);
            };

            if (last_Arr == null) {
                last_Arr = homeSpace;
                // console.log(last_Arr);
            };

            if (destin[0] === current_Array[0] && destin[1] === current_Array[1]) {
                console.log("Done!");
                last_Arr = current_Array;
                break;

                // negative difference:
            } else if (current_Diff[0] < 0 || current_Diff[1] < 0) {
                console.log(`negative current difference: ${current_Diff}, current_Array = ${current_Array}`);
                if (current_Diff[0] >= last_Diff[0] && current_Diff[1] >= last_Diff[1]) {
                    console.log("current_Diff: GREATER than");

                    // console.log("current_Diff");
                    // console.log(current_Diff);
                    // console.log("last_Diff");
                    // console.log(last_Diff);
                    // console.log("current_Array:");
                    // console.log(current_Array);
                    // console.log("last_Arr:");
                    // console.log(last_Arr);

                    last_Diff = current_Diff;
                    last_Arr = current_Array;

                    // console.log("last_Arr (after):");
                    // console.log(last_Arr);
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

                    // console.log("current_Diff");
                    // console.log(current_Diff);
                    // console.log("last_Diff");
                    // console.log(last_Diff);
                    // console.log("current_Array:");
                    // console.log(current_Array);
                    // console.log("last_Arr:");
                    // console.log(last_Arr);

                    last_Diff = current_Diff;
                    last_Arr = current_Array;

                    // console.log("last_Arr (after):");
                    // console.log(last_Arr);
                } else {
                    console.log("else...");
                    last_Diff = last_Diff;
                    last_Arr = last_Arr;
                };
            };
        };
        movesMade.push(last_Arr);
        enemyMoves(last_Arr, destin, last_Diff);
    };
    return movesMade;
};

adjacentSpaces = function (location) {
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
console.log(gameBoard[8], gameBoard[0]);
movesArray = enemyMoves(gameBoard[24], gameBoard[0]);
console.log("movesArray");
console.log(movesArray);
// console.log(gameBoard[0], gameBoard[8]);
// enemyMoves(gameBoard[0], gameBoard[8]);