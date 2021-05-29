const animateDeltas = require("./animate-deltas");

module.exports = moveEnemyPawnFunc = async function (oldSpaceID, newSpaceID, updatePawnStatus, animateDeltas, moveInterval) {
    console.log("moveEnemyPawnFunc function fires");

    let parentDiv = document.getElementById(oldSpaceID);
    console.log(parentDiv);
    parentDiv.classList.add("parent-holding-pawn");
    console.log(parentDiv.childNodes);
    let currentPawnHeld = parentDiv.childNodes[0].id;
    let holdingClass = document.getElementById(currentPawnHeld);
    holdingClass.classList.add("holding");

    // get viewport location of pawn before move:
    let beforeMove = holdingClass.getBoundingClientRect();
    myConsole(`${currentPawnHeld} position beforeMove`);
    myConsole(beforeMove);

    /////////////////////////////////////////////////////////////////////

    let newEnemySpace = document.getElementById(newSpaceID);

    myConsole(`newSpaceID: ${newSpaceID}`);
    myConsole(`newEnemySpace: ${newEnemySpace}`);
    // newEnemySpace.style.transition = "all 2s";

    /////////////////////////////////////////////////////////////////////

    // get viewport location of pawn after move:
    let afterMove = holdingClass.getBoundingClientRect();
    let pawnID = currentPawnHeld;
    let newParentDiv_ID = newSpaceID;
    let location = "location";

    function moveEnemyPawnElem(returnMsg) {

        newEnemySpace.appendChild(holdingClass);

        myConsole(`${currentPawnHeld} position afterMove`);
        myConsole(afterMove);
        myConsole(`returnMsg: ${returnMsg}`);

        // holdingClass.style.animationDelay = "200ms";
        holdingClass.classList.remove("holding");
        newEnemySpace.classList.remove("empty-space");
        parentDiv.classList.remove("parent-holding-pawn");
        parentDiv.classList.add("empty-space");
        holdingPawn = false;

        return "moveEnemyPawnElem: success!";
    };

    // find deltas/changes for boundingRect:
    // Δx = afterMove.left - beforeMove.left;
    // Δy = afterMove.top - beforeMove.top;
    // myConsole(`${currentPawnHeld} position deltas:`);
    // myConsole(Δx);
    // myConsole(Δy);

    // myConsole("window.innerWidth");
    // myConsole(window.innerWidth);
    // myConsole("window.innerHeight");
    // myConsole(window.innerHeight);

    // var makeParabolaStep = function (el, from, to) {
    //     return new Promise(function (resolve) {
    //         raf(_parabolaStep(el, from, to, resolve));
    //     });
    // };

    function forEachPromise(arrayToLoop, chainedFuncStart) {
        arrayToLoop.forEach((itemToLoop) => {
            return new Promise((resolve, reject) => {
                return resolve(chainedFuncStart);
            });
        });
    };

    function promiseKeeper(namedFunc, argsArr) {
        // get back 'success message' from end of array of arguments:
        let returnMessage = argsArr[argsArr.length - 1];

        return new Promise((resolve, reject) => {
            myConsole(`working... ${returnMessage}`);
            return resolve(namedFunc(...argsArr));
        });
    };

    function delayPromise(t, v) {

        return new Promise((resolve) => {
            setTimeout(resolve.bind(null, v), t)
        });
    };


    // promiseKeeper.prototype.delayPromise = (t) => {
    //     return this.then((v) => {
    //         myConsole("v: " + v)
    //         return delayPromise(t, v);
    //     });
    // };

    function addFX(currentPawnHeld, fx) {
        let pawnNode = document.getElementById(currentPawnHeld);
        pawnNode.classList.add(fx);
        return "addFX: success!";

    };

    function removeFX(currentPawnHeld, fx) {
        let pawnNode = document.getElementById(currentPawnHeld);
        pawnNode.classList.remove(fx);

        currentPawnHeld = null;
        return "removeFX: success!";

    };

    function delay(time, msg) {
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        })
            .then(() => {
                myConsole(`this msg: ${msg}`);
                return "delay: success!";
            })

            .then((successMessage) => promiseKeeper(moveEnemyPawnElem, [successMessage]))
            .then((successMessage) => promiseKeeper(animateDeltas, [pawnID, beforeMove, afterMove, newEnemySpace, successMessage]))
            .then((successMessage) => promiseKeeper(updatePawnStatus, [location, pawnID, newParentDiv_ID, successMessage]))
        // .then((successMessage) => promiseKeeper(removeFX, [currentPawnHeld, "halo-glow", successMessage]))
        // .then((successMessage) => promiseKeeper(removeFX, [newParentDiv_ID, "halo-drop", successMessage]))
    };

    return promiseKeeper(addFX, [currentPawnHeld, "halo-glow", "promise-chain"])

        .then((successMessage) => promiseKeeper(addFX, [newParentDiv_ID, "halo-drop", successMessage]))
        .then((successMessage) => {
            myConsole(`successMessage before delay: ${successMessage}`);
            return delay(1250, successMessage)
                .then((successMessage) => promiseKeeper(removeFX, [currentPawnHeld, "halo-glow", successMessage]))
                .then((successMessage) => promiseKeeper(removeFX, [newParentDiv_ID, "halo-drop", successMessage]));
            // return delayPromise(1250, successMessage);
        });

    // .then((response) => {
    //     myConsole(`response:: ${response}`);
    //     return new Promise(function (resolve) {
    //         setTimeout(() => {
    //             // await requestAnimationFrame(await animateDeltas(currentPawnHeld, beforeMove, afterMove, newEnemySpace, resolve));
    //             // pawnNode.classList.remove("halo-glow");

    //             // currentPawnHeld = null;

    //             resolve(response)

    //         }, 1250);
    //     });
    // })
    // .then(promiseKeeper(removeFX, [currentPawnHeld, "halo-glow"]));
    // .then((response) => {
    //     myConsole(`final .then: ${response}`);
    // });

    let doneMoving = false;

    function requestMove(doneMoving) {
        return new Promise((resolve, reject) => {
            if (doneMoving === true) {
                resolve("Done!");
            } else {
                reject("error!");
            };
        });
    };

    function processMove(response) {
        return new Promise((resolve, reject) => {
            myConsole("response: " + response);
            resolve(alert(response));
        });
    };

    // requestMove()
    //     .then((response) => { return processMove() })

    /////////////////////////////////////////////////////////////////////////

    // return new Promise(async function (resolve) {
    //     await setTimeout(() => {
    //         animateDeltas(currentPawnHeld, beforeMove, afterMove, newEnemySpace, resolve);
    //         // await requestAnimationFrame(await animateDeltas(currentPawnHeld, beforeMove, afterMove, newEnemySpace, resolve));
    //         pawnNode.classList.remove("halo-glow");

    //         currentPawnHeld = null;

    //     }, 1850);

    //     let pawnNode = document.getElementById(currentPawnHeld);
    //     pawnNode.classList.add("halo-glow");

    //     // updatePawnStatus("location", pawnID, newParentDiv_ID);
    // })
    //     .then(function () {
    //         // Will not run until after `sunElement` has gone from `10%` to `90%`
    //         return moveInterval(pawnID, beforeMove, afterMove, newEnemySpace);
    //         // return moveInterval(pawnID, beforeMoveRect, afterMoveRect, newEnemySpace);
    //     })
    //     .then(function () {
    //         // Will not run until after `sunElement` has gone from `10%` to `90%`
    //         return updatePawnStatus("location", pawnID, newParentDiv_ID);
    //     });

    //pawnID, beforeMoveRect, afterMoveRect, newParentDiv_ID, newEnemySpace
    // /////////////////////////////////////////////////////////////////////

    // let contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
    // newEnemySpace.appendChild(contentCircle);

    // /////////////////////////////////////////////////////////////////////


    // console.log("newParentDiv_ID");
    // console.log(newParentDiv_ID);

    // updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
};