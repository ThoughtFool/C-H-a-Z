// isAdjacent = require("./split-logic/isAdjacent");
createBoard = require("./split-logic/createBoard");
counter = 0;
const randomPlace = require("./split-logic/random-place");
const dragAndDrop = require("./split-logic/drag-and-drop");
const touchEvents = require("./split-logic/test-scripts/touch-events");
const endRound = require("./split-logic/end-round");
const deployDrone = require("./split-logic/deploy-drone");

var randBtn = document.getElementById("create-pawn");
var endRoundBtn = document.getElementById("end-round");

// set the local storage to client gameboard size:
// const playGameBtn = document.getElementById("play-game-btn");
var getTestNum = document.getElementById("test-nums");
var startBtn = document.getElementById("submit-test-num");
var accordMenu = document.getElementsByClassName("accordion");

// disable all console messages:
console.log = function () {};

// playGameBtn.addEventListener("click", function name(params) {
//     console.log("startBtn 'click' function fires");
// });

for (let i = 0; i < accordMenu.length; i++) {
    accordMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        const active = document.querySelector('.active');
        let activePanel = e.target.nextElementSibling;

        if (!e.target.classList.contains("active")) {
            if (active) {
                active.classList.remove('active');
                let panel = active.nextElementSibling;
                panel.style.maxHeight = null;
            };
            e.target.classList.add('active');
            activePanel.style.maxHeight = 75 + "%";
        } else {
            e.target.classList.remove('active');
            activePanel.style.maxHeight = null;
        };
    });
};

startBtn.addEventListener("click", function () {
    console.log("startBtn 'click' function fires");

    // test fullscreen mode:
    document.documentElement.webkitRequestFullScreen();

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
    touchEvents();

    deployDrone();
});

endRoundBtn.addEventListener("click", function () {
    console.log("endRoundBtn 'click' function fires");
    endRound();
});

// dragAndDrop();