const isSquare = require("./isSquare");
const MakeSquare = require("./constructor");
const createPawn = require("./create-pawn");
const pawnStats = require("./pawn-stats");

module.exports = createBoard = function (numberOfSpaces) {

    if (isSquare(numberOfSpaces)) {
        boardHolder = document.getElementById("board-holder");
        console.log("numberOfSpaces is square");
        let gameBoard = [];
        baseNum = 1000;
        console.log("square root of " + numberOfSpaces);
        sqRootNum = Math.sqrt(numberOfSpaces);
        console.log(sqRootNum);

        // create constructor object:
        for (let i = 1; i <= sqRootNum; i++) {
            // create a row (# based on sqRootNum), then append new divs (# based on sqRootNum):

            // create rows:
            newRow = document.createElement("div");
            rowID = `row-${i}`;
            newRow.setAttribute("id", rowID);
            boardHolder.appendChild(newRow);
            boardRow = document.getElementById(rowID);
            boardRow.setAttribute("class", "row");
            boardRow.classList.add("gamespace-row");
            // newRow.setAttribute("class", "row").setAttribute("id", rowID);
            // TODO: reduce line below by adding setAttribute on same line as above?

            for (let j = 1; j <= sqRootNum; j++) {
                let square = new MakeSquare(baseNum + j, baseNum + i, Math.floor(Math.random() * 10) + 1);
                gameBoard.push(square);

                // create divs in rows:
                squareDiv = document.createElement("div");
                squareId = `x${baseNum + j}-y${baseNum + i}`;
                squareDiv.setAttribute("id", squareId);
                boardRow.appendChild(squareDiv);
                newSquare = document.getElementById(squareId);
                newSquare.classList.add("dyna-square");

                // pawnStats.gameBoard.push(squareId);`

                // divide the size of squares evenly:
                percentageSize = 1 / sqRootNum * 100;
                console.log(percentageSize);
                newSquare.style.width = `${percentageSize}%`;
                /////////////////////////////////////////////
                squareHeight = 200;
                contentInSquareDiv = document.createElement("div");
                contentId = `content-${squareId}`;
                contentInSquareDiv.setAttribute("id", contentId);
                newSquare.appendChild(contentInSquareDiv);
                newContentSquare = document.getElementById(contentId);
                newContentSquare.classList.add("dyna-square-content");
                newContentSquare.classList.add("empty-space");
                pawnStats.gameBoard.push(contentId);


            };
        };

        // TODO: squareOne = {
        //     x: 1000, // only change place value for the zeroes
        //     y: 1000 // if greater than 1999, then too many squares?
        // };
        console.log("gameBoard");
        console.log(gameBoard);

    } else {
        if (numberOfSpaces < 9) {
            console.log("numberOfSpaces is NOT >= 9");
        } else {
            console.log("numberOfSpaces is NOT square");
        };
    };

    // TODO: create a counter function or object to hold number of pawns (created, destroyed, limits, transfers using pawn id):
};