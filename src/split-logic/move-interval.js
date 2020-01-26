module.exports = moveInterval = function (pawnID, beforeMoveRect, afterMoveRect, newEnemySpace) {
    // let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // set number of intervals:
    let numInterval = 60;

    // get total viewport size:
    let viewportHeight = 785;
    let viewportWidth = 1028;

    // get beforeMove top/left: 0/0: getClientBoundingRect().top
    // get afterMove top/left: 10/10

    myConsole("moveInterval function fires");

    // let beforeMove_Left = beforeMoveRect.left;
    // let beforeMove_Top = beforeMoveRect.top;

    // let afterMove_Left = afterMoveRect.left;
    // let afterMove_Top = afterMoveRect.top;

    // // get deltas top/left: add 10 / add 10
    // let delta_Left = afterMove_Left - beforeMove_Left;
    // let delta_Top = afterMove_Top - beforeMove_Top;

    // myConsole("delta_Left");
    // myConsole(delta_Left);
    // myConsole("delta_Top");
    // myConsole(delta_Top);

    // let domNode = document.getElementById(pawnID);

    // myConsole("domNode");
    // myConsole(domNode);

    // // numInterval = num of intervals: 10?
    // let percentIncrementer_Left = delta_Left / numInterval;
    // let percentIncrementer_Top = delta_Top / numInterval;

    // // get computed style???
    // var left = 0;
    // var top = 0;

    // async function animateFrame() {

    //     left = left + percentIncrementer_Left;
    //     top = top + percentIncrementer_Top;

    //     console.log("left");
    //     console.log(left);
    //     console.log("top");
    //     console.log(top);

    //     console.log("delta_Top");
    //     console.log(delta_Top);

    //     deltaX = left;
    //     deltaY = top;

    //     ///////////////////////////////
    //     await requestAnimationFrame(() => {
    //         domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    //         domNode.style.zIndex = 1;
    //         domNode.style.transition = 'transform 1000ms';

    //         // requestAnimationFrame(() => {
    //         // In order to get the animation to play, we'll need to wait for
    //         // the 'invert' animation frame to finish, so that its inverted
    //         // position has propagated to the DOM.
    //         //
    //         // Then, we just remove the transform, reverting it to its natural
    //         // state, and apply a transition so it does so smoothly.
    //         // domNode.style.transform = '';
    //         // domNode.style.zIndex = 1;
    //         // domNode.style.transition = 'transform 2000ms';

    //         /////////////////////// health score div ///////////////////////

    //         let contentCircle = document.getElementById(`content-health-${pawnID}`);
    //         newEnemySpace.appendChild(contentCircle);

    //         ///////////////////////////////////////////////////////////////

    //         console.log("newParentDiv_ID");
    //         console.log(newParentDiv_ID);

    //         // });
    //     });

    //     // await updatePawnStatus("location", pawnID, newParentDiv_ID);

    //     if (top >= delta_Top) {
    //         console.log("clear?");
    //         clearInterval(thisInt);
    //     };
    // };

    // // set interval counter:
    // const thisInt = setInterval(animateFrame, 1000);

};
// moveInterval();