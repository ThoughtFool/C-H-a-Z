const pawnStats = require("./pawn-stats");
const pawnSwitch = require("./pawn-switch");
const updatePercent = require("./update-percent");

module.exports = checkPawnStatus = function (pawnType, pawnTypeTotal) {
    console.log("checkPawnStatus function fires");

    // TODO: Add 2 more pawn types after adding to create-pawn.js file:
    // pawnTypeArr = ["human", "zombie", "cyborg", "sleeping-zombie", "sleepy-cyborg"];

    console.log("pawnType before for loop:"); 
    console.log(pawnType);

    let pawnStat_Type = pawnStats[pawnType]; 
    let allPawnSpawn = pawnStat_Type.pawnSpawn;
    console.log("allPawnSpawn[0]");
    console.log(allPawnSpawn[0]);

    for (let i = 0; i < allPawnSpawn.length; i++) {
        console.log(`health: ${allPawnSpawn[i].health}`);
        if (allPawnSpawn[i].health >= 20 && allPawnSpawn[i].health <= 80 && pawnType == "hazmat-human") {
            console.log(`${allPawnSpawn[i].id} is still HUMAN...for now!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health >= -40 && allPawnSpawn[i].health < 20 && pawnType == "human") {
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins ZOMBIE HORDE!`);
            pawnSwitch(allPawnSpawn[i].id, "zombie", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health <= 140 && pawnType == "human") {
            console.log(`${allPawnSpawn[i].id} is no longer human! ${allPawnSpawn[i].id} joins CYBORG REVOLT!`);
            pawnSwitch(allPawnSpawn[i].id, "cyborg", pawnTypeTotal);
        
        } else if (allPawnSpawn[i].health >= 25 && pawnType == "zombie") {
            console.log(`${allPawnSpawn[i].id} is no longer a zombie! ${allPawnSpawn[i].id} rejoins the human race!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);

        } else if (allPawnSpawn[i].health <= 75 && pawnType == "cyborg") {
            console.log(`${allPawnSpawn[i].id} is no longer a cyborg! ${allPawnSpawn[i].id} rejoins the human race!`);
            pawnSwitch(allPawnSpawn[i].id, "human", pawnTypeTotal);

        } else if (allPawnSpawn[i].health < -40 || allPawnSpawn[i].health > 140) {
            console.log(`${allPawnSpawn[i].id} is beyond the reach of the NANITES... ${allPawnSpawn[i].id} has been eliminated!`);
            pawnSwitch(allPawnSpawn[i].id, "permafrost", pawnTypeTotal); // TODO: they don't move and potentially block movement and shield attacks from enemies;
        
        } else {
            console.log("a calculation error has occurred");
            console.log(`i is ${i} and allPawnSpawn[i].health is ${allPawnSpawn[i].health} and  pawnType is ${pawnType}`);
        };
    };
    // updatePercent(pawnTypeTotal);
};

// } else if (allPawnSpawn[i].health > 0 && allPawnSpawn[i].health < 20) {
// pawnSwitch(allPawnSpawn[i].id, "sleepy-zombie", "cyborg");
// TODO: add sleepy-zombie here!
//     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);

// } else if (allPawnSpawn[i].health > 80 && allPawnSpawn[i].health < 100) {
// pawnSwitch(allPawnSpawn[i].id, "sleepy-cyborg");
// TODO: add sleepy-cyborg here!
//     console.log(`ALERT!!! {allPawnSpawn[i].id} is barely human!`);