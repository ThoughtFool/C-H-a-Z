// isAdjacent = require("./isAdjacent");
pawnStats = require("./pawn-stats");
healthInfo = require("./health-info");

// this replaces nearbyPawn function:
module.exports = friendOrFoe = function (homeSquare_ID, adjacentSquaresArr) {
    console.log("friendOrFoe function fires");
    // evaluates nearby (adjacent) spaces and check if contains "empty-space" class
    pawnType = "human"; // <<< testing ONLY (need to include other pawn types)

    console.log("friendOrFoe function fires");
    console.log("adjacentSquaresArr");
    console.log(adjacentSquaresArr);

    console.log("homeSquare_ID");
    console.log(homeSquare_ID);

    pawnId = document.getElementById(homeSquare_ID).childNodes[0].id;
    var health = "";

    for (let i = 0; i < adjacentSquaresArr.length; i++) {
        destinationID = adjacentSquaresArr[i];
        // console.log(adjacentSquaresArr.x[2]);

        console.log("destinationID");
        console.log(destinationID);

        spaceToCheck = document.getElementById(destinationID);
        if (spaceToCheck != null) {

            console.log("spaceToCheck");
            console.log(spaceToCheck);

            if (spaceToCheck.classList.contains("empty-space")) {
                console.log("space is empty");
            } else {

                console.log("spaceToCheck.childNodes[0]");
                console.log(spaceToCheck.childNodes[0]);

                if (spaceToCheck.childNodes[0].classList.contains("human-pawn")) {
                    console.log("there's strength in numbers!");

                } else if (spaceToCheck.childNodes[0].classList.contains("zombie-pawn")) {
                    // homePawn = document.getElementById(homeSquare_ID);
                    // homePawn.childNodes[0].id;

                    for (let i = 0; i < pawnStats.human.pawnSpawn.length; i++) {
                        // document.getElementById(homeSquare_ID).childNodes[0];

                        homePawnLoc = pawnStats.human.pawnSpawn[i].loc;
                        // homePawnLocString = homePawnLoc[homePawnLoc.length];

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            health = pawnStats.human.pawnSpawn[i].health - 10;
                            pawnStats.human.pawnSpawn[i].health = health;
                            console.log("lastchild");
                            console.log(spaceToCheck.childNodes[0].id);
                            console.log(document.getElementById(homeSquare_ID).lastChild);
                            
                            healthInfo(pawnType, pawnId);
                        };
                    };
                            // healthInfo(pawnType, pawnId);

                    // TODO: get target piece's ID in pawnStats?
                    // pass into updateStats function;
                    // function initiated in conditional
                    // (H + or - if over or under halfway health value,Z -5, C +5);
                    // multiplier if adjacent pawns are 'allies'... and adjacent to them.. and so on...
                    console.log("CAUTION: the zombies are draining you too quickly!");
                } else if (spaceToCheck.childNodes[0].classList.contains("cyborg-pawn")) {
                    for (let i = 0; i < pawnStats.human.pawnSpawn.length; i++) {
                        // document.getElementById(homeSquare_ID).childNodes[0];

                        homePawnLoc = pawnStats.human.pawnSpawn[i].loc;
                        // homePawnLocString = homePawnLoc[homePawnLoc.length];

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            health = pawnStats.human.pawnSpawn[i].health + 10;
                            pawnStats.human.pawnSpawn[i].health = health;
                            console.log(spaceToCheck.childNodes[0].id);
                            console.log(document.getElementById(homeSquare_ID).lastChild);

                            healthInfo(pawnType, pawnId);
                            
                            // TODO: add checkPawnStatus() here?
                            // checkPawnStatus = require("./check-pawn-status");

                        };
                    };
                    // healthInfo(pawnType, pawnId);

                    console.log("CAUTION: the cyborgs are healing you too quickly!");
                };
            };
        } else {
            console.log(`destination space: ${destinationID} is out of the playable area`);
        };
    };
};