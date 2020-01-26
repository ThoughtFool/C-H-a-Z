module.exports = animateFrameCallFunc = function (pawnID, beforeMoveRect, afterMoveRect, newParentDiv_ID, newEnemySpace) {

var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');

function animateFrame(timestamp) {
    if (!start) { 
        start = timestamp;
    };
    var progress = timestamp - start;
    element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';

    if (progress < 2000) {
        window.requestAnimationFrame(animateFrame);
    };
}

window.requestAnimationFrame(animateFrame);
};

////////////////////////////////////////////////////////////////////
// Animate.
function animate(highResTimestamp) {
    requestAnimationFrame(animate);
    // Animate something...
}

// Start the animation.
requestAnimationFrame(animate);

////////////////////////////////////////////////////////////////////

// Animate.
// function animate() {
//     requestID = requestAnimationFrame(animate);

//     // If the box has not reached the end draw on the canvas.
//     // Otherwise stop the animation.
//     if (posX <= (canvas.width - boxWidth)) {
//         ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
//         ctx.fillRect(posX, 0, boxWidth, canvas.height);
//         posX += pixelsPerFrame;
//     } else {
//         cancelAnimationFrame(requestID);
//     }
// }