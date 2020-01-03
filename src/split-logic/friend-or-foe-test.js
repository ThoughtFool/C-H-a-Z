pawnStats = require("./pawn-stats");
healthInfo = require("./health-info");

// this replaces nearbyPawn function:
module.exports = friendOrFoe = function (homeSquare_ID, adjacentSquaresArr, pawnType) {
    console.log("friendOrFoe function fires");
    // evaluates nearby (adjacent) spaces and check if contains "empty-space" class

    console.log("friendOrFoe function fires");
    console.log("adjacentSquaresArr");
    console.log(adjacentSquaresArr);

    console.log("homeSquare_ID::");
    console.log(homeSquare_ID);

    pawnId = document.getElementById(homeSquare_ID).childNodes[0].id;
    var health = "";

    for (let i = 0; i < adjacentSquaresArr.length; i++) {
        destinationID = adjacentSquaresArr[i];

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

                if (spaceToCheck.childNodes[0].classList.contains(`${pawnType}-pawn`)) {
                // if (spaceToCheck.childNodes[0].classList.contains("human-pawn")) {
                    console.log(`Hey ${pawnType}, there's strength in numbers!`);
                    let currentSpace = spaceToCheck.childNodes[0].classList;
                    if (currentSpace.contains("zombie-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);
                                health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    } else if (currentSpace.contains("cyborg-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);  // TODO: add a multiplier for randomizer according to pawnType, then eliminate need for repeated checker
                                health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    } else if (currentSpace.contains("human-pawn")) {
                        for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                            homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                            console.log("homePawnLoc");
                            console.log(homePawnLoc);

                            console.log("homeSquare_ID");
                            console.log(homeSquare_ID);

                            if (homePawnLoc == homeSquare_ID) {
                                console.log("they match!");
                                let rand = Math.floor(Math.random() * 5);
                                
                                health = pawnStats[pawnType].pawnSpawn[i].health;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                                // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                                if (health < 50) {
                                    health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                } else if (health > 50) {
                                    health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                } else {
                                    health = pawnStats[pawnType].pawnSpawn[i].health;
                                };
                                
                                if (health > -11 && health < 111) {

                                    pawnStats[pawnType].pawnSpawn[i].health = health;
                                    console.log(spaceToCheck.childNodes[0].id);
                                    console.log("lastchild");
                                    console.log(document.getElementById(homeSquare_ID).lastChild);
                                    healthInfo(pawnType, pawnId);
                                };
                            };
                        };
                    };

                } else if (spaceToCheck.childNodes[0].classList.contains("zombie-pawn")) {

                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homePawnLoc");
                        console.log(homePawnLoc);

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                            // health = pawnStats[pawnType].pawnSpawn[i].health - 10;
                            // TODO: need to create a way to increase/decrease health of "allies" by proximity (use adjacentSpaces function):
                            if (health > -11 && health < 111) {

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log("lastchild");
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };

                        };
                    };
                    // TODO: get target piece's ID in pawnStats?
                    // pass into updateStats function;
                    // function initiated in conditional
                    // multiplier if adjacent pawns are 'allies'... and adjacent to them.. and so on...
                    console.log("CAUTION: the zombies are draining you too quickly!");
                } else if (spaceToCheck.childNodes[0].classList.contains("cyborg-pawn")) {
                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                            // health = pawnStats[pawnType].pawnSpawn[i].health + 10;
                            if (health > -11 && health < 111) {

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };
                        };
                    };
                    console.log("CAUTION: the cyborgs are healing you too quickly!");
                } else if (spaceToCheck.childNodes[0].classList.contains("human-pawn")) {
                    for (let i = 0; i < pawnStats[pawnType].pawnSpawn.length; i++) {

                        homePawnLoc = pawnStats[pawnType].pawnSpawn[i].loc;

                        console.log("homeSquare_ID");
                        console.log(homeSquare_ID);

                        if (homePawnLoc == homeSquare_ID) {
                            console.log("they match!");
                            let rand = Math.floor(Math.random() * 10);
                            if (pawnType == "zombie") {
                                health = pawnStats[pawnType].pawnSpawn[i].health + rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health + 5;
                                
                            } else if (pawnType == "cyborg") {
                                health = pawnStats[pawnType].pawnSpawn[i].health - rand;
                                // health = pawnStats[pawnType].pawnSpawn[i].health - 5;

                            } else {
                                alert("My apologies, an error has occurred!");
                            };

                            if (health > -11 && health < 111) {
                                console.log("TEST FUNC BELOW:");

                                pawnStats[pawnType].pawnSpawn[i].health = health;
                                console.log(spaceToCheck.childNodes[0].id);
                                console.log(document.getElementById(homeSquare_ID).lastChild);
                                healthInfo(pawnType, pawnId);
                            };
                        };
                    };
                    console.log("CAUTION: the cyborgs are healing you too quickly!");
                };
            };
        } else {
            console.log(`destination space: ${destinationID} is out of the playable area`);
        };

        // weightedMove = require("./weightedMove");
        // weightedMove(enemyId, adjacentSquaresArr);
    };
};