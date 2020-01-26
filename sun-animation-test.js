// Same variables as before
var width = 50, // Width of the container (in vw)
    stepSize = 0.01, // Size of each step,
    sunElement = document.getElementById('sun'),
    raf = window.requestAnimationFrame; // Aliased requestAnimationFrame function 

// Nearly the same Parabola function
var myStepFunc = function (
    el,
    startProg,
    endProg,
    asc = null, // Necessary to know which direction we're going in,
    resolve // Now, feed in pointer to the resolve method of our Promise
) {
    return function () {
        // Decide whether this function is ascending or descending in progress
        if (asc === null) asc = startProg - endProg < 0;

        // Step in the right direction 
        var newProg = asc ? startProg + stepSize : startProg - stepSize;

        // "getParabolaXY" takes the width and progress percentage and 
        // returns an array with [X, Y] that percentage corresponds to.
        var newXY = getParabolaXY(width, newProg);

        el.style.left = `${newXY[0]}vw`;
        el.style.bottom = `${newXY[1]}vh`;

        if (asc ? newProg < endProg : newProg > endProg) {
            // "painting" the next frame
            raf(myStepFunc(el, newProg, endProg, asc, resolve));
        } else {
            // Call the hook to the resolve Promise once it's clear the animation is complete
            resolve();
        }
    };
}

// Function that creates a Promise wrapper for our animation
var step = function (el, from, to) {
    return new Promise(function (resolve) {
        raf(myStepFunc(el, from, to, resolve));
    });
};

// No more need for `setTimeout`, just chain with `.then()`
step(sunElement, 0.1, 0.9).then(function () {
    // Will not run until after `sunElement` has gone from `10%` to `90%`
    return step(sunElement, 0.9, 0.45);
}).then(function () {
    // Will not run until after `sunElement` has gone from `90%` to `45%`
    return step(sunElement, 0.45, 0.4);
});