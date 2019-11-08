healthInfo = require("./health-info");

pawnStats = require("./pawn-stats");

module.exports = createPawn = function (destinationID, pawnCounter, pawnType) {
    console.log("createPawn function fires");
    // add type of pawn ("human", "zombie", "cyborg"), then create if statement below:

    squarePlace = document.getElementById(destinationID);

    if (squarePlace.classList.contains("empty-space")) {
        // squarePlace.classList.add("circle-shape");

        // create game piece div:
        gamePawn = document.createElement("img");
        pawnId = `pawn-${pawnCounter}`;
        gamePawn.setAttribute("id", pawnId);
        squarePlace.appendChild(gamePawn);
        newPawn = document.getElementById(pawnId);
        newPawn.classList.add("circle-shape");
        newPawn.classList.add(`${pawnType}-pawn`);
        newPawn.setAttribute("src", `/assets/images/${pawnType}-pawn.png`);

        // append health-score circle:
        // TODO: // create div to hold health score when pawn is placed there:

        // push pawns into pawnStats:
        if (pawnType == "human") {
            health = 50;
        } else if (pawnType == "zombie") {
            health = -10;
        } else if (pawnType == "cyborg") {
            health = 110;
        } else {
            console.log("pawnType doesn't exist yet");
        }
        pawnStats[pawnType].pawnSpawn.push({
            // [pawnId]: {
            id: pawnId,
            health: health,
            loc: [destinationID]


             // TODO: need to add dynamic value to set enemy pawns
            // }
        });

        healthInfo(pawnType, pawnId);

        pawnStats.pawnCounter = pawnCounter + 1;
        console.log(pawnStats);
        // return pawnStats;
    } else {
        console.log("destination space is full");
    }
};


