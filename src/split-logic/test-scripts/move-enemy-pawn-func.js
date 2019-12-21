module.exports = moveEnemyPawnFunc = function (oldSpaceID, newSpaceID) {
    console.log("moveEnemyPawnFunc function fires");

    let oldEnemySpace = document.getElementById(oldSpaceID);
    console.log(oldEnemySpace);

    let beforeMovePawn = oldEnemySpace.childNodes[0];
    console.log(beforeMovePawn);

    let newEnemySpace = document.getElementById(newSpaceID);
    console.log(newEnemySpace);

    return newEnemySpace.appendChild(beforeMovePawn);    
};