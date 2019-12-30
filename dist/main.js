/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// isAdjacent = require("./split-logic/isAdjacent");
createBoard = __webpack_require__(/*! ./split-logic/createBoard */ "./src/split-logic/createBoard.js");
counter = 0;
const randomPlace = __webpack_require__(/*! ./split-logic/random-place */ "./src/split-logic/random-place.js");
const dragAndDrop = __webpack_require__(/*! ./split-logic/drag-and-drop */ "./src/split-logic/drag-and-drop.js");
const touchEvents = __webpack_require__(/*! ./split-logic/test-scripts/touch-events */ "./src/split-logic/test-scripts/touch-events.js");
const endRound = __webpack_require__(/*! ./split-logic/end-round */ "./src/split-logic/end-round.js");
const deployDrone = __webpack_require__(/*! ./split-logic/deploy-drone */ "./src/split-logic/deploy-drone.js");

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

/***/ }),

/***/ "./src/split-logic/check-pawn-status.js":
/*!**********************************************!*\
  !*** ./src/split-logic/check-pawn-status.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
const pawnSwitch = __webpack_require__(/*! ./pawn-switch */ "./src/split-logic/pawn-switch.js");
const updatePercent = __webpack_require__(/*! ./test-scripts/update-percent */ "./src/split-logic/test-scripts/update-percent.js");

module.exports = checkPawnStatus = function (pawnType, pawnTypeTotal) {
    console.log("checkPawnStatus function fires");

    // TODO: Add 2 more pawn types after adding to create-pawn.js file:
    // pawnTypeArr = ["human", "zombie", "cyborg", "sleeping-zombie", "sleepy-cyborg"];

    console.log("pawnType before for loop:"); 
    console.log(pawnType);

    let pawnStat_Type = pawnStats[pawnType]; 
    let allPawnSpawn = pawnStat_Type.pawnSpawn;
    console.log("allPawnSpawn[0]");
    console.log(allPawnSpawn[0]);

    for (let i = 0; i < allPawnSpawn.length; i++) {
        console.log(`health: ${allPawnSpawn[i].health}`);
        if (allPawnSpawn[i].health >= 20 && allPawnSpawn[i].health <= 80 && pawnType == "hazmat-human") {
            console.log(`${allPawnSpawn[i].id} is still HUMAN...for now!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health >= -40 && allPawnSpawn[i].health < 20 && pawnType == "human") {
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins ZOMBIE HORDE!`);
            pawnSwitch(allPawnSpawn[i].id, "zombie", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health <= 140 && pawnType == "human") {
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins CYBORG REVOLT!`);
            pawnSwitch(allPawnSpawn[i].id, "cyborg", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health >= 25 && pawnType == "zombie") {
            console.log(`${allPawnSpawn[i].id} is no longer a zombie! ${allPawnSpawn[i].id} rejoins the human race!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);

        } else if (allPawnSpawn[i].health <= 75 && pawnType == "cyborg") {
            console.log(`${allPawnSpawn[i].id} is no longer a cyborg! ${allPawnSpawn[i].id} rejoins the human race!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);

        } else if (allPawnSpawn[i].health < -40 || allPawnSpawn[i].health > 140) {
            console.log(`${allPawnSpawn[i].id} is beyond the reach of the NANITES... ${allPawnSpawn[i].id} has been eliminated!`);
            pawnSwitch(allPawnSpawn[i].id, "permafrost", pawnTypeTotal); // TODO: they don't move and potentially block movement and shield attacks from enemies;
        
        } else {
            console.log("a calculation error has occurred");
            console.log(`i is ${i} and allPawnSpawn[i].health is ${allPawnSpawn[i].health} and  pawnType is ${pawnType}`);
        };
    };
    // updatePercent(pawnTypeTotal);
};

// } else if (allPawnSpawn[i].health > 0 && allPawnSpawn[i].health < 20) {
// pawnSwitch(allPawnSpawn[i].id, "sleepy-zombie", "cyborg");
// TODO: add sleepy-zombie here!
//     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);

// } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health < 100) {
// pawnSwitch(allPawnSpawn[i].id, "sleepy-cyborg");
// TODO: add sleepy-cyborg here!
//     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);

/***/ }),

/***/ "./src/split-logic/constructor.js":
/*!****************************************!*\
  !*** ./src/split-logic/constructor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function Square(x, y, goldilocks) {
    this.x = x;
    this.y = y;
    this.goldilocks = goldilocks;
};

// Class D (planetoid or moon with little to no atmosphere)
// Class H (generally uninhabitable)
// Class J (gas giant)
// Class K (habitable, as long as pressure domes are used)
// Class L (marginally habitable, with vegetation but no animal life)
// Class M (terrestrial)
// Class N (sulfuric)
// Class R (a rogue planet, not as habitable as a terrestrial planet)
// Class T (gas giant)
// Class Y (toxic atmosphere, high temperatures)

/***/ }),

/***/ "./src/split-logic/create-pawn.js":
/*!****************************************!*\
  !*** ./src/split-logic/create-pawn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const healthInfo = __webpack_require__(/*! ./health-info */ "./src/split-logic/health-info.js");
const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
const updatePercent = __webpack_require__(/*! ./test-scripts/update-percent */ "./src/split-logic/test-scripts/update-percent.js");

module.exports = createPawn = function (destinationID, pawnCounter, pawnType) {
    console.log("createPawn function fires");
    // add type of pawn ("human", "zombie", "cyborg"), then create if statement below:

    squarePlace = document.getElementById(destinationID);

    if (squarePlace.classList.contains("empty-space")) {
        // squarePlace.classList.add("circle-shape");

        // create game piece div:
        gamePawn = document.createElement("img");
        pawnId = `pawn-${pawnCounter}`;
        gamePawn.setAttribute("id", pawnId);
        squarePlace.appendChild(gamePawn);
        newPawn = document.getElementById(pawnId);
        newPawn.classList.add("circle-shape");
        newPawn.classList.add(`${pawnType}-pawn`);
        newPawn.classList.add(`pawn`);
        newPawn.setAttribute("src", `/assets/images/${pawnType}-pawn.png`);

        // append health-score circle:
        // TODO: // create div to hold health score when pawn is placed there:

        // push pawns into pawnStats:
        if (pawnType == "human") {
            health = 50;
        } else if (pawnType == "zombie") {
            health = -10;
        } else if (pawnType == "cyborg") {
            health = 110;
        } else {
            console.log("pawnType doesn't exist yet");
        }
        pawnStats[pawnType].pawnSpawn.push({
            // [pawnId]: {
            id: pawnId,
            health: health,
            loc: [destinationID]


             // TODO: need to add dynamic value to set enemy pawns
            // }
        });

        healthInfo(pawnType, pawnId);

        pawnStats.pawnCounter = pawnCounter + 1;
        console.log(pawnStats);
        // return pawnStats;
    } else {
        console.log("destination space is full");
    };
    updatePercent(getPawnTypeTotal(pawnStats));

};




/***/ }),

/***/ "./src/split-logic/createBoard.js":
/*!****************************************!*\
  !*** ./src/split-logic/createBoard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isSquare = __webpack_require__(/*! ./isSquare */ "./src/split-logic/isSquare.js");
const MakeSquare = __webpack_require__(/*! ./constructor */ "./src/split-logic/constructor.js");
const createPawn = __webpack_require__(/*! ./create-pawn */ "./src/split-logic/create-pawn.js");
const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");

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
                percentageSize = 1/sqRootNum * 100;
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

/***/ }),

/***/ "./src/split-logic/deploy-drone.js":
/*!*****************************************!*\
  !*** ./src/split-logic/deploy-drone.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



module.exports = deployDrone = function () {
    console.log(/* Event fired on the drag target */"?empty");
    // document.addEventListener("dragstart", function (event) {
    //     console.log("event.target");
    //     console.log(event.target);
    //     console.log("event.target.id");
    //     console.log(event.target.id);

    //     event.dataTransfer.setData("Text", event.target.id);
    //     holdingPawn = true;
    //     currentDroneSelected = event.target.id;

    //     let holdingClass = document.getElementById(currentDroneSelected);
        
    //     if (currentDroneSelected == "bio-nanite-drone-btn") {
    //         console.log("bio-nanite-drone-btn selected");

    //     } else if (currentDroneSelected == "bio-hazard-drone-btn") {
    //         console.log("bio-hazard-drone-btn selected");

    //     } else if (currentDroneSelected == "bio-flare-drone-btn") {
    //         console.log("bio-flare-drone-btn selected");

    //     // } else if (currentDroneSelected == "bio-nanite-drone-btn") {
    //     //     console.log("bio-nanite-drone-btn selected");
    //     };


    //     holdingClass.classList.add("holding");
    //     parentDiv = document.getElementById(currentDroneSelected).parentNode;
    //     parentDiv.classList.add("parent-holding-pawn");

    // });

    // // Events fired on the drop target:
    // draggedEventTarget = "";
    // document.addEventListener("dragover", function (event) {
    //     event.preventDefault();
    //     console.log("dragover");
    //     if (event.target.classList.contains("empty-space")) {
    //         event.target.classList.add("available");
    //         draggedEventTarget = event.target;
    //         console.log("draggedEventTarget");
    //         console.log(draggedEventTarget);
    //     };
    // });

    // document.addEventListener("dragend", function (event) {
    //     console.log("dragend");
    //     draggedEventTarget.classList.remove("available");
    // });

    // document.addEventListener("drop", function (event) {
    //     event.preventDefault();

    //     // if (event.target.classList.contains("empty-space")) {
    //     //     // var data = event.dataTransfer.getData("Text");
    //     //     // holdingClass = document.getElementById(currentPawnHeld);
    //     //     // event.target.appendChild(holdingClass);
    //     //     // holdingClass.classList.remove("holding");
    //     //     // event.target.classList.remove("empty-space");
    //     //     // parentDiv.classList.remove("parent-holding-pawn");
    //     //     // parentDiv.classList.add("empty-space");
    //     //     // holdingPawn = false;

    //     //     /////////////////////////////////////////////////////
    //     //     // contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
    //     //     // event.target.appendChild(contentCircle);
    //     //     /////////////////////////////////////////////////////

    //     //     // [pawnType].pawnSpawn

    //     //     // var newSpan = document.createElement("span"); // Create span node
    //     //     // var textnode = document.createTextNode(pawnStats.); // Create a text node
    //     //     // newSpan.appendChild(textnode); // Append the text to <li>
    //     //     // document.getElementById("myList").appendChild(newSpan);

    //     //     /////////////////////////////////////////////////////

    //     //     currentPawnHeld = "";

    //     //     console.log("parentDiv");
    //     //     console.log(parentDiv);
    //     //     console.log("parentDiv.id");
    //     //     console.log(parentDiv.id);



    //     //     // squarePlace.classList.remove("empty-space");
    //     //     console.log("contentCornerHealth");
    //     //     console.log(contentCornerHealth);

    //     //     // healthInfo(pawnType, pawnId);

    //     //     /////////////////////////////////////////////////////

    //     // } else if (event.target.className == "discard-pile" || event.target.className == "discard") {

    //     //     // data = event.dataTransfer.getData("Text");
    //     //     // console.log("data");
    //     //     // console.log(data);

    //     //     holdingClass = document.getElementById(currentPawnHeld);
    //     //     event.target.appendChild(holdingClass);
    //     //     holdingClass.src = "../assets/images/obverse.png";
    //     //     holdingClass.classList.remove("flipped");
    //     //     holdingClass.classList.remove("card-face");
    //     //     holdingClass.classList.add("discard");
    //     //     holdingClass.classList.remove("holding");
    //     //     parentDiv.classList.remove("parent-holding-pawn");
    //     //     parentDiv.classList.add("empty-space");
    //     //     holdingPawn = false;
    //     //     currentPawnHeld = "";

    //     // } else if (event.target.classList.contains("empty-space") == false) {
    //     //     console.log("this slot is full");
    //     // } else {
    //     //     holdingClass.classList.remove("holding");
    //     //     parentDiv.classList.remove("parent-holding-pawn");
    //     //     parentDiv.classList.remove("empty-space");
    //     //     holdingPawn = false;
    //     //     currentPawnHeld = "";
    //     // };
    //     console.log("dropped");
    // });
};

/***/ }),

/***/ "./src/split-logic/drag-and-drop.js":
/*!******************************************!*\
  !*** ./src/split-logic/drag-and-drop.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
updatePawnStatus = __webpack_require__(/*! ./update-pawn-status */ "./src/split-logic/update-pawn-status.js");

const {
    healthInfo
} = __webpack_require__(/*! ./health-info */ "./src/split-logic/health-info.js");

module.exports = dragAndDrop = function () {
    console.log("dragAndDrop function fires");

    var currentPawnHeld = null;

    /* Event fired on the drag target */
    // document.addEventListener("dragstart", dragStart);
    dragStart = function (event) {
        if (event.target.classList.contains("human-pawn")) {
            event.dataTransfer.getData("Text", event.target.id);
            holdingPawn = true;
            currentPawnHeld = event.target.id;

            let holdingClass = document.getElementById(currentPawnHeld);
            holdingClass.classList.add("holding");
            parentDiv = document.getElementById(currentPawnHeld).parentNode;
            parentDiv.classList.add("parent-holding-pawn");
        } else {
            event.target.removeEventListener("dragstart", dragStart);
            // document.getElementById("myDIV").
            // document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
        };

        // });
    };
    document.addEventListener("dragstart", dragStart);

    var holdingPawn = false;
    var holdingClass = null;
    var parentDiv = null;
    var counterValue = 0;

    // Events fired on the drop target:
    document.addEventListener("dragover", function (event) {
        event.preventDefault();
        console.log("dragover");
        console.log("holdingPawn: " + holdingPawn);
        console.log(counterValue);
        counterValue++;

        // // while (holdingPawn == true) {
        // while (holdingPawn == "placeHolder") {
        //     // setInterval(() => {
        //     console.log("while loop");
        //     mouseEnterFunc();
        // };
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();

        console.log("currentPawnHeld");
        console.log(currentPawnHeld);

        if (currentPawnHeld != null) {
            if (document.getElementById(currentPawnHeld).classList.contains("human-pawn")) {
                console.log("currentPawnHeld = human-pawn");

                if (event.target.classList.contains("empty-space")) {
                    // var data = event.dataTransfer.setData("Text");
                    holdingClass = document.getElementById(currentPawnHeld);
                    event.target.appendChild(holdingClass);
                    holdingClass.classList.remove("holding");
                    event.target.classList.remove("empty-space");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.add("empty-space");
                    holdingPawn = false;

                    /////////////////////////////////////////////////////
                    contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
                    event.target.appendChild(contentCircle);
                    /////////////////////////////////////////////////////

                    // [pawnType].pawnSpawn

                    // var newSpan = document.createElement("span"); // Create span node
                    // var textnode = document.createTextNode(pawnStats.); // Create a text node
                    // newSpan.appendChild(textnode); // Append the text to <li>
                    // document.getElementById("myList").appendChild(newSpan);

                    /////////////////////////////////////////////////////
                    newParentDiv_ID = event.target.id;
                    console.log("newParentDiv_ID");
                    console.log(newParentDiv_ID);

                    updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
                    currentPawnHeld = null;

                    console.log("parentDiv");
                    console.log(parentDiv);
                    console.log("parentDiv.id");
                    console.log(parentDiv.id);
                    console.log("contentCornerHealth");
                    console.log(contentCornerHealth);

                    /////////////////////////////////////////////////////

                } else if (event.target.classList.contains("empty-space") == false) {
                    console.log("this slot is full");
                } else {
                    holdingClass.classList.remove("holding");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.remove("empty-space");
                    holdingPawn = false;
                    currentPawnHeld = null;
                };
            } else {
                console.log("currentPawnHeld not human-pawn");
            };
        };
    });
};
// };

/***/ }),

/***/ "./src/split-logic/dyna-font.js":
/*!**************************************!*\
  !*** ./src/split-logic/dyna-font.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// pixelSize = 16;
// module.exports = dynaFont = function (inputVal) {
//     // preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
//     preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
//     result = pixelSize - preResult;
//     console.log(result);
// };
// ////////////////////////////////////////////////////////////

// inputVal = 9;
module.exports = dynaFont = function (inputVal) {
    // preResult = Math.floor(Math.sqrt(inputVal) / 10 * pixelSize);
    preResult = Math.sqrt(inputVal);
    percentageSizeBox = 1 / preResult * 100;
    console.log("percentageSizeBox");
    console.log(percentageSizeBox);
    // newSquare.style.width = `${percentageSizeBox}%`;
    pixelSize = percentageSizeBox / 4;

    result = pixelSize;
    console.log(result);

    return result;
};

/***/ }),

/***/ "./src/split-logic/end-round.js":
/*!**************************************!*\
  !*** ./src/split-logic/end-round.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
const adjacentSpaces = __webpack_require__(/*! ./test-scripts/adj-space-finder */ "./src/split-logic/test-scripts/adj-space-finder.js");
const checkPawnStatus = __webpack_require__(/*! ./check-pawn-status */ "./src/split-logic/check-pawn-status.js");
const goldilocksChecker = __webpack_require__(/*! ./test-scripts/goldilocks-checker */ "./src/split-logic/test-scripts/goldilocks-checker.js");
const nextTurn = __webpack_require__(/*! ./test-scripts/comp-turn */ "./src/split-logic/test-scripts/comp-turn.js");
const getTotalPawns = __webpack_require__ (/*! ./get-total-pawns */ "./src/split-logic/get-total-pawns.js");

module.exports = endRound = function () {
    // let pawnType = "";
    // let pawnTypeArr = [];
    // let pawnTypeTotal = {};

    // for (pawnType in pawnStats) {
    //     console.log("pawnType");
    //     console.log(pawnType);
    //     console.log("pawnStats[pawnType]");
    //     console.log(pawnStats[pawnType]);
    //     if (
    //         pawnType === "cyborg" ||
    //         pawnType === "human" ||
    //         pawnType === "zombie"
    //     ) {

    //         for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {
    //             console.log("pawnStats[pawnType]::");
    //             console.log(pawnStats[pawnType]);
    //             console.log(pawnStats[pawnType].pawnSpawn);
    //             console.log(pawnStats[pawnType].pawnSpawn[i]);
    //             let pawnLoc = pawnStats[pawnType].pawnSpawn[i].loc[0];
    //             console.log("pawnStats[pawnType].pawnSpawn[i].loc");
    //             console.log(pawnStats[pawnType].pawnSpawn[i].loc);
    //             console.log("pawnLoc");
    //             console.log(pawnLoc);

    //             adjacentSpaces(pawnLoc, 1, null, pawnType, "endRound");
    //         };

    //         pawnTypeArr.push(pawnType);
    //         pawnTypeTotal[pawnType] = pawnStats[pawnType].pawnSpawn.length;
    //     };
    // };

    // for (let t = 0; t < pawnTypeArr.length; t++) {
    //     console.log("pawnType before checkPawnStatus:");
    //     console.log(pawnTypeArr[t]);
    //     checkPawnStatus(pawnTypeArr[t], pawnTypeTotal);
    // };

    setTimeout(function () {
        requestAnimationFrame(function () {
            // trigger the animation
            nextTurn(true, "cyborg", adjacentSpaces);
        });
    }, 800);

    // let turnOrder = TODO: get info from browser? local storage?
    nextTurn(true, "zombie", adjacentSpaces);
    
    let pawnTypeObj = getTotalPawns();
    for (let t = 0; t < pawnTypeObj.pawnTypeArr.length; t++) {
        console.log("pawnType before checkPawnStatus:");
        console.log(pawnTypeObj.pawnTypeArr[t]);
        checkPawnStatus(pawnTypeObj.pawnTypeArr[t], pawnTypeObj.pawnTypeTotal);
        // checkPawnStatus(pawnTypeArr[t], pawnTypeTotal);
    };
};

/***/ }),

/***/ "./src/split-logic/enemy-moves.js":
/*!****************************************!*\
  !*** ./src/split-logic/enemy-moves.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const adjacentSpaceFinder = require("./test-scripts/adj-space-finder");
// const adjacentSpaceFinder = require("./adjacent-spaces");

module.exports = enemyMoves = function (homespace, destin, movesMade, adjacentSpaceFinder) {
    console.log("enemyMoves function fires");

    if (typeof movesMade == "undefined") {
        console.log("movesMade was undefined");
        movesMade = [];
    };

    if (typeof destin == "undefined") {
        console.log("Error: The destination exists beyond the dimensions of the board.");
    } else {
        console.log("homespace");
        console.log(homespace);
        console.log("destin");
        console.log(destin);
        // adjacentSpaceFinder([101, 105], 1);

        if (destin[0] === homespace[0] && destin[1] === homespace[1]) {
            console.log("Congratulations, you've arrived!");
        } else {
            // TODO: change all homespaces to be same camelCase or mention content string in name of variable:
            homespace_ContentString = `content-x${homespace[0]}-y${homespace[1]}`;
            adjArr = adjacentSpaceFinder(homespace_ContentString, 1, null, null, null);
            last_Diff = null;
            last_Arr = null;

            for (let i = 0; i < adjArr.comb.length; i++) {

                adjArr.comb[i] = adjArr.comb[i].match(/\d+/g);
                console.log("adjArr.comb[i] after regex match:");
                console.log(adjArr.comb[i]);

                // x_Loc = homespace[0] = parseInt(homespace[0]);
                // y_Loc = homespace[1] = parseInt(homespace[1]);

                current_Array = [
                    parseInt(adjArr.comb[i][0]), parseInt(adjArr.comb[i][1])
                ];

                console.log("current_Array");
                console.log(current_Array);

                main_Diff = [
                    destin[0] - homespace[0],
                    destin[1] - homespace[1]
                ];

                current_Diff = [
                    destin[0] - current_Array[0],
                    destin[1] - current_Array[1]
                ];

                if (last_Diff == null) {
                    last_Diff = main_Diff;
                };

                if (last_Arr == null) {
                    console.log("last_Arr = homespace");
                    console.log(homespace);
                    last_Arr = homespace;
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
            console.log("homespace after movesMade push");
            console.log(homespace);

            enemyMoves(last_Arr, destin, movesMade);
        };
        return movesMade;
    };
};

/***/ }),

/***/ "./src/split-logic/get-pawn-type-total.js":
/*!************************************************!*\
  !*** ./src/split-logic/get-pawn-type-total.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const pawnStats = require("./pawn-stats");

module.exports = getPawnTypeTotal = function (pawnStats) {
    let pawnTypeTotal = {
        cyborg: pawnStats.cyborg.pawnSpawn.length,
        human: pawnStats.human.pawnSpawn.length,
        zombie: pawnStats.zombie.pawnSpawn.length
    };
    return pawnTypeTotal;
};

/***/ }),

/***/ "./src/split-logic/get-total-pawns.js":
/*!********************************************!*\
  !*** ./src/split-logic/get-total-pawns.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adjacentSpaces = __webpack_require__(/*! ./test-scripts/adj-space-finder */ "./src/split-logic/test-scripts/adj-space-finder.js");
const checkPawnStatus = __webpack_require__(/*! ./check-pawn-status */ "./src/split-logic/check-pawn-status.js");
const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");

module.exports = getTotalPawns = function () {
    let pawnType = "";
    let pawnTypeArr = [];
    let pawnTypeTotal = {};
    let pawnTypeObj = {};

    for (pawnType in pawnStats) {
        console.log("pawnType");
        console.log(pawnType);
        console.log("pawnStats[pawnType]");
        console.log(pawnStats[pawnType]);
        if (
            pawnType === "cyborg" ||
            pawnType === "human" ||
            pawnType === "zombie"
        ) {

            for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {
                console.log("pawnStats[pawnType]::");
                console.log(pawnStats[pawnType]);
                console.log(pawnStats[pawnType].pawnSpawn);
                console.log(pawnStats[pawnType].pawnSpawn[i]);
                let pawnLoc = pawnStats[pawnType].pawnSpawn[i].loc[0];
                console.log("pawnStats[pawnType].pawnSpawn[i].loc");
                console.log(pawnStats[pawnType].pawnSpawn[i].loc);
                console.log("pawnLoc");
                console.log(pawnLoc);

                adjacentSpaces(pawnLoc, 1, null, pawnType, "endRound");
            };


            pawnTypeArr.push(pawnType);
            pawnTypeTotal[pawnType] = pawnStats[pawnType].pawnSpawn.length;
        };
        pawnTypeObj = {
            pawnTypeArr: pawnTypeArr,
            pawnTypeTotal: pawnTypeTotal
        };
    };
    return pawnTypeObj;

    // for (let t = 0; t < pawnTypeArr.length; t++) {
    //     console.log("pawnType before checkPawnStatus:");
    //     console.log(pawnTypeArr[t]);
    //     checkPawnStatus(pawnTypeObj.pawnTypeArr[t], pawnTypeObj.pawnTypeTotal);
    //     // checkPawnStatus(pawnTypeArr[t], pawnTypeTotal);
    // };
};

/***/ }),

/***/ "./src/split-logic/health-info.js":
/*!****************************************!*\
  !*** ./src/split-logic/health-info.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
showHealth = __webpack_require__(/*! ./show-health */ "./src/split-logic/show-health.js");
dynaFont = __webpack_require__(/*! ./dyna-font */ "./src/split-logic/dyna-font.js");

// function healthInfo(pawnType, pawnId) { 
module.exports = healthInfo = function (pawnType, pawnId) {
    console.log("healthInfo function fires");

    pawnParent = document.getElementById(pawnId).parentNode;
    if (pawnParent.childNodes[1] != null) {
        pawnParent.removeChild(pawnParent.childNodes[1]);
    };

    // refreshPawn.removeChild(refreshPawn.childNodes[0]);

    contentCornerHealth = document.createElement("div");
    contentHealthId = `content-health-${pawnId}`;
    contentCornerHealth.setAttribute("id", contentHealthId);
    pawnParent.appendChild(contentCornerHealth);
    healthCircle = document.getElementById(contentHealthId);
    healthCircle.classList.add("empty-health");
    healthCircle.classList.add("health-score");
    // healthCircle.style.setProperty(`--health-font`, `'${healthFontSize}'`);

    // get userNum and run function to create dynamic pixel size:
    userNum = localStorage.getItem("boardSize");
    healthCircle.style.fontSize = `${dynaFont(userNum)}px`;
    pawnParent.classList.remove("empty-space");
    console.log("contentCornerHealth");
    console.log(contentCornerHealth);

    showHealth(pawnType, pawnId, healthCircle);

    ///////////////////////////////////////////////////

    // // console.log(pawnSpawn[pawnType].pawnSpawn.health);
    // var newSpan = document.createElement("span"); // Create span node
    // var pawnSpawn = pawnStats[pawnType].pawnSpawn;
    // for (let i = 0; i < pawnSpawn.length; i++) {
    //     console.log("pawnSpawn[i]");
    //     console.log(pawnSpawn[i]);

    //     console.log("pawnId");
    //     console.log(pawnId);
    //     console.log("pawnSpawn[i].id");
    //     console.log(pawnSpawn[i].id);        

    //     if (pawnSpawn[i].id == pawnId) {
    //         healthNum = pawnSpawn[i].health;
    //         var textnode = document.createTextNode(healthNum); // Create a text node
    //         newSpan.appendChild(textnode); // Append the text to <li>
    //         healthCircle.appendChild(newSpan);
    //     };
    // };
};
// exports.healthInfo = healthInfo;

/***/ }),

/***/ "./src/split-logic/isSquare.js":
/*!*************************************!*\
  !*** ./src/split-logic/isSquare.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = isSquare = function (num) {
        return num > 4 && Math.sqrt(num) % 1 === 0;
    };

/***/ }),

/***/ "./src/split-logic/pawn-stats.js":
/*!***************************************!*\
  !*** ./src/split-logic/pawn-stats.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = pawnStats = {
    human: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: [
            // {
            //     dynaID: id
            // }, // use constructor to assign values to each uniquely created and played pawn
        ] // push objects into array of new pawns
    },
    zombie: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: []
    },
    cyborg: {
        // pawnCounter: 0, // to be used with length in array of ids below
        pawnSpawn: []
    },

    pawnCounter: 0,
    // testing ONLY TODO: move into above^^^
    pawnIdArray: {
        human: [],
        zombie: [],
        cyborg: []
    },
    gameBoard: []
};

/***/ }),

/***/ "./src/split-logic/pawn-switch.js":
/*!****************************************!*\
  !*** ./src/split-logic/pawn-switch.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const updatePawnStatus = __webpack_require__(/*! ./update-pawn-status */ "./src/split-logic/update-pawn-status.js");
const getPawnTypeTotal = __webpack_require__(/*! ./get-pawn-type-total */ "./src/split-logic/get-pawn-type-total.js");

module.exports = pawnSwitch = function (pawnToSwitch, pawnType, pawnTypeTotal) {
    console.log("pawnSwitch function fires");
    console.log("pawnType in pawnSwitch:");
    console.log(pawnType);

    // pawnIdArray = pawnStats.pawnIdArray[`${pawnType}`];

    newPawn = document.getElementById(pawnToSwitch);
    newPawn.src = `/assets/images/${pawnType}-pawn.png`;
    // newPawn.classList.remove("empty-space"); check for current class TODO: if contains
    if (newPawn.classList.contains("human-pawn")) {
        newPawn.classList.remove("human-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["human", pawnType];

        // remove location id from array of human and add to ${pawnType}:
        // for (let i = 0; i < pawnStats.pawnIdArray.human.length; i++) {
        //     console.log(newPawn.parentNode.id);
        //     if (i === newPawn.parentNode.id) {
        //         console.log("pawnStats.pawnIdArray.human");
        //         console.log(pawnStats.pawnIdArray.human);
        //     }
        // };
        // for (let i = 0; i < pawnIdArray.length; i++) {
        //     console.log(newPawn.parentNode.id);
        //     if (i === newPawn.parentNode.id) {
        //     console.log("pawnIdArray");
        //     console.log(pawnIdArray);
        //     }
        // }; 
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("zombie-pawn")) {
        newPawn.classList.remove("zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["zombie", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);


        // TODO: update stats (remove from type array/object and add to other array/object)
        


    } else if (newPawn.classList.contains("cyborg-pawn")) {
        newPawn.classList.remove("cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["cyborg", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("sleepy-zombie-pawn")) {
        newPawn.classList.remove("sleepy-zombie-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["sleepy-zombie-pawn", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);

    } else if (newPawn.classList.contains("sleepy-cyborg-pawn")) {
        newPawn.classList.remove("sleepy-cyborg-pawn");
        newPawn.classList.add(`${pawnType}-pawn`);

        let pawnTypeSwitch = ["sleepy-cyborg-pawn", pawnType];
        updatePawnStatus("switch", pawnToSwitch, pawnTypeSwitch, getPawnTypeTotal);
    };

    // updatePercent(pawnTypeTotal);

};

// TODO: need to make pawns more generic. 
// change dynamic ids to counter, based on order of creation ONLY, not pawnType
// the track all pawnTypes by either data- or class

/***/ }),

/***/ "./src/split-logic/random-place.js":
/*!*****************************************!*\
  !*** ./src/split-logic/random-place.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
// const touchEvents = require("./test-scripts/touch-events");

// TODO: move this object into the playerStats object:
// testing ONLY:
// pawnIdArray = {
//     human: [],
//     zombie: [],
//     cyborg: []
// };


module.exports = randomPlace = function (userInputNum, howManyToPlace) {
    console.log("randomPlace function fires");
    let baseNum = 1000;
    howManyToPlace = howManyToPlace * 2;

    // TODO: need successfullyPlacedCounter in createPawn?

    for (let i = 0; i <= howManyToPlace; i++) {
        xAxis = Math.floor(Math.random() * userInputNum + 1);
        console.log("xAxis");
        console.log(xAxis);

        yAxis = Math.floor(Math.random() * userInputNum + 1);
        console.log("yAxis");
        console.log(yAxis);

        randomContentID = `content-x${baseNum + xAxis}-y${baseNum + yAxis}`;
        console.log("randomContentID");
        console.log(randomContentID);

        if (pawnStats.pawnIdArray.human.includes(randomContentID) ||
            pawnStats.pawnIdArray.zombie.includes(randomContentID) ||
            pawnStats.pawnIdArray.cyborg.includes(randomContentID)) {
            console.log("that random number already exists in array. pawn was placed");
            // need to subtract from loop counter if already exists:
            i--;

        } else {
            if (i % 2 === 0) { // even
                pawnStats.pawnIdArray.human.push(randomContentID);
                console.log(pawnStats.pawnIdArray.human);
                createPawn(randomContentID, pawnStats.pawnCounter, "human");
            
            } else {
                randEnemy = Math.floor(Math.random() * 20 + 1);
                if (randEnemy % 2 === 0) {
                    pawnStats.pawnIdArray.zombie.push(randomContentID);
                    console.log(pawnStats.pawnIdArray.zombie);
                    createPawn(randomContentID, pawnStats.pawnCounter, "zombie");
                
                } else {
                    pawnStats.pawnIdArray.cyborg.push(randomContentID);
                    console.log(pawnStats.pawnIdArray.cyborg);
                    createPawn(randomContentID, pawnStats.pawnCounter, "cyborg");
                };
            };
        };

        // TODO: add openSpace evaluator that looks at array of spaces to see if contains beforeattempting to createPawn;
        // TODO: create pawnHealth evaluator to track and determine status of pawns in danger of becoming neutral and changes color;
        // TODO: pawn colors need to be changed to primary colors, so that the neutral stauts of pawns' colors can change to secondary colors;
        // TODO: add blinking strobe effect to neutral pawns? add hover over arrow effect when pawn is picked up?
    };
    // touchEvents();
};

/***/ }),

/***/ "./src/split-logic/show-health.js":
/*!****************************************!*\
  !*** ./src/split-logic/show-health.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");

module.exports = showHealth = function (pawnType, pawnId, healthCircle) {
    console.log("showHealth function fires");

    var newSpan = document.createElement("span"); // Create span node
    var pawnSpawn = pawnStats[pawnType].pawnSpawn;

    for (let i = 0; i < pawnSpawn.length; i++) {
        console.log("pawnSpawn[i]");
        console.log(pawnSpawn[i]);

        console.log("pawnId");
        console.log(pawnId);
        console.log("pawnSpawn[i].id");
        console.log(pawnSpawn[i].id);

        if (pawnSpawn[i].id == pawnId) {
            if (textnode != null) {
                newSpan.removeChild(textnode);
            };

            healthNum = pawnSpawn[i].health;
            var textnode = document.createTextNode(healthNum); // Create a text node
            newSpan.appendChild(textnode);
            healthCircle.appendChild(newSpan);
        };
    };
};

/***/ }),

/***/ "./src/split-logic/test-scripts/adj-contentID-string-array.js":
/*!********************************************************************!*\
  !*** ./src/split-logic/test-scripts/adj-contentID-string-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = adjContentIDStringArr = function (homespace, adjacentSpaceObj, availableMoves) {
    const firstSquare = {};
    const adjacentSquares = [];

    firstSquare.x = 1001;
    firstSquare.y = 1001;

    // if (pawnStats.gameBoard[0].includes())
    // lastSquare.x = 1001;
    // lastSquare.y = 1001;

    //     // baseNum = 1000;
    //     let numberOfSpaces = localStorage.getItem("boardSize");
    //     console.log("square root of " + numberOfSpaces);

    //     let sqRootNum = Math.sqrt(numberOfSpaces);
    //     console.log(sqRootNum);

    //     for (let i = 1; i <= sqRootNum; i++) {
    //         for (let j = 1; j <= sqRootNum; j++) {
    //         }
    //     };


    let loopSize = availableMoves * 2 + 1;

    for (let i = 0; i < loopSize; i++) {
        coord_x = adjacentSpaceObj.x[i]; // ???

        for (let j = 0; j < loopSize; j++) {
            coord_y = adjacentSpaceObj.y[j]; // ???
            // contentID = [coord_x, coord_y];
            contentID = `content-x${coord_x}-y${coord_y}`;
            console.log("contentID");
            console.log(contentID);
            console.log("homespace");
            console.log(homespace);
            console.log("coord_x");
            console.log(coord_x);
            console.log("coord_y");
            console.log(coord_y);
            
            if (coord_x >= firstSquare.x && coord_y >= firstSquare.y) {
                if (coord_x === homespace[0] && coord_y === homespace[1]) {
                // if (coord_x === parseInt(homespace[0]) && coord_y === parseInt(homespace[1])) {
                    // console.log(`homespace_idString: ${contentID}`);
                } else {
                    // console.log(`${contentID} != ${homespace_idString}`);
                    adjacentSquares.push(contentID); // ???
                };
            };
        };
    };

    console.log("adjacentSquares::");
    console.log(adjacentSquares);
    adjacentSpaceObj.comb = adjacentSquares;

    return adjacentSpaceObj;
};

/***/ }),

/***/ "./src/split-logic/test-scripts/adj-space-finder.js":
/*!**********************************************************!*\
  !*** ./src/split-logic/test-scripts/adj-space-finder.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const adjacentSquares = [];
const adjacentSpacesHolder = [];
// const firstSquare = {};
// firstSquare.x = 1;
// firstSquare.y = 1;
// const friendOrFoe = require("../friend-or-foe");
const friendOrFoe = __webpack_require__(/*! ./friend-or-foe-test */ "./src/split-logic/test-scripts/friend-or-foe-test.js");

const adjContentIDStringArr = __webpack_require__(/*! ./adj-contentID-string-array */ "./src/split-logic/test-scripts/adj-contentID-string-array.js");
const goldilocksChecker = __webpack_require__(/*! ./goldilocks-checker */ "./src/split-logic/test-scripts/goldilocks-checker.js");


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

/***/ }),

/***/ "./src/split-logic/test-scripts/best-move.js":
/*!***************************************************!*\
  !*** ./src/split-logic/test-scripts/best-move.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = bestMove = function (goldSpaceArr) {
    console.log("bestMove function fires");
    console.log(goldSpaceArr);

    let newGoldSpaceArr = {};

    for (let g = 1; g < goldSpaceArr.length; g++) {

        if (goldSpaceArr[0] != null) {
            if (goldSpaceArr[g - 1].weight != null) {
                if (goldSpaceArr[g].weight > goldSpaceArr[g - 1].weight) {
                    goldSpaceArr.splice((g - 1), 1);
                    console.log("g is bigger");
                    console.log(goldSpaceArr);

                } else if (goldSpaceArr[g].weight <= goldSpaceArr[g - 1].weight) {
                    goldSpaceArr.splice(g, 1);
                    console.log("g - 1 is bigger");
                    console.log(goldSpaceArr);

                    // } else if (goldSpaceArr[0] == null) {
                    //     goldSpaceArr.splice(0, 1);
                    //     console.log("g - 1 is bigger than [0] == null");
                    //     console.log(goldSpaceArr);

                };
            };
        } else {
            goldSpaceArr.splice(0, 1);
            console.log("g - 1 is bigger than [0] == null");
            console.log(goldSpaceArr);
        };
        newGoldSpaceArr = goldSpaceArr;
    };
    return newGoldSpaceArr;
};

/***/ }),

/***/ "./src/split-logic/test-scripts/comp-turn.js":
/*!***************************************************!*\
  !*** ./src/split-logic/test-scripts/comp-turn.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const pawnStats = __webpack_require__(/*! ../pawn-stats */ "./src/split-logic/pawn-stats.js");
const bestMove = __webpack_require__(/*! ./best-move */ "./src/split-logic/test-scripts/best-move.js");
// const adjacentSpaces = require("./adj-space-finder");
const moveEnemyPawnFunc = __webpack_require__(/*! ./move-enemy-pawn-func */ "./src/split-logic/test-scripts/move-enemy-pawn-func.js");
const updatePawnStatus = __webpack_require__(/*! ../update-pawn-status */ "./src/split-logic/update-pawn-status.js");

module.exports = compTurn = function (computerBool, pawnType, adjacentSpaces) {
    ///////////////////////  call function to addWeight (adjSpaces) ///////////////////////

    ///////////////////////  add weight value to each space in adjSpaces connected to pawnID ///////////////////////

    ///////////////////////  replace lower weight value / keep higher weight with spaceID ///////////////////////

    console.log("nextTurn function fires");
    console.log("computerBool");
    console.log(computerBool);
    console.log("pawnType");
    console.log(pawnType);

    let currentGoldiPawns = [];
    // let goldilocksObjectHolder = {};
    // let goldSpaceArr = [];
    // let moveEnemyPawn = [null];

    if (computerBool === true) {
        console.log("pawnStats[pawnType].pawnSpawn.length");
        console.log(pawnStats[pawnType].pawnSpawn.length);

        // TODO: create an if conditional that errors out if the pawnType doesn't exist or equals zero:

        ///////////////////////  loop through pawnIDs ///////////////////////
        console.log(pawnStats[pawnType].pawnSpawn.length);
        for (let loop = 0; loop < pawnStats[pawnType].pawnSpawn.length; loop++) {
            let currentPawnLoc = pawnStats[pawnType].pawnSpawn[loop].loc;
            let currentPawnID = pawnStats[pawnType].pawnSpawn[loop].id;
            let goldilocksObjectHolder = {};
            let goldSpaceArr = [];

            /////////////////////// 1) get pawnIDs ///////////////////////
            console.log("currentPawnID");
            console.log(currentPawnID);

            console.log("currentPawnLoc");
            console.log(currentPawnLoc);

            ///////////////////////  get adjacentSpaces from each pawnID ///////////////////////
            let currentAdjSpaceArr = adjacentSpaces(currentPawnLoc[0], 1, null, pawnType, "compTurn");

            ///////////////////////  loop through adjacentSpaces ///////////////////////
            // for (let cur = 0; cur < currentAdjSpaceArr.comb.length; cur++) {
            //     console.log(goldilocksChecker()); // homeSpace, targetSpace, pawnType
            // }

            // currentGoldiPawns.pawnID = currentPawnID;
            // currentGoldiPawns.pawnLoc = currentPawnLoc;
            // currentGoldiPawns.adjSpaceArray = currentAdjSpaceArr.comb;
            let moveEnemyPawn = [null];

            for (let adj = 0; adj < currentAdjSpaceArr.comb.length; adj++) {
                console.log("before goldilocksChecker is called");
                // moveEnemyPawn[0] = null;

                console.log(`currentAdjSpaceArr.comb.length = ${currentAdjSpaceArr.comb.length}`);

                let targetSpace_idString = currentAdjSpaceArr.comb[adj];
                let targetSpace = targetSpace_idString;

                console.log("targetSpace_idString");
                console.log(targetSpace_idString);
                targetSpace = targetSpace.match(/\d+/g);
                console.log("targetSpace after match:");
                console.log(targetSpace);
                targetSpace = [parseInt(targetSpace[0]), parseInt(targetSpace[1])];

                //////////////////////////////////////////////////////////////////////////

                let currentPawnHomespace_idString = currentPawnLoc[0];
                let currentTargetElem = document.getElementById(targetSpace_idString);
                let currentPawnHomespace = currentPawnHomespace_idString;

                if (currentTargetElem != null) {
                    if (!currentTargetElem.classList.contains("empty-space")) {
                        console.log("currentTargetElem is NOT an empty space:");
                        console.log(currentTargetElem);
                    } else {
                        console.log("currentTargetElem is an empty space:");
                        console.log(currentTargetElem);

                        console.log("currentPawnHomespace_idString");
                        console.log(currentPawnHomespace_idString);
                        currentPawnHomespace = currentPawnHomespace.match(/\d+/g);
                        console.log("currentPawnHomespace after match:");
                        console.log(currentPawnHomespace);
                        currentPawnHomespace = [parseInt(currentPawnHomespace[0]), parseInt(currentPawnHomespace[1])];

                        // console.log(goldilocksChecker(currentPawnHomespace, targetSpace, pawnType, adjacentSpaces, currentPawnHomespace_idString)); // homeSpace, targetSpace, pawnType
                        // create a function to compare returned values:
                        goldilocksObjectHolder = goldilocksChecker(currentPawnHomespace, targetSpace, pawnType, adjacentSpaces, currentPawnHomespace_idString);
                        goldSpaceArr.push(goldilocksObjectHolder);

                        console.log("goldSpaceArr (before):");
                        console.log(goldSpaceArr);

                        if (goldSpaceArr.length > 1) { // TODO: check for errors if equal to "1"
                        // if (goldSpaceArr.length >= 1 && moveEnemyPawn[0] != null) { // TODO: check for errors if equal to "1"
                            
                            if (typeof moveEnemyPawn[0] == null || moveEnemyPawn[0] == null && goldSpaceArr.length == 1) {
                            } else if (goldSpaceArr.length > 1) {
                                console.log("bestMove(goldSpaceArr):");
                                moveEnemyPawn = bestMove(goldSpaceArr);

                            // } else if (goldSpaceArr.length === 1) {
                            } else {
                                console.log("error?");
                                // return moveEnemyPawnFunc(moveEnemyPawn); TODO: break apart in next function, not here ^^^
                            };
                        } else {
                            if (typeof moveEnemyPawn[0] == null || moveEnemyPawn[0] == null) {
                                console.log("moveEnemyPawn[0] == null");

                            } else {
                                console.log("moveEnemyPawn[0].homespace_idString");
                                console.log(moveEnemyPawn[0].homespace_idString);
                                console.log("moveEnemyPawn[0].targetSpace_idString");
                                console.log(moveEnemyPawn[0].targetSpace_idString);

                                // TODO: check after each "zombie" bestMove
                            };
                        };
                        
                        console.log("goldSpaceArr (after):");
                        console.log(goldSpaceArr);
                    };
                };
            };
            if (moveEnemyPawn[0] != null) {
                moveEnemyPawnFunc(moveEnemyPawn[0].homespace_idString, moveEnemyPawn[0].targetSpace_idString, updatePawnStatus);
            };
            //////////////////////////////////////////////////////////////////////////
            // if (typeof moveEnemyPawn[0] == null) {

            // } else {
            //     console.log("moveEnemyPawn[0].homespace_idString");
            //     console.log(moveEnemyPawn[0].homespace_idString);
            //     console.log("moveEnemyPawn[0].targetSpace_idString");
            //     console.log(moveEnemyPawn[0].targetSpace_idString);
    
            //     // TODO: check after each "zombie" bestMove
            //     moveEnemyPawnFunc(moveEnemyPawn[0].homespace_idString, moveEnemyPawn[0].targetSpace_idString, updatePawnStatus);
    
            //     // return moveEnemyPawnFunc(moveEnemyPawn); TODO: break apart in next function, not here ^^^
            // };
        };

    } else {
        console.log(`computerBool is ${computerBool}`);
    };
};

//////////////////////////////////////////////////////////////////////////
// need TODO: create a function to change to contentID string and reverse:

// let homespace_idString = homespace;
// console.log("homespace_idString");
// console.log(homespace_idString);
// homespace = homespace.match(/\d+/g);
// console.log("homespace after match:");
// console.log("currentGoldiPawns");
// console.log(currentGoldiPawns);
// };

/***/ }),

/***/ "./src/split-logic/test-scripts/friend-or-foe-test.js":
/*!************************************************************!*\
  !*** ./src/split-logic/test-scripts/friend-or-foe-test.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

pawnStats = __webpack_require__(/*! ../pawn-stats */ "./src/split-logic/pawn-stats.js");
healthInfo = __webpack_require__(/*! ../health-info */ "./src/split-logic/health-info.js");

// this replaces nearbyPawn function:
module.exports = friendOrFoe = function (homeSquare_ID, adjacentSquaresArr, pawnType) {
    console.log("friendOrFoe function fires");
    // evaluates nearby (adjacent) spaces and check if contains "empty-space" class

    console.log("friendOrFoe function fires");
    console.log("adjacentSquaresArr");
    console.log(adjacentSquaresArr);

    console.log("homeSquare_ID::");
    console.log(homeSquare_ID);

    pawnId = document.getElementById(homeSquare_ID).childNodes[0].id;
    var health = "";

    for (let i = 0; i < adjacentSquaresArr.length; i++) {
        destinationID = adjacentSquaresArr[i];

        console.log("destinationID");
        console.log(destinationID);

        spaceToCheck = document.getElementById(destinationID);
        if (spaceToCheck != null) {

            console.log("spaceToCheck");
            console.log(spaceToCheck);

            if (spaceToCheck.classList.contains("empty-space")) {
                console.log("space is empty");
            } else {

                console.log("spaceToCheck.childNodes[0]");
                console.log(spaceToCheck.childNodes[0]);

                if (spaceToCheck.childNodes[0].classList.contains(`${pawnType}-pawn`)) {
                // if (spaceToCheck.childNodes[0].classList.contains("human-pawn")) {
                    console.log(`Hey ${pawnType}, there's strength in numbers!`);
                    let currentSpace = spaceToCheck.childNodes[0].classList;
                    if (currentSpace.contains("zombie-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);
                                health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    } else if (currentSpace.contains("cyborg-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);  // TODO: add a multiplier for randomizer according to pawnType, then eliminate need for repeated checker
                                health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    } else if (currentSpace.contains("human-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);
                                
                                health = pawnStats[pawnType].pawnSpawn[i].health;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health < 50) {
                                    health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                } else if (health > 50) {
                                    health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                } else {
                                    health = pawnStats[pawnType].pawnSpawn[i].health;
                                };
                                
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    };

                } else if (spaceToCheck.childNodes[0].classList.contains("zombie-pawn")) {

                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homePawnLoc");
                        console.log(homePawnLoc);

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                            // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                            // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                            if (health > -11 && health < 111) {

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log("lastchild");
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };

                        };
                    };
                    // TODO: get target piece's ID in pawnStats?
                    // pass into updateStats function;
                    // function initiated in conditional
                    // multiplier if adjacent pawns are 'allies'... and adjacent to them.. and so on...
                    console.log("CAUTION: the zombies are draining you too quickly!");
                } else if (spaceToCheck.childNodes[0].classList.contains("cyborg-pawn")) {
                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                            // health = pawnStats[pawnType].pawnSpawn[i].health + 10;
                            if (health > -11 && health < 111) {

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };
                        };
                    };
                    console.log("CAUTION: the cyborgs are healing you too quickly!");
                } else if (spaceToCheck.childNodes[0].classList.contains("human-pawn")) {
                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            if (pawnType == "zombie") {
                                health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health + 5;
                                
                            } else if (pawnType == "cyborg") {
                                health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 5;

                            } else {
                                alert("My apologies, an error has occurred!");
                            };

                            if (health > -11 && health < 111) {
                                console.log("TEST FUNC BELOW:");

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };
                        };
                    };
                    console.log("CAUTION: the cyborgs are healing you too quickly!");
                };
            };
        } else {
            console.log(`destination space: ${destinationID} is out of the playable area`);
        };

        // weightedMove = require("./weightedMove");
        // weightedMove(enemyId, adjacentSquaresArr);
    };
};

/***/ }),

/***/ "./src/split-logic/test-scripts/goldilocks-checker.js":
/*!************************************************************!*\
  !*** ./src/split-logic/test-scripts/goldilocks-checker.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const enemyMoves = __webpack_require__(/*! ../enemy-moves */ "./src/split-logic/enemy-moves.js");
const Goldilocks = __webpack_require__(/*! ./goldilocks-constructor */ "./src/split-logic/test-scripts/goldilocks-constructor.js");
const rateSpace = __webpack_require__(/*! ./rate-space */ "./src/split-logic/test-scripts/rate-space.js");
const pawnStats = __webpack_require__(/*! ../pawn-stats */ "./src/split-logic/pawn-stats.js");

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

/***/ }),

/***/ "./src/split-logic/test-scripts/goldilocks-constructor.js":
/*!****************************************************************!*\
  !*** ./src/split-logic/test-scripts/goldilocks-constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const rateSpace = __webpack_require__(/*! ./rate-space */ "./src/split-logic/test-scripts/rate-space.js");

module.exports = Goldilocks = function (type, move, food, friend, enemy, homeSpace, homespace_idString, targetSpace, targetSpace_idString, rateSpace) {

    this.move = move;
    this.food = food;
    this.friend = friend;
    this.enemy = enemy;
    this.type = type;
    this.homeSpace = homeSpace;
    this.homespace_idString = homespace_idString;
    this.targetSpace = targetSpace;
    this.targetSpace_idString = targetSpace_idString;
    this.weight = rateSpace(
        move,
        food,
        friend,
        enemy
    );
};

/***/ }),

/***/ "./src/split-logic/test-scripts/move-enemy-pawn-func.js":
/*!**************************************************************!*\
  !*** ./src/split-logic/test-scripts/move-enemy-pawn-func.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = moveEnemyPawnFunc = function (oldSpaceID, newSpaceID, updatePawnStatus) {
    console.log("moveEnemyPawnFunc function fires"); 
    
    let parentDiv = document.getElementById(oldSpaceID); 
    console.log(parentDiv);
    parentDiv.classList.add("parent-holding-pawn");
    console.log(parentDiv.childNodes);
    let currentPawnHeld = parentDiv.childNodes[0].id;
    let holdingClass = document.getElementById(currentPawnHeld);
    holdingClass.classList.add("holding");
    // holdingClass.getBoundingClientRect();
    // window.getComputedStyle(holdingClass);

    // setTimeout(function () {
    //     requestAnimationFrame(function () {
    //         // trigger the animation
    //     });
    // }, 20);

    // var div = document.createElement("div");
    // document.body.appendChild(div);

    // requestAnimationFrame(function () {
    //     div.className = "fade";
    // });
    
    /////////////////////////////////////////////////////////////////////

    let newEnemySpace = document.getElementById(newSpaceID);
    newEnemySpace.style.transition = "all 2s";
    newEnemySpace.appendChild(holdingClass);
    // holdingClass.style.animationDelay = "200ms";
    holdingClass.classList.remove("holding");
    newEnemySpace.classList.remove("empty-space");
    parentDiv.classList.remove("parent-holding-pawn");
    parentDiv.classList.add("empty-space");
    holdingPawn = false;


    /////////////////////////////////////////////////////////////////////

    let contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
    newEnemySpace.appendChild(contentCircle);

    /////////////////////////////////////////////////////////////////////

    let newParentDiv_ID = newSpaceID;

    console.log("newParentDiv_ID");
    console.log(newParentDiv_ID);

    updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
    currentPawnHeld = null;
};

/***/ }),

/***/ "./src/split-logic/test-scripts/rate-space.js":
/*!****************************************************!*\
  !*** ./src/split-logic/test-scripts/rate-space.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rateSpace = function (move, food, friend, enemy) {
    console.log("rateSpace method fires");

    let weight = move + food + friend + enemy;

    console.log("weight");
    console.log(weight);

    return weight;
};

/***/ }),

/***/ "./src/split-logic/test-scripts/touch-events.js":
/*!******************************************************!*\
  !*** ./src/split-logic/test-scripts/touch-events.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = touchEvents = function () {
    console.log("touchEvents function fires");

    var currentPawnHeld = null;

    /* Event fired on the touch target */
    touchStart = function (event) {
        if (event.target.classList.contains("human-pawn")) {
            // event.dataTransfer.getData("Text", event.target.id);
            holdingPawn = true;
            currentPawnHeld = event.target.id;

            let holdingClass = document.getElementById(currentPawnHeld);
            holdingClass.classList.add("holding");
            parentDiv = document.getElementById(currentPawnHeld).parentNode;
            parentDiv.classList.add("parent-holding-pawn");
        } else {
            event.target.removeEventListener("dragstart", dragStart);
            // document.getElementById("myDIV").
            // document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
        };

        // });
    };
    document.addEventListener("touchstart", touchStart);

    var holdingPawn = false;
    var holdingClass = null;
    var parentDiv = null;
    var counterValue = 0;


    /* Event fired on the touchmove target */
    document.addEventListener("touchmove", function (event) {
        // event.preventDefault();
        console.log("touchmove");
        console.log("holdingPawn: " + holdingPawn);
        console.log(counterValue);
        counterValue++;
    });

    // Events fired on the drop target:
    document.addEventListener("touchend", function (event) {
        // event.preventDefault();

        console.log("currentPawnHeld");
        console.log(currentPawnHeld);

        if (currentPawnHeld != null) {
            if (document.getElementById(currentPawnHeld).classList.contains("human-pawn")) {
                console.log("currentPawnHeld = human-pawn");

                if (event.target.classList.contains("empty-space")) {
                    // var data = event.dataTransfer.setData("Text");
                    holdingClass = document.getElementById(currentPawnHeld);
                    event.target.appendChild(holdingClass);
                    holdingClass.classList.remove("holding");
                    event.target.classList.remove("empty-space");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.add("empty-space");
                    holdingPawn = false;

                    /////////////////////////////////////////////////////
                    contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
                    event.target.appendChild(contentCircle);
                    /////////////////////////////////////////////////////

                    newParentDiv_ID = event.target.id;
                    console.log("newParentDiv_ID");
                    console.log(newParentDiv_ID);

                    updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
                    currentPawnHeld = null;

                    console.log("parentDiv");
                    console.log(parentDiv);
                    console.log("parentDiv.id");
                    console.log(parentDiv.id);
                    console.log("contentCornerHealth");
                    console.log(contentCornerHealth);

                    /////////////////////////////////////////////////////

                } else if (event.target.classList.contains("empty-space") == false) {
                    console.log("this slot is full");
                } else {
                    holdingClass.classList.remove("holding");
                    parentDiv.classList.remove("parent-holding-pawn");
                    parentDiv.classList.remove("empty-space");
                    holdingPawn = false;
                    currentPawnHeld = null;
                };
            } else {
                console.log("currentPawnHeld not human-pawn");
            };
        };
    });
};

/***/ }),

/***/ "./src/split-logic/test-scripts/update-percent.js":
/*!********************************************************!*\
  !*** ./src/split-logic/test-scripts/update-percent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = updatePercent = function (pawnTypeTotal) {
    console.log("updatePercent function fires:");
    
    console.log(pawnTypeTotal);
    let pawnTypeTotalCount = pawnTypeTotal.cyborg + pawnTypeTotal.human + pawnTypeTotal.zombie;

    let cyborgBar = document.getElementById("cyborg-bar");
    let humanBar = document.getElementById("human-bar");
    let zombieBar = document.getElementById("zombie-bar");

    let cybPerText = document.getElementById("cyborg-percentage");
    let humPerText = document.getElementById("human-percentage");
    let zomPerText = document.getElementById("zombie-percentage");

    // set CSS property for percentages:
    cyborgBar.style.setProperty("--cyborg-health", (pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100 + "%");
    humanBar.style.setProperty("--human-health", (pawnTypeTotal.human / pawnTypeTotalCount) * 100 + "%");
    zombieBar.style.setProperty("--zombie-health", (pawnTypeTotal.zombie / pawnTypeTotalCount) * 100 + "%");

    // set inner text for percentages:
    cybPerText.innerHTML = ((pawnTypeTotal.cyborg / pawnTypeTotalCount) * 100).toFixed();
    humPerText.innerHTML = ((pawnTypeTotal.human / pawnTypeTotalCount) * 100).toFixed();
    zomPerText.innerHTML = ((pawnTypeTotal.zombie / pawnTypeTotalCount) * 100).toFixed();
};

/***/ }),

/***/ "./src/split-logic/update-pawn-status.js":
/*!***********************************************!*\
  !*** ./src/split-logic/update-pawn-status.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getPawnTypeTotal = __webpack_require__(/*! ./get-pawn-type-total */ "./src/split-logic/get-pawn-type-total.js");
const pawnStats = __webpack_require__(/*! ./pawn-stats */ "./src/split-logic/pawn-stats.js");
const updatePercent = __webpack_require__(/*! ./test-scripts/update-percent */ "./src/split-logic/test-scripts/update-percent.js");

module.exports = updatePawnStatus = function (string, pawnID, newParentID) {
    console.log(`updatePawnStatus function fires with string = ${string}`);
    console.log("pawnID:");
    console.log(pawnID);
    console.log("pawnStats");
    console.log(pawnStats);
    let pawnType = "";
    let pawnTypeTotal = 0;

    // "switch" pawn type (pawn-switch):

    if (string === "switch") {
        console.log("switch!");
        // console.log("return object:");
        console.log("pawnID in updatePawnStatus: 'switch'");
        console.log(pawnID);
        let pawnTypeSwitch = newParentID; // TODO: need to change variable argument to reflect the various possible arguments to be passed in.
        let pawnElem = document.getElementById(pawnID);
        console.log("pawnElem");
        console.log(pawnElem);
        console.log("pawnTypeSwitch");
        console.log(pawnTypeSwitch);

        let typeBefore = pawnTypeSwitch[0];
        let typeAfter = pawnTypeSwitch[1];

        let pawnStat_Type = pawnStats[typeBefore]; //  <==== pawnType???
        let allPawnSpawn = pawnStat_Type.pawnSpawn;

        console.log("allPawnSpawn?");
        console.log(allPawnSpawn);

        for (let index = 0; index < allPawnSpawn.length; index++) {

            console.log(allPawnSpawn[index].id);

            if (allPawnSpawn[index].id == pawnID) {

                let indexToDelete = index;
                let pawnSpawnHolder = allPawnSpawn[index];

                allPawnSpawn.splice(indexToDelete, 1);

                pawnStats[typeAfter].pawnSpawn.push(pawnSpawnHolder);

                console.log(`before?`);
                console.log(pawnStats[typeBefore]);
                console.log(`after?`);
                console.log(pawnStats[typeAfter]);


            };
        };
        // pawnTypeTotal = getPawnTypeTotal();
        // updatePercent(pawnTypeTotal);
        
        
        //     if (pawnID == allPawnSpawn[i].loc) {
            //         console.log(`${allPawnSpawn[i].id} equals pawnID`);
            //     };
            // };
            
            // if (
                //     pawn_Type === "cyborg" ||
                //     pawn_Type === "human" ||
                //     pawn_Type === "zombie"
                // ) {
                    
                    
                    // "location" swap (drag-and-drop):
                } else if (string === "location") {
                    let pawnElem = document.getElementById(pawnID);
                    
                    if (pawnElem.classList.contains("cyborg-pawn")) {
                        console.log("cyborg-pawn");
                        cyborgSpawn = pawnStats.cyborg.pawnSpawn;
                        
                        // TODO: update location: 
                        for (let z = 0; z < cyborgSpawn.length; z++) {
                            if (cyborgSpawn[z].id == pawnID) {
                                console.log(`cyborg- ${pawnID} -found!`); // TODO: use this to find and change class/race
                                console.log(`cyborg location was: ${cyborgSpawn[z].loc}.`);
                                
                                cyborgSpawn[z].loc[0] = newParentID;
                                console.log(`cyborg location now is: ${cyborgSpawn[z].loc}.`);
                            };
                        };
                        // TODO: update race: 
                        // TODO: update health?: Already done! Link it!
                        
                    } else if (pawnElem.classList.contains("human-pawn")) {
                        console.log("human-pawn");
                        humanSpawn = pawnStats.human.pawnSpawn;
                        
                        // TODO: update location: 
                        for (let z = 0; z < humanSpawn.length; z++) {
                            if (humanSpawn[z].id == pawnID) {
                                console.log(`human- ${pawnID} -found!`); // TODO: use this to find and change class/race
                                console.log(`human location was: ${humanSpawn[z].loc}.`);
                                
                                humanSpawn[z].loc[0] = newParentID;
                                console.log(`human location now is: ${humanSpawn[z].loc}.`);
                            };
                        };
                        // TODO: update race: 
                        // TODO: update health?: Already done! Link it!
                        
                    } else if (pawnElem.classList.contains("zombie-pawn")) {
                        console.log("zombie-pawn");
                        zombieSpawn = pawnStats.zombie.pawnSpawn;
                        
                        // TODO: update location: 
                        for (let z = 0; z < zombieSpawn.length; z++) {
                            if (zombieSpawn[z].id == pawnID) {
                                console.log(`zombie- ${pawnID} -found!`); // TODO: use this to find and change class/race
                                console.log(`zombie location was: ${zombieSpawn[z].loc}.`);
                                
                                zombieSpawn[z].loc[0] = newParentID;
                                console.log(`zombie location now is: ${zombieSpawn[z].loc}.`);
                            };
                        };
                        // TODO: update race: 
                        // TODO: update health?: Already done! Link it! 
                    };
                };
                
                // pawnTypeTotal = {
                    //     cyborg: pawnStats.cyborg.pawnSpawn.length,
                    //     human: pawnStats.human.pawnSpawn.length,
                    //     zombie: pawnStats.zombie.pawnSpawn.length
                    // };
                    
                    // updatePercent(pawnTypeTotal);
                    
                    
                    // testing ONLY:
    // let pawnSpawn = pawnStats[pawnType]
    // humanPawnSpawn = pawnStats[pawnType].pawnSpawn;

    setTimeout(function () {
        // requestAnimationFrame(function () {
        //     // trigger the animation
        //     nextTurn(true, "cyborg", adjacentSpaces);
        // });
        updatePercent(getPawnTypeTotal(pawnStats));
    }, 200);
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map