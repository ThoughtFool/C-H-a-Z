module.exports = moveEnemyPawnFunc = function (oldSpaceID, newSpaceID, updatePawnStatus) {
    console.log("moveEnemyPawnFunc function fires"); 
    
    let parentDiv = document.getElementById(oldSpaceID); 
    parentDiv.style.transition = "all 10ms";
    console.log(parentDiv);
    parentDiv.classList.add("parent-holding-pawn");
    console.log(parentDiv.childNodes);
    let currentPawnHeld = parentDiv.childNodes[0].id;
    let holdingClass = document.getElementById(currentPawnHeld);
    holdingClass.style.transition = "all 10ms";
    holdingClass.classList.add("holding");
    // holdingClass.getBoundingClientRect();
    window.getComputedStyle(parentDiv);

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