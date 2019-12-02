// isAdjacent = require("./isAdjacent");
adjacentSpaces = require("../adjacent-spaces");
// evaluates nearby (adjacent) spaces and check if contains "empty-space" class
module.exports = nearbyPawn = function (currentPawnLocID, destinationID) {
    spaceToCheck = document.getElementById(destinationID);

    if (spaceToCheck.classList.contains("empty-space")) {
        console.log("space is empty");
    } else {
 
        if (spaceToCheck.hasChildNodes().classList.contains("human-pawn")) {
            console.log("there's strength in numbers!");

        } else if (spaceToCheck.hasChildNodes().classList.contains("zombie-pawn")) {
            console.log("CAUTION: the zombies are draining you too quickly!");
        } else if (spaceToCheck.hasChildNodes().classList.contains("cyborg-pawn")) {
            console.log("CAUTION: the cyborgs are healing you too quickly!");
        };
    };
};