module.exports = moveEnemyPawnFunc = function (oldSpaceID, newSpaceID) {
    console.log("moveEnemyPawnFunc function fires");
    
    let parentDiv = document.getElementById(oldSpaceID);
    parentDiv.classList.add("parent-holding-pawn");
    let currentPawnHeld = parentDiv.childNodes[0].id;
    let holdingClass = document.getElementById(currentPawnHeld);
    holdingClass.classList.add("holding");
    
    /////////////////////////////////////////////////////////////////////

    let newEnemySpace = document.getElementById(newSpaceID);
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