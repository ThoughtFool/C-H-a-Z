const moveInterval = require("./move-interval");
const updatePawnStatus = require("./update-pawn-status");
module.exports = animateDeltas = function (pawnID, beforeMoveRect, afterMoveRect, newEnemySpace) {
    // module.exports = animateDeltas = function (pawnID, beforeMoveRect, afterMoveRect, newEnemySpace, resolve) {
    // myConsole("animateDeltas function fires");
    pawns = document.querySelector(".pawn");

    let domNode = document.getElementById(pawnID);
    let moveLeft = 0;
    let moveTop = 0;
    let posLeft = 0;
    let posTop = 0;

    // domNode.style.transform = `translate(${beforeMoveRect.left}px, ${beforeMoveRect.top}px)`;

    /////////////////////// health score div ///////////////////////

    myConsole(`pawnID: ${pawnID}`);
    myConsole(`newEnemySpace: ${newEnemySpace}`);

    let contentCircle = document.getElementById(`content-health-${pawnID}`);
    newEnemySpace.appendChild(contentCircle);

    ///////////////////////////////////////////////////////////////

    domNode.style.left = beforeMoveRect.left;
    domNode.style.top = beforeMoveRect.top;
    domNode.style.zIndex = 1;
    domNode.style.transition = 'transform 0ms';
    let stepCounter = 0;
    let limit = 5000;
    let start = null;

    const animatePawn = async function () {
        // const animatePawn = async function (resolve) {

        // if (start === null) {
        //     start = timestamp;
        // };
        // var progress = timestamp - start;
        // if (progress < limit) {
        //     await requestAnimationFrame(animatePawn);
        // };

        // a - b = d:
        const deltaLeft = afterMoveRect.left - beforeMoveRect.left;
        const deltaTop = afterMoveRect.top - beforeMoveRect.top;

        // deltaLeft_Multi = deltaLeft * 100;
        // deltaTop_Multi = deltaTop * 100;

        let leftStep = deltaLeft / 100;
        let topStep = deltaTop / 100;


        // alert("deltaLeft:" + deltaLeft);
        // alert("leftStep:" + leftStep);
        // alert("posLeft:" + posLeft);

        if (stepCounter < 100) {
            // stepCounter += leftStep;

            // if (beforeMoveRect.left + posLeft != afterMoveRect.left) {
            // if (posLeft != deltaLeft) {
            // if (posLeft != afterMoveRect.left || posTop != afterMoveRect.top) {

            posLeft = posLeft + leftStep;
            posTop = posTop + topStep;

            // posLeft = posLeft + leftStep;
            // posTop = posTop + topStep;

            // myConsole("posLeft");
            // myConsole(posLeft);
            // myConsole("posTop");
            // myConsole(posTop);

            // domNode.style.transform = `translate(${posLeft}px, ${posTop}px)`;
            domNode.style.left = beforeMoveRect.left + posLeft;
            domNode.style.top = beforeMoveRect.top + posTop;

            domNode.style.zIndex = 1;
            domNode.style.transition = 'transform 500ms';
            // alert("moveInterval now");
            // domNode.style.transform = '';
            // domNode.style.zIndex = 1;



            // await setTimeout(() => {
            stepCounter++;
            await animatePawn();
            // await animatePawn(resolve);
            // }, 500);

            // } else {
            //     cancelAnimationFrame(animatePawn);
            //     // alert("Done!");


        } else {

            return "Done!!!";
            // return resolve();
        };
    };

    animatePawn();
    // animatePawn(resolve);
    /////////////////////////////////////////////////////////////////////////////
};