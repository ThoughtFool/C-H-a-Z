// isAdjacent = require("./split-logic/isAdjacent");
createBoard = require("./split-logic/createBoard");
counter = 0;
randomPlace = require("./split-logic/random-place");
dragAndDrop = require("./split-logic/drag-and-drop");
endRound = require("./split-logic/end-round");
deployDrone = require("./split-logic/deploy-drone");

var randBtn = document.getElementById("create-pawn");
var endRoundBtn = document.getElementById("end-round");

// set the local storage to client gameboard size:
var getTestNum = document.getElementById("test-nums");
var startBtn = document.getElementById("submit-test-num");
var acc = document.getElementsByClassName("accordion");

// disable all console messages:
console.log = function () {};

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        };
    });
};

startBtn.addEventListener("click", function () {
    console.log("startBtn 'click' function fires");

    console.log(getTestNum.value);
    userNum = getTestNum.value;
    localStorage.setItem("boardSize", userNum);

    if (startBtn.style.display === "block") {
        startBtn.style.display = "none";
    } else {
        startBtn.style.display = "block";
    };

    if (getTestNum.style.display === "block") {
        getTestNum.style.display = "none";
    } else {
        getTestNum.style.display = "block";
    };
    
    if (randBtn.style.display === "block") {
        randBtn.style.display = "none";
    } else {
        randBtn.style.display = "block";
    };

    createBoard(userNum);
});

randBtn.addEventListener("click", function () {
    console.log("randBtn 'click' function fires");

    // TODO: create a function to read user local storage?
    storedUserNum = localStorage.getItem("boardSize");

    let rootNum = Math.sqrt(storedUserNum);
    console.log("rootNum");
    console.log(rootNum);

    if (randBtn.style.display === "block") {
        randBtn.style.display = "none";
    } else {
        randBtn.style.display = "block";
    };

    if (endRoundBtn.style.display === "block") {
        endRoundBtn.style.display = "none";
    } else {
        endRoundBtn.style.display = "block";
    };
////////////////////////////////////////////////////////////////
    

    // TODO: create a variable to be passed in as an argument (below is for testing ONLY):
    randomPlace(rootNum, rootNum - 1);
    // randomPlace(rootNum, rootNum - 1, "zombie");
    // randomPlace(rootNum, rootNum - 1, "cyborg");
    dragAndDrop();

    deployDrone();
});

endRoundBtn.addEventListener("click", function () {
    console.log("endRoundBtn 'click' function fires");
    endRound();
});

// dragAndDrop();