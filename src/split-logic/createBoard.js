isSquare = require("./isSquare");
MakeSquare = require("./constructor");
createPawn = require("./create-pawn");

module.exports = createBoard = function (numberOfSpaces) {
    if (isSquare(numberOfSpaces)) {
        boardHolder = document.getElementById("board-holder");
        // boardWidth = window.innerWidth;
        // boardHolder.style.height = boardWidth;
        console.log("numberOfSpaces is square");
        gameBoard = [];
        baseNum = 1000;
        console.log("square root of " + numberOfSpaces);
        sqRootNum = Math.sqrt(numberOfSpaces);
        console.log(sqRootNum);

        // create constructor object:
        for (let i = 1; i <= sqRootNum; i++) {
            // create a row (# based on sqRootNum), then append new divs (# based on sqRootNum):

            // TODO: create rows:
            newRow = document.createElement("div");
            rowID = `row-${i}`;
            newRow.setAttribute("id", rowID);
            boardHolder.appendChild(newRow);
            boardRow = document.getElementById(rowID);
            boardRow.setAttribute("class", "row");
            // newRow.setAttribute("class", "row").setAttribute("id", rowID);
            // TODO: reduce line below by adding setAttribute on same line as above?

            for (let j = 1; j <= sqRootNum; j++) {
                let square = new MakeSquare(baseNum + j, baseNum + i, Math.floor(Math.random() * 10) + 1);
                gameBoard.push(square);

                // TODO: create divs in rows:
                squareDiv = document.createElement("div");
                squareId = `x${baseNum + j}-y${baseNum + i}`;
                squareDiv.setAttribute("id", squareId);
                boardRow.appendChild(squareDiv);
                newSquare = document.getElementById(squareId);
                newSquare.classList.add("dyna-square");

                // divide the size of squares evenly:
                percentageSize = 1/sqRootNum * 100;
                console.log(percentageSize);
                newSquare.style.width = `${percentageSize}%`;
                // var boardWidth = window.innerWidth;
                // console.log("boardWidth");
                // console.log(boardWidth);
                // squareHeight = boardWidth / sqRootNum;
                /////////////////////////////////////////////
                squareHeight = 200;
                // console.log(newSquare.innerWidth);
                // newSquare.style.height = `${squareHeight}%`;

                // TODO: create content-holder divs in square divs:
                contentInSquareDiv = document.createElement("div");
                contentId = `content-${squareId}`;
                contentInSquareDiv.setAttribute("id", contentId);
                newSquare.appendChild(contentInSquareDiv);
                newContentSquare = document.getElementById(contentId);
                newContentSquare.classList.add("dyna-square-content");
                newContentSquare.classList.add("empty-space");

                // // TODO: // create div to hold health score when pawn is placed there:
                // contentCornerHealth = document.createElement("div");
                // contentHealthId = `content-health-${squareId}`;
                // contentInSquareDiv.setAttribute("id", contentHealthId);
                // newSquare.appendChild(contentCornerHealth);
                // healthCircle = document.getElementById(contentHealthId);
                // healthCircle.classList.add("empty-health");
                // healthCircle.classList.add("health-score");
            };

            // hide gameboard size button:
            // let submitTestNumInput = document.getElementById("test-nums");

            // if (submitTestNumInput.style.display === "block") {
            //     submitTestNumInput.style.display = "none";
            // } else {
            //     submitTestNumInput.style.display = "block";
            // };

            // let submitTestNumBtn = document.getElementById("submit-test-num");

            // if (submitTestNumBtn.style.display === "block") {
            //     submitTestNumBtn.style.display = "none";
            // } else {
            //     submitTestNumBtn.style.display = "block";
            // };

            // let randBtn = document.getElementById("create-pawn");

            // if (randBtn.style.display === "block") {
            //     randBtn.style.display = "none";
            // } else {
            //     randBtn.style.display = "block";
            // };
        };

        // TODO: squareOne = {
        //     x: 1000, // only change place value for the zeroes
        //     y: 1000 // if greater than 1999, then too many squares?
        // };
        console.log(gameBoard);
        console.log(gameBoard[0].x);

    } else {
        if (numberOfSpaces < 9) {
            console.log("numberOfSpaces is NOT >= 9");
        } else {
            console.log("numberOfSpaces is NOT square");
        };
    };

    // TODO: create a counter function or object to hold number of pawns (created, destroyed, limits, transfers using pawn id):
};