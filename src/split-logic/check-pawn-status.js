pawnStats = require("./pawn-stats");
pawnSwitch = require("./pawn-switch");
module.exports = checkPawnStatus = function () {
    console.log("checkPawnStatus function fires");
    // check pawns' health stats to verify allegiance

    // pawnTypeArr = ["human", "zombie", "cyborg"];
    // TODO: Add 2 more pawn types after adding to create-pawn.js file:
    // pawnTypeArr = ["human", "zombie", "cyborg", "sleeping-zombie", "sleepy-cyborg"];
    // for (let x = 0; x < pawnTypeArr.length; x++) {
    //     let pawnType = pawnTypeArr[x];        
    // };

    // testing ONLY:
    // let pawnType = "human";
    // let pawnSpawn = pawnStats[pawnType]
    humanPawnSpawn = pawnStats.human.pawnSpawn; // <<<<< TESTING ONLY

    for (let i = 0; i < humanPawnSpawn.length; i++) {
        console.log(`health: ${humanPawnSpawn[i].health}`);
        if (humanPawnSpawn[i].health >= 20 && humanPawnSpawn[i].health <= 80) {
            pawnSwitch(humanPawnSpawn[i].id, "human");
            console.log(`${humanPawnSpawn[i].id} is still HUMAN...for now!`);
        
        } else if (humanPawnSpawn[i].health >= -40 && humanPawnSpawn[i].health < 20) {
            pawnSwitch(humanPawnSpawn[i].id, "zombie");
            console.log(`${humanPawnSpawn[i].id} is no longer human! ${humanPawnSpawn[i].id} joins ZOMBIE HORDE!`);
        
        } else if (humanPawnSpawn[i].health > 80 && humanPawnSpawn[i].health <= 140) {
            pawnSwitch(humanPawnSpawn[i].id, "cyborg");
            console.log(`${humanPawnSpawn[i].id} is no longer human! ${humanPawnSpawn[i].id} joins CYBORG REVOLT!`);
            
            // } else if (humanPawnSpawn[i].health > 0 && humanPawnSpawn[i].health < 20) {
            // pawnSwitch(humanPawnSpawn[i].id, "sleepy-zombie", "cyborg");
            // TODO: add sleepy-zombie here!
            //     console.log(`ALERT!!! {humanPawnSpawn[i].id} is barely human!`);
            
            // } else if (humanPawnSpawn[i].health > 80 && humanPawnSpawn[i].health < 100) {
            // pawnSwitch(humanPawnSpawn[i].id, "sleepy-cyborg");
            // TODO: add sleepy-cyborg here!
            //     console.log(`ALERT!!! {humanPawnSpawn[i].id} is barely human!`);
        
        } else if (humanPawnSpawn[i].health < -40 || humanPawnSpawn[i].health > 140) {
            pawnSwitch("permafrost"); // TODO: they don't move and potentially block movement and shield attacks from enemies;
            console.log(`${humanPawnSpawn[i].id} is beyond the reach of the NANITES... ${humanPawnSpawn[i].id} has been eliminated!`);
        
        } else {
            console.log("an calculation error has occurred");
        };
    };
    // health = +10;
    // pawnStats.human.pawnSpawn[i].health = health;
};