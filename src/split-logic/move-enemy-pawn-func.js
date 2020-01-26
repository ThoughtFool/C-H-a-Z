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
    // newEnemySpace.style.transition = "all 2s";
    newEnemySpace.appendChild(holdingClass);

    /////////////////////////////////////////////////////////////////////

    // get viewport location of pawn after move:
    let afterMove = holdingClass.getBoundingClientRect();
    myConsole(`${currentPawnHeld} position afterMove`);
    myConsole(afterMove);

    // holdingClass.style.animationDelay = "200ms";
    holdingClass.classList.remove("holding");
    newEnemySpace.classList.remove("empty-space");
    parentDiv.classList.remove("parent-holding-pawn");
    parentDiv.classList.add("empty-space");
    holdingPawn = false;
    let pawnID = currentPawnHeld;
    let newParentDiv_ID = newSpaceID;

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


    return new Promise(async function (resolve) {
        await setTimeout(() => {
            animateDeltas(currentPawnHeld, beforeMove, afterMove, newEnemySpace, resolve);
            // await requestAnimationFrame(await animateDeltas(currentPawnHeld, beforeMove, afterMove, newEnemySpace, resolve));

            currentPawnHeld = null;
            
        }, 750);

            // updatePawnStatus("location", pawnID, newParentDiv_ID);
        })
        .then(function () {
            // Will not run until after `sunElement` has gone from `10%` to `90%`
            return moveInterval(pawnID, beforeMove, afterMove, newEnemySpace);
            // return moveInterval(pawnID, beforeMoveRect, afterMoveRect, newEnemySpace);
        })
        .then(function () {
            // Will not run until after `sunElement` has gone from `10%` to `90%`
            return updatePawnStatus("location", pawnID, newParentDiv_ID);
        });

    //pawnID, beforeMoveRect, afterMoveRect, newParentDiv_ID, newEnemySpace
    // /////////////////////////////////////////////////////////////////////

    // let contentCircle = document.getElementById(`content-health-${currentPawnHeld}`);
    // newEnemySpace.appendChild(contentCircle);

    // /////////////////////////////////////////////////////////////////////


    // console.log("newParentDiv_ID");
    // console.log(newParentDiv_ID);

    // updatePawnStatus("location", currentPawnHeld, newParentDiv_ID);
};